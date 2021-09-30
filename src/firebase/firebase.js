import {
	initializeApp
} from "firebase/app"
import {
	getDatabase,
	ref,
	set,
	remove,
	update,
	get, 
	onValue, 
	off
	
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


const onValueChange = onValue(ref(database, '/'), (snapshot) => {
	if (snapshot.exists()) {
		const firebaseObject = snapshot.val()
		console.log(`${firebaseObject.name} is a ${firebaseObject.job.title} at ${firebaseObject.job.company}`)
	} else {
		console.log("No data available")
	}
}, {
	onlyOnce: false
}, (e)=>{
	console.log(`Error with data fetching: ${e}`)
})



setTimeout(() => {
	set(ref(database, '/job/company' ), 'Microsoft')
		.then(()=>{
			console.log('Data is saved')
		}).catch((e)=>{
			console.log(`This failed. ${e}`)
		})	
}, 3500)

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