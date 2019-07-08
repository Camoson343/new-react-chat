import React from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNDtLlQTj2-iTCs1uynaUTs0noQibOgJI",
    authDomain: "new-react-chat.firebaseapp.com",
    databaseURL: "https://new-react-chat.firebaseio.com",
    projectId: "new-react-chat",
    storageBucket: "",
    messagingSenderId: "82970245889",
    appId: "1:82970245889:web:bda023a5f7ece222"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <RoomList
        firebase = {firebase}
        />
    </div>
  );
}

export default App;
