from logging import basicConfig

from flask import Flask, jsonify
from flask_cors import CORS

import csv
import os

basicConfig(
    filename='app.log',
    filemode='w',
    format='%(asctime)s %(levelname)s %(message)s'
)

app = Flask(__name__)

CORS(app)


@app.route('/', methods=['GET'])
def index():
    return 'OK'


@app.route('/csv/<string:rawi>/<string:label>', methods=['GET'])
def get_csv(rawi: str, label: str):
    script_dir = os.path.dirname(__file__)
    full_path = os.path.join(script_dir, f'../data/{rawi}/{label}.csv')

    data = []

    with open(full_path, 'r', encoding='utf8') as file:
        csv_file = csv.DictReader(file)

        for lines in csv_file:
            data.append(lines)

    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
