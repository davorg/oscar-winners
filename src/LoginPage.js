import React from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const LoginPage = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Add your logic here to save the login response
  }

  const responseFacebook = (response) => {
    console.log(response);
    // Add your logic here to save the login response
  }

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID" 
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}

export default LoginPage;

