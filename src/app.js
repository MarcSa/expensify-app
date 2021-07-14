import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
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

store.dispatch(setTextFilter('water'))

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000);

// const state=store.getState()

// const visibleExpenses = getVisisbleExpenses(state.expenses, state.filters  )

// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))