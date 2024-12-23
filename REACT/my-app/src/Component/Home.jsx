import React from 'react';
import { appleAuthHelpers } from 'react-apple-signin-auth';
import Login from './Login';
// clientId: 'com.babychakra.alpha1.client',
// redirectURI: 'https://tbvpnc.csb.app/',

const Home = () => {

  const handleSignInCallback = () => {
    console.log(appleAuthHelpers);
  
    // Check if appleAuthHelpers is defined
    if (!appleAuthHelpers) {
      console.error('appleAuthHelpers is not defined');
      return;
    }
  
    appleAuthHelpers.signIn({
      authOptions: {
        clientId: 'com.tracelo.web',
        redirectURI: 'https://647a-116-72-47-222.ngrok-free.app/login',
        scope: 'name email',
        state: 'origin:web',
        usePopup: true, // optional, defaults to false
      },
      onSuccess: (response) => {
        console.log('Sign-in successful:', response);
        // Perform your redirect logic here
        window.location.href = 'https://647a-116-72-47-222.ngrok-free.app/login';
      },
      onError: (error) => {
        console.error('Error during sign-in:', error);
        // You can add more detailed logging here if needed
        alert('Sign-in failed. Please try again.'); // Notify user
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
