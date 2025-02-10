from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from utils.snackjob import get_snack_job
import hashlib
import redis
import os, json

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

r = redis.Redis.from_url(os.environ.get('REDIS_URL'))

@app.route('/api/v1/snackjob', methods=['GET'])
@cross_origin()
def snackjob():
    name = request.args.get('name')
    title = request.args.get('title')
    md5 = request.args.get('md5')

    if (md5 != None and md5 != ''):
        rValue = r.get(md5)
        if (rValue == None):
            return { 'error': 'No hash found' }
    elif (name == '' or name == None or title == None or title == ''):
        return {'error': 'You need to specify title and name'}
    else:
        md5 = hashlib.md5((name + title).encode('utf-8')).hexdigest()

    rValue = r.get(md5)

    if (rValue != None):
        jobObj = json.loads(rValue)
    else:
        total_words = len(list(filter(lambda element: element == ' ', list(name + title)))) + 1
        total_power_of_name = list(map(ord, list(filter(lambda element: element != ' ', list(name + title)))))

        jobObj = {
            "name": name,
            "title": title,
            "snack_job": get_snack_job([total_words, total_power_of_name]),
            "md5": md5
        }

        r.set(md5, json.dumps(jobObj))


    return jsonify(jobObj)

