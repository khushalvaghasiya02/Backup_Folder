import React from 'react';
import AppleLogin from 'react-apple-login';

const Apple = () => {
  return (
    <div>
      <h1>Apple Sign-In Example</h1>
      <AppleLogin clientId="com.babychakra.alpha1.client" redirectURI="https://tbvpnc.csb.app/" onS/>
    </div>
  );
};

export default Apple;


// const clientId = "com.babychakra.alpha1.client";
// const scope = "name email";
// const redirectURI = "https://tbvpnc.csb.app/";
// const state = "origin:web";
