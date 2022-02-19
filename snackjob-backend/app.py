from flask import Flask, request, json
from utils.snackjob import get_snack_job

app = Flask(__name__)

@app.route('/api/v1/snackjob', methods=['POST'])
def snackjob():
    name = request.form.get('name')
    total_words = len(list(filter(lambda element: element == ' ', list(name)))) + 1
    total_power_of_name = list(map(ord, list(filter(lambda element: element != ' ', list(name)))))
    return {
            "snack_job": get_snack_job([total_words, total_power_of_name]),
        }

