import { appleAuthHelpers } from 'react-apple-signin-auth';
// OR
// import appleAuthHelpers from 'react-apple-signin-auth/dist/appleAuthHelpers'; // @unstable - might change with upgrades

/**
 * perform apple signIn operation
 */
appleAuthHelpers.signIn({
  authOptions: {
    // same as above
  },
  onSuccess: (response) => console.log(response),
  onError: (error) => console.error(error),
});

// OR

/** promisified version - promise resolves with response on success or undefined on error -- note that this only work with usePopup: true */
const response = await appleAuthHelpers.signIn({
  authOptions: {
    // same as above
  },
  onError: (error) => console.error(error),
});

if (response) {
  console.log(response);
} else {
  console.error('Error performing apple signin.');
}