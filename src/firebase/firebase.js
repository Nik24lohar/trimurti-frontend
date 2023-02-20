import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/storage'
  const firebaseConfig = {
        apiKey: "AIzaSyC7sW9R7zBGes2poLAA6qP_DuiyXHfWUDA",
        authDomain: "react-trimurti.firebaseapp.com",
        databaseURL: "https://react-trimurti-default-rtdb.firebaseio.com",
        projectId: "react-trimurti",
        storageBucket: "react-trimurti.appspot.com",
        messagingSenderId: "835939200765",
        appId: "1:835939200765:web:fe15acbd463ddf2c289894",
        measurementId: "G-PMXZ86HD0C"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      export const storage=firebase.storage();
      export default firebase 
