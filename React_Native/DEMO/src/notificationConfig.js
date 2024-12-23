// import PushNotification from 'react-native-push-notification';

// // Configure notifications
// PushNotification.configure({
//   onNotification: function(notification) {
//     console.log('NOTIFICATION:', notification);
//   },
//   requestPermissions: true,
// });

// // Function to show local notification
// export const showNotification = (title, message) => {
//   PushNotification.localNotification({
//     title: title,
//     message: message,
//     playSound: true,
//     soundName: 'default',
//     importance: 'high',
//   });
// };

// import PushNotification from 'react-native-push-notification';

// // Initialize Push Notifications
// PushNotification.configure({
//   onNotification: function(notification) {
//     console.log('NOTIFICATION:', notification);
//   },
//   requestPermissions: true,
// });

// // Get initial notification
// PushNotification.getInitialNotification()
//   .then((notification) => {
//     if (notification) {
//       console.log('Initial Notification:', notification);
//     }
//   })
//   .catch((err) => {
//     console.error('Error fetching initial notification:', err);
//   });

// PushNotification.getInitialNotification()
//   .then((notification) => {
//     if (notification) {
//       // Process the notification
//       console.log('Initial Notification:', notification);
//     } else {
//       console.log('No initial notification');
//     }
//   })
//   .catch((err) => {
//     console.error('Error fetching initial notification:', err);
//   });
