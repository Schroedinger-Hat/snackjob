from flask import Flask, request, json
import random

app = Flask(__name__)

experience_list = {
    'Junior': 0,
    'Mid': 0,
    'Intermediate': 0,
    'Senior': 0,
}

position_list = {
    'Digital': 40,
    'Tech lead': 50,
    'Head of': 50,
    'Devops': 60,
    'Developer': 60,
    'Frontend Developer': 60,
    'Web Developer': 60,
    'Backend Developer': 60,
    'Data Scientist': 60,
    'Software Engineer': 60,
    'Founder': 70,
    'Co-Founder': 70,
    'Manager': 70,
    'CEO': 80,
    'CTO': 80,
    'Business Solution': 80,
    'Manager': 80,
    'Staff Engineer': 80,
    'Mentor': 80,
    'Life Coach': 80,
    'Google Developer': 80,
    'Microsoft MVP': 90,
}

tech_list = {
    'Machine Learning': 20,
    'UX': 20,
    'UI': 20,
    'Marketing': 20,
    'Communication': 20,
    'Java': 30,
    'Python': 30,
    'Ruby': 30,
}

reinforcement_list = {
    'Expert': 5,
    'Creative': 5,
    'International': 5,
}


@app.route('/api/v1/snackjob', methods=['POST'])
def snackjob():
    job = request.form.get('job') or ""
    power = request.form.get('power') or 100
    return {
            "snack_job": get_snack_job(len(job.split()), float(power)),
        }

def get_snack_job(section_number=3, power=100.0):

    total_power = 0
    snack_job = ""

    # exp
    random.seed()
    if bool(random.getrandbits(1)):
        experience = random.choice(list(experience_list.keys()))
        total_power += experience_list[experience]
        snack_job += experience + ' '

    # position
    while total_power < 0.5*power:
        random.seed()
        position = random.choice(list(position_list.keys()))
        total_power += position_list[position]
        snack_job += position + ' '
    if len(snack_job.split()) >= section_number:
        return snack_job.rstrip()

    # tech
    while total_power < 0.9*power:
        random.seed()
        tech = random.choice(list(tech_list.keys()))
        total_power += tech_list[tech]
        snack_job += tech + ' '
    if len(snack_job.split()) >= section_number:
        return snack_job.rstrip()

    # reinforcementes
    if total_power <= power:
        random.seed()
        reinforcement = random.choice(list(reinforcement_list.keys()))
        total_power += reinforcement_list[reinforcement]
        snack_job += reinforcement + ' '
    if len(snack_job.split()) >= section_number:
        return snack_job.rstrip()

    return snack_job.rstrip()

