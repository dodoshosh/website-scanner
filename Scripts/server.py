# app.py

from flask import Flask, jsonify, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/injections')
def injections():
    response = {"report": 'Hello from the Python backend!', "score": '8'}
    return response


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
