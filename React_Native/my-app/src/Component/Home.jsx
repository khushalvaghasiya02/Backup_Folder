import React from 'react';
import { appleAuthHelpers } from 'react-apple-signin-auth';
import Login from './Login';

const Home = () => {

  const handleSignInCallback = () => {
    appleAuthHelpers.signIn({
      authOptions: {
        clientId: 'com.babychakra.alpha1.client',
        redirectURI: 'https://tbvpnc.csb.app/',
        scope: 'name email',
        state: 'origin:web',
        usePopup: true, // optional, defaults to false
      },
      onSuccess: (response) => {
        console.log('Sign-in successful:', response);
        // You can now send this response to your backend for further processing
      },
      onError: (error) => {
        console.error('Error during sign-in:', error);
      },
    });
  };

  const handleSignInAsync = async () => {
    try {
      const response = await appleAuthHelpers.signIn({
        authOptions: {
          clientId: 'com.babychakra.alpha1.client',
          redirectURI: 'https://tbvpnc.csb.app/',
          scope: 'name email',
          state: 'origin:web',
          usePopup: true, // this is required for the promise-based approach
        },
        onError: (error) => {
          console.error('Error during sign-in:', error);
        },
      });

      if (response) {
        console.log('Sign-in successful:', response);
        // You can now send this response to your backend for further processing
      } else {
        console.error('Error performing Apple sign-in.');
      }
    } catch (error) {
      console.error('Exception during sign-in:', error);
    }
  };

  return (
    <div>
      <h1>Apple Sign-In Example</h1>
      <button onClick={handleSignInCallback}>Sign in with Apple</button>
      <button onClick={handleSignInAsync}>Sign in with Apple</button>
      <Login />
    </div>
  );
};

export default Home;


// const clientId = "com.babychakra.alpha1.client";
// const scope = "name email";
// const redirectURI = "https://tbvpnc.csb.app/";
// const state = "origin:web";
