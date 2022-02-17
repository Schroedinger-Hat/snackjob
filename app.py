from flask import Flask
import random

app = Flask(__name__)

d = {
    'experience': [ 'junior', 'mid', 'intermediate', 'senior', 'expert' ],
    'name': [ 'UX', 'UI', 'Developer', 'Devops' ],
    'tech': [ 'java', 'angular', 'ansible', 'python' ]
}
random.choice(list(d.values()))

@app.route('/way', methods=['GET'])
def way():
    return get_random_job()

def get_random_job():
   experience = random.choice(list(d['experience']))
   name = random.choice(list(d['name']))
   tech = random.choice(list(d['tech']))
   return experience + ' ' + name + ' ' + tech
