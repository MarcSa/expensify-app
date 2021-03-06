import firebase from 'firebase/app'
import 'firebase/database'

// FIREBASE V9

// import {
// 	initializeApp
// } from "firebase/app"
// import moment from "moment"
// import {
// 	getDatabase,
// 	ref,
// 	set,
// 	remove,
// 	update,
// 	get, 
// 	onValue, 
// 	off,
// 	push, 
// 	forEach,
// 	onChildRemoved,
// 	onChildChanged,
// 	onChildAdded 
	
// } from "firebase/database"

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
} 

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {firebase, database as default}


// firebase v9 notation

// Child removed

// onChildRemoved(ref(database, 'expenses'), (snapshot) => {
// 	if (snapshot.exists()) {

// 		console.log(snapshot.key, snapshot.val());
// 	} else {
// 		console.log("No data available")
// 	}
// }, {
// 	onlyOnce: false
// }, (e)=>{
// 	console.log(`Error with data fetching: ${e}`)
// })

// onChildChanged(ref(database, 'expenses'), (snapshot) => {
// 	if (snapshot.exists()) {
// 		console.log(snapshot.key, snapshot.val());
// 	} else {
// 		console.log("No data available")
// 	}
// }, {
// 	onlyOnce: false
// }, (e)=>{
// 	console.log(`Error with data fetching: ${e}`)
// })

// onChildAdded(ref(database, 'expenses'), (snapshot) => {
// 	if (snapshot.exists()) {
// 		console.log(snapshot.key, snapshot.val());
// 	} else {
// 		console.log("No data available")
// 	}
// }, {
// 	onlyOnce: false
// }, (e)=>{
// 	console.log(`Error with data fetching: ${e}`)
// })

// onValue(ref(database, 'expenses'), (snapshot) => {
// 	if (snapshot.exists()) {
// 		const expenses=[]
// 		snapshot.forEach((childSnapshot)=>{
// 			expenses.push({
// 				id:childSnapshot.key,
// 				...childSnapshot.val()
// 			})
// 		})
// 		console.log(expenses);
// 	} else {
// 		console.log("No data available")
// 	}
// }, {
// 	onlyOnce: false
// }, (e)=>{
// 	console.log(`Error with data fetching: ${e}`)
// })

// push(ref(database, 'expenses'), {
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// })

// push(ref(database, 'notes'), {
// 	title: 'Course Topics',
// 	body: 'React Native, Angular, Python'
// })

// const notes = [{
// 	id: '12',
// 	title: 'First note',
// 	body: 'this is my note'
// },{
// 	id: '1cgfth2',
// 	title: 'Second note',
// 	body: 'this is my note'
// }]

// set(ref(database, 'notes'), notes)

// const onValueChange = onValue(ref(database, '/'), (snapshot) => {
// 	if (snapshot.exists()) {
// 		const firebaseObject = snapshot.val()
// 		console.log(`${firebaseObject.name} is a ${firebaseObject.job.title} at ${firebaseObject.job.company}`)
// 	} else {
// 		console.log("No data available")
// 	}
// }, {
// 	onlyOnce: false
// }, (e)=>{
// 	console.log(`Error with data fetching: ${e}`)
// })

// setTimeout(() => {
// 	set(ref(database, '/job/company' ), 'Microsoft')
// 		.then(()=>{
// 			console.log('Data is saved')
// 		}).catch((e)=>{
// 			console.log(`This failed. ${e}`)
// 		})	
// }, 3500)

// setTimeout(() => {
// 	off(ref(database, '/'), onValueChange)

// }, 7000)

// setTimeout(() => {
// 	set(ref(database, '/age' ), 38  )
// 		.then(()=>{
// 			console.log('Data is saved')
// 		}).catch((e)=>{
// 			console.log(`This failed. ${e}`)
// 		})	
// }, 10500)

// set(ref(database, '/' ), {
//   name: 'Marc',
//   age:38,
//   stressLevel:6,
//   job: {
// 	  title:'Software developer',
// 	  company: 'Google'
// 	},
//   location:{
// 	  city:'Santpedor',
// 	  country: 'Spain'
//   }
// }).then(()=>{
// 	console.log('Data is saved')
// }).catch((e)=>{
// 	console.log(`This failed. ${e}`)
// })

// update(ref(database),{
// 	stressLevel:9,
// 	'job/company':'Amazon',
// 	'location/city':'Seattle'
// }).then(()=>{
// 	console.log('Database modified');
// }).catch((e)=>{
// 	console.log(`Update error: ${e}`);
// })

// set(ref(database, '/isSingle' ), null).then(()=>{
// 	console.log('removed')
// }).catch((e)=>{
// 	console.log(`This failed. ${e}`)
// })

// remove(ref(database, '/isSingle' )).then(()=>{
// 	console.log('removed')
// }).catch((e)=>{
// 	console.log(`This failed. ${e}`)
// })