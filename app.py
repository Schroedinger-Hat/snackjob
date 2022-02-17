from flask import Flask
import random

app = Flask(__name__)

d = {
    'experience': [ 'junior', 'mid', 'intermediate', 'senior', 'expert' ],
    'name': [ 'UX', 'UI', 'Developer', 'Devops', ''],
    'tech': [ 'Machine Learning', 'UI', 'Developer', 'Devops' ]
}

@app.route('/way', methods=['GET'])
def way():
    return get_random_job()

def get_random_job():
    random.seed()
    tmp = ""
    for i in range(random.randint(1, 4)):
        random.seed()
        tmp2 = random.choice(d['name'])
        while tmp2 in tmp:
            random.seed()
            tmp2 = random.choice(d['name'])
        tmp3 = random.choice(d['tech'])
        while tmp3 in tmp:
            random.seed()
            tmp2 = random.choice(d['tech'])
        tmp += tmp3 + ' '
    return random.choice(d['experience']) + ' ' + tmp
