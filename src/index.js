import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj4XUKO6YMuui4O0oAZYiFuXDzOQHfwWo",
  authDomain: "mi-tienda-54f0f.firebaseapp.com",
  projectId: "mi-tienda-54f0f",
  storageBucket: "mi-tienda-54f0f.appspot.com",
  messagingSenderId: "986146776102",
  appId: "1:986146776102:web:9edce7df1b0d382df072e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
