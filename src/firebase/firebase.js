import {
	initializeApp
} from "firebase/app";
import {
	getDatabase,
	ref,
	set
} from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyABif5vCeo6_BB047cTmam7wShiMsN8Nqk",
	authDomain: "expensify-d3f79.firebaseapp.com",
	databaseURL: "https://expensify-d3f79-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "expensify-d3f79",
	storageBucket: "expensify-d3f79.appspot.com",
	messagingSenderId: "593844685122",
	appId: "1:593844685122:web:807f8e314914dba17ca0db"
}


initializeApp(firebaseConfig)

const db = getDatabase();
set(ref(db, '/' ), {
  name: 'Marc',
});
