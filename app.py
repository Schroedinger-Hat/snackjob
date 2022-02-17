from flask import Flask, request, json
import random

app = Flask(__name__)


experience_list = [
    'Junior',
    'Senior',
    'Twisted',
    'Digital',
    'Space',
    'Part-Time',
    'Professional',
]

position_list = [
    'Beverage',
    'Overlord',
    'Animal',
    'Head of',
    'Wizard',
    'Problem Wrangler',
    'Director of',
    'Retail',
    'Alchemist',
    'Rock star',
    'Manager',
    'Mentor',
    'Chief',
    'Life Coach',
    'Executive Manager of',
    'Collector of',
    'Co-Founder of',
    'Manager',
    'Officer',
    'Travel Agent',
    'Psychologist',
    'Santa Claus',
    'Ambassador of',
]

tech_list = [
    'Dissemination',
    'Warrior',
    'Jedi',
    'Space',
    'Snuggler',
    'Sleeper',
    'Ninja',
]

reinforcement_list = [
    'Destroyer',
    'Lover',
    'Expert',
    'Optimizer',
    'Creative',
    'International',
    'Demi-God',
    'Funambolist',
    'Evangelist',
    'Specialist',
    'Consultant',
    'to the Bone',
    '“Show me the Money!”',
]


@app.route('/api/v1/snackjob', methods=['GET'])
def snackjob():
    return {
            "snack_job": get_snack_job(),
        }

def get_snack_job():

    snack_job = ""

    # exp
    random.seed()
    snack_job += random.choice(experience_list) + ' '

    # position
    random.seed()
    snack_job += random.choice(position_list) + ' '

    # tech
    random.seed()
    tech = ''
    while True:
        tech = random.choice(tech_list)
        if tech not in snack_job:
            break
    snack_job += tech + ' '

    # reinforcementes
    if bool(random.getrandbits(1)):
        random.seed()
        snack_job += random.choice(reinforcement_list) + ' '

    return snack_job.rstrip()

