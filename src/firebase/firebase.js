import {
	initializeApp
} from "firebase/app"
import moment from "moment"
import {
	getDatabase,
	ref,
	set,
	remove,
	update,
	get, 
	onValue, 
	off,
	push, 
	forEach,
	onChildRemoved,
	onChildChanged,
	onChildAdded 
	
} from "firebase/database"

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

const database = getDatabase()

// Child removed

onChildRemoved(ref(database, 'expenses'), (snapshot) => {
	if (snapshot.exists()) {

		console.log(snapshot.key, snapshot.val());
	} else {
		console.log("No data available")
	}
}, {
	onlyOnce: false
}, (e)=>{
	console.log(`Error with data fetching: ${e}`)
})

onChildChanged(ref(database, 'expenses'), (snapshot) => {
	if (snapshot.exists()) {
		console.log(snapshot.key, snapshot.val());
	} else {
		console.log("No data available")
	}
}, {
	onlyOnce: false
}, (e)=>{
	console.log(`Error with data fetching: ${e}`)
})

onChildAdded(ref(database, 'expenses'), (snapshot) => {
	if (snapshot.exists()) {
		console.log(snapshot.key, snapshot.val());
	} else {
		console.log("No data available")
	}
}, {
	onlyOnce: false
}, (e)=>{
	console.log(`Error with data fetching: ${e}`)
})

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