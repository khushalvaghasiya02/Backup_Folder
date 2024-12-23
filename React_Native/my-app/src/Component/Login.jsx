import React from "react";
import AppleSignInButton from "react-apple-signin-auth";

function Login() {
  return (
    <div>
      <AppleSignInButton
        /** Auth options passed to AppleID.auth.init() */
        authOptions={{
          /** Client ID - eg: 'com.example.com' */
          clientId: "com.babychakra.alpha1.client",
          /** Requested scopes, seperated by spaces - eg: 'email name' */
          scope: "name email",
          /** Apple's redirectURI - must be one of the URIs you added to the serviceID - the undocumented trick in apple docs is that you should call auth from a page that is listed as a redirectURI, localhost fails */
          redirectURI: "https://tbvpnc.csb.app/",
          /** State string that is returned with the apple response */
          state: "origin:web",
          /** Nonce */
          nonce: "nonce",
          /** Uses popup auth instead of redirection */
          // usePopup: ${authOptions.usePopup},
        }} // REQUIRED
        /** General props */
        uiType="dark"
        /** className */
        className="apple-auth-btn"
        /** Removes default style tag */
        noDefaultStyle={false}
        /** Allows to change the button's children, eg: for changing the button text */
        buttonExtraChildren="Continue with Apple"
        /** Extra controlling props */
        /** Called upon signin success in case authOptions.usePopup = true -- which means auth is handled client side */
        onSuccess={(response) => console.log(response)} // default = undefined
        /** Called upon signin error */
        onError={(error) => console.error(error)} // default = undefined
        /** Skips loading the apple script if true */
        skipScript={false} // default = undefined
        /** Apple image props */
        iconProp={{ style: { marginTop: "10px" } }} // default = undefined
        /** render function - called with all props - can be used to fully customize the UI by rendering your own component  */
        render={(props) => <button {...props}>Apple Login</button>}
      />
    </div>
  );
}

export default Login;
