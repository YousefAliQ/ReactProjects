import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'sdfsdfsdf',
        description: 'Jan. Rent',
        note: 'the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};