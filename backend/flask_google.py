from flask import Flask, redirect, request, session, url_for
import requests
from urllib.parse import quote,urlencode

app = Flask(__name__)
#app.secret_key = 'your_secret_key'

# Replace these with your client ID and secret from the Google API console
GOOGLE_CLIENT_ID = '156285614807-nfb2vpnmvmhurm3eqf3kbml13r816let.apps.googleusercontent.com'
GOOGLE_CLIENT_SECRET = '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'
REDIRECT_URI = 'http://localhost:5000/callback'

# Google OAuth endpoints
AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/v2/auth'
TOKEN_URL = 'https://oauth2.googleapis.com/token'
USER_INFO_URL = 'https://www.googleapis.com/oauth2/v2/userinfo'

@app.route('/')
def home():
    if 'credentials' not in session:
        return '<a href="/login">Login with Google</a>'
    return 'Welcome, you are logged in! <a href="/logout">Logout</a>'
@app.route('/login')
def login():
    scope = "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
    auth_uri = ('https://accounts.google.com/o/oauth2/auth?' +
                urlencode({
                    'client_id': GOOGLE_CLIENT_ID,
                    'response_type': 'code',
                    'scope': scope,
                    'redirect_uri': REDIRECT_URI,
                    'access_type': 'offline',
                    'prompt': 'select_account'
                }))
    return redirect(auth_uri)

@app.route('/callback')
def callback():
    if 'code' not in request.args:
        return 'Missing code', 400
    code = request.args.get('code')
    token_url = 'https://oauth2.googleapis.com/token'
    token_data = {
        'code': code,
        'client_id': GOOGLE_CLIENT_ID,
        'client_secret': GOOGLE_CLIENT_SECRET,
        'redirect_uri': REDIRECT_URI,
        'grant_type': 'authorization_code',
    }
    token_r = requests.post(token_url, data=token_data)
    session['credentials'] = token_r.json()

    return redirect(url_for('home'))

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
