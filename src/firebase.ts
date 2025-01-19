import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase, ref, onValue, off, runTransaction } from "firebase/database";
export interface Counter { [key: string]: number };

export interface Stats {
  views: Counter,
  hearts: Counter,
  downloads: Counter
}

console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase();

const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const handleAnonymousLogin = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    const user = userCredential.user;
    console.log("User signed in anonymously:", user);
    return userCredential;
  } catch (error) {
    console.error("Error during anonymous login:", error);
  }
};

const increaseHeart = (id: string) => {
  const counterRef = ref(database, (devMode ? "dev/" : "") + 'hearts/' + id);
  runTransaction(counterRef, (currentData) => {
    if (currentData === null) {
      return 1; // Initial value if the counter doesn't exist
    } else {
      return currentData + 1;
    }
  });
}

const decreaseHeart = (id: string) => {
  const counterRef = ref(database, (devMode ? "dev/" : "") + 'hearts/' + id);
  runTransaction(counterRef, (currentData) => {
    if (currentData === null || currentData < 1) {
      return 0; // Initial value if the counter doesn't exist
    } else {
      return currentData - 1;
    }
  });
}

const logView = (id: string) => {
  const counterRef = ref(database, (devMode ? "dev/" : "") + 'views/' + id);
  runTransaction(counterRef, (currentData) => {
    if (currentData === null) {
      return 1; // Initial value if the counter doesn't exist
    } else {
      return currentData + 1;
    }
  });
}

const logDownload = (id: string) => {
  const counterRef = ref(database, (devMode ? "dev/" : "") + 'downloads/' + id);
  runTransaction(counterRef, (currentData) => {
    if (currentData === null) {
      return 1; // Initial value if the counter doesn't exist
    } else {
      return currentData + 1;
    }
  });
}

const downloadViewsHeartsDownloads = (): Promise<Stats> => {
  const viewsRef = ref(database, 'views/');
  const heartsRef = ref(database, 'hearts/');
  const downloadsRef = ref(database, 'downloads/');


  const viewPromise = new Promise<Counter>(resolve => {
    onValue(viewsRef, (snapshot) => {
      const data = snapshot.val();
      off(viewsRef, 'value');
      resolve(data? data : {});
    });
  })

  const heartsPromise = new Promise<Counter>(resolve => {
    onValue(heartsRef, (snapshot) => {
      const data = snapshot.val();
      off(heartsRef, 'value');
      resolve(data? data : {});
    });
  })

  const downloadsPromise = new Promise<Counter>(resolve => {
    onValue(downloadsRef, (snapshot) => {
      const data = snapshot.val();
      off(downloadsRef, 'value');
      resolve(data? data : {});
    });
  })

  return Promise.all([viewPromise, heartsPromise, downloadsPromise]).then(([views, hearts, downloads]) => {
    return {
      views: views,
      hearts: hearts,
      downloads: downloads,
    }
  });
}


export { app, analytics, handleAnonymousLogin, logView, increaseHeart, decreaseHeart, logDownload, downloadViewsHeartsDownloads };
