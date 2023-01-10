# app.py

from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
import sys
sys.path.insert(0, '../Scanner')
from Scanner import WebScan

app = Flask(__name__)
CORS(app)


@app.route('/api/injections')
def injections():
    usersUrl = request.args.get('url', '')
    response = WebScan(usersUrl)
    if (response == None):
        response = {"report": 'Scanner Error', "score": '0'}
    return response


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
