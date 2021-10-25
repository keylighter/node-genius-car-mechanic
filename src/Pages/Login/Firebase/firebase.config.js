console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;



// original config -  took it to .env.local

// apiKey: "AIzaSyCtw0oSMI1DktZcwGmUHbxR-RIT7jdaoao",
// authDomain: "genius-car-node-practice.firebaseapp.com",
// projectId: "genius-car-node-practice",
// storageBucket: "genius-car-node-practice.appspot.com",
// messagingSenderId: "31022484866",
// appId: "1:31022484866:web:8e4f2c47d797c354f1139b"