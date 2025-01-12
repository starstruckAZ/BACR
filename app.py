from flask import Flask, render_template, request, jsonify, redirect, url_for
from datetime import datetime

app = Flask(__name__)

VALID_CREDENTIALS = {
    "agent-327": "parallax-413"
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if username in VALID_CREDENTIALS and VALID_CREDENTIALS[username] == password:
        return jsonify({"status": "success", "message": "ACCESS GRANTED", "redirect": "/classified"})
    else:
        return jsonify({"status": "error", "message": "ACCESS DENIED"})

@app.route('/classified')
def classified():
    current_time = datetime.now().strftime("%H:%M:%S")
    return render_template('classified.html', current_time=current_time)

if __name__ == '__main__':
    app.run(debug=True)