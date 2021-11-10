import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0', () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})
test('should add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(195)
})
test('should add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(149745)
})
