import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDuy2aW5KzYSebGQNX4ZKJOxYzrxJcfXMs",
    authDomain: "ecommerce-685e2.firebaseapp.com",
    projectId: "ecommerce-685e2",
    storageBucket: "ecommerce-685e2.appspot.com",
    messagingSenderId: "807096372695",
    appId: "1:807096372695:web:14df43f45611de0ae1cf92"
};

export const app = initializeApp(firebaseConfig);