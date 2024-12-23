import React from 'react';
import AppleLogin from 'react-apple-login';
import { redirect } from 'react-router-dom';

const Reg = () => {
    // Define the callback function
    const appleResponse = (response) => {
        console.log("Apple Login Response:", response);

        if (response && response.authorization) {
            const authorizationCode = response.authorization.code;

            // Redirect or handle the authorization code as needed
            console.log("Authorization Code:", authorizationCode);
            // You can perform a redirect or further process the login
            window.location.href = `/login?code=${authorizationCode}`;
        } else {
            console.error("Apple login failed or no authorization data received.");
        }
    };

    return (
        <div>
            <AppleLogin
                clientId="com.tracelo.web" // Your Apple app's clientId
                redirectURI="https://647a-116-72-47-222.ngrok-free.app/login" // Ensure this matches Apple's config
                usePopup={true} // Keep the login flow in the same tab
                callback={appleResponse} // Callback to handle response
                scope="email name" // Request email and name from user
                responseMode="query" // Data returned via query parameters
                render={(renderProps) => ( // Custom Apple Sign-In Button
                    <button
                        onClick={renderProps.onClick} // Trigger the login flow in the current tab
                        style={{
                            backgroundColor: "white",
                            padding: 10,
                            border: "1px solid black",
                            fontFamily: "none",
                            lineHeight: "25px",
                            fontSize: "25px"
                        }}
                    >
                        <i className="fa-brands fa-apple px-2"></i>
                        Continue with Apple
                    </button>
                )}
            />
        </div>
    );
};

export default Reg;

// run live url from redirect