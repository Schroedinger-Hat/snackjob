from flask import Flask
import random

app = Flask(__name__)

d = {
    'experience': [ 'junior', 'mid', 'intermediate', 'senior', 'expert' ],
    'name': [ 'Developer', 'Devops', 'Data Scientist'],
    'tech': [ 'Machine Learning', 'Java', 'Python', 'Ruby', 'UX', 'UI' ]
}

@app.route('/way', methods=['GET'])
def way():
    return get_random_job()

def get_random_job():
    random.seed()
    tmp = ""
    for i in range(random.randint(1, 4)):
        random.seed()
        tech_or_name = bool(random.getrandbits(1))
        if tech_or_name:
            tech = random.choice(d['tech'])
            while tech in tmp:
                random.seed()
                tech = random.choice(d['tech'])
            tmp += tech + ' '
        else:
            name = random.choice(d['name'])
            while name in tmp:
                random.seed()
                name = random.choice(d['name'])
            tmp += name + ' '
    return random.choice(d['experience']) + ' ' + tmp
