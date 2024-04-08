from flask import Flask, redirect, request, session
from authlib.integrations.flask_client import OAuth

app = Flask(__name__)
app.secret_key = 'your_secret_key'
oauth = OAuth(app)

auth0 = oauth.register(
    'auth0',
    client_id='your_client_id',
    client_secret='your_client_secret',
    api_base_url='https://your_domain.auth0.com',
    access_token_url='https://your_domain.auth0.com/oauth/token',
    authorize_url='https://your_domain.auth0.com/authorize',
    client_kwargs={
        'scope': 'openid profile email',
    },
)

@app.route('/login')
def login():
    return auth0.authorize_redirect(redirect_uri='your_streamlit_callback_url')

@app.route('/callback')
def callback_handling():
    token = auth0.authorize_access_token()
    resp = auth0.get('userinfo')
    userinfo = resp.json()

    # Here, you would typically save these details in a secure session or database
    session['jwt_payload'] = userinfo
    session['profile'] = {
        'user_id': userinfo['sub'],
        'name': userinfo['name'],
        'picture': userinfo['picture']
    }

    # Redirect to Streamlit app or a page indicating a successful login
    return redirect('your_streamlit_app_url')

if __name__ == "__main__":
    app.run(port=5000)
