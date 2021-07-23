import moment from 'moment'
import { expect } from '@jest/globals'
import {
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate
} from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate a sort date object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('should generate a sort amount object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('should generate a set text filter object', () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should generate a set text filter object default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
})