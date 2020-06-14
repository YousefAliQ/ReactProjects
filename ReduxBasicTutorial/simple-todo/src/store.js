import { createStore } from 'redux'
import todoApp from './reducers'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

const store = createStore(todoApp, window.STATE_FROM_SERVER)

console.log(store.getStatus())

const unsubscribe = store.subscribe(() => { console.log(store.getStatus()) })

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()



