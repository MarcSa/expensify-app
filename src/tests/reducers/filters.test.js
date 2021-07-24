import moment from "moment"
import filtersReducer from '../../reducers/filters'

test('Should setup default filter values', () => {
    const state= filtersReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('Should set sort by amount', () => {
    const state= filtersReducer(undefined, {type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('Should set sort by to date', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action = {type:'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)

    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const currentState = {
        text:'Hello',
        startDate:undefined,
        endDate:undefined,
        sortBy:'date'
    }
    const action = { type:'SET_TEXT_FILTER', text:'Hi' }
    const state = filtersReducer(currentState, action)
    expect(state.text).toBe('Hi')
})

test('Should set start date filter', () => {
    const currentState = {
        text:'Hello',
        startDate:undefined,
        endDate:undefined,
        sortBy:'date'
    }
    const action = { type:'SET_START_DATE', startDate:moment(0).add(4, 'days').format('DD-MM-YYYY') }
    const state = filtersReducer(currentState, action)
    expect(state.startDate).toBe( moment(0).add(4, 'days').format('DD-MM-YYYY') )
})

test('Should set end date filter', () => {
    const currentState = {
        text:'Hello',
        startDate:undefined,
        endDate:undefined,
        sortBy:'date'
    }
    const action = { type:'SET_END_DATE', endDate:moment(0).subtract(4, 'days').format('DD-MM-YYYY') }
    const state = filtersReducer(currentState, action)
    expect(state.endDate).toBe( moment(0).subtract(4, 'days').format('DD-MM-YYYY') )
})