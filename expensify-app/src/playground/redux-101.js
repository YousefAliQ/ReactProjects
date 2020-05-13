import { createStore } from 'redux';

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

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

//unsubscribe();

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});
