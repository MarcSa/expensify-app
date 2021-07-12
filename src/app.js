import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisisbleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({
    description:'Water Bill', 
    note:'Fucking Water Bill', 
    amount:20000, 
    createdAt: 0 
}))

store.dispatch(addExpense({
    description:'Gas Bill', 
    note:'Fucking Gas Bill', 
    amount:25000, 
    createdAt: 0 
}))

store.dispatch(setTextFilter('bill'))

const state=store.getState()

const visibleExpenses = getVisisbleExpenses(state.expenses, state.filters  )

console.log(visibleExpenses)



ReactDOM.render(<AppRouter/>, document.getElementById('app'))