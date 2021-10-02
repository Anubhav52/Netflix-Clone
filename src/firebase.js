import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



// this is like the key to login into stuff.
const firebaseConfig = {
    apiKey: "AIzaSyCDsYFftgxQPCSlGXAt-tKkOxTDVaLtzys",
    authDomain: "netflix-clone-c5420.firebaseapp.com",
    projectId: "netflix-clone-c5420",
    storageBucket: "netflix-clone-c5420.appspot.com",
    messagingSenderId: "1022948064681",
    appId: "1:1022948064681:web:3e145d9dc146781d6898b8"
};

const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);
const auth = getAuth();

export { auth };
export default db;