import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = (count) => ({
    type: 'SET',
    count
});

const store = createStore((state = { count: 0 }, action) => {

    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

    switch (action.type) {
        case 'INCREMENT': return {
            count: state.count + incrementBy
        };
        case 'DECREMENT': return {
            count: state.count - decrementBy
        };
        case 'SET': return {
            count: action.count
        }
        case 'RESET': return {
            count: 0
        };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });


store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());


store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount(101));
