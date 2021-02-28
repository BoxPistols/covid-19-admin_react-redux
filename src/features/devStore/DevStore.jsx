import React from 'react'
import { createStore } from 'redux' // store Create by redux

const reduceControll = (state = 0, action) => { // init, action
    switch (action.type) { // set Type
        case "PLUS":
            return state + 1 // state controll
        case "MINUS":
            return state - 1
        default: // init
            return state
    }
}

const store = createStore(reduceControll) // create! sotore

// console.log(store);
store.subscribe(() => { // move search! store
    console.log(store.getState()) // view on browser
})

store.dispatch({ type: "PLUS" }) // send to store & function reduce!
store.dispatch({ type: "PLUS" })
store.dispatch({ type: "PLUS" })
store.dispatch({ type: "MINUS" })
store.dispatch({ type: "MINUS" })
store.dispatch({ type: "MINUS" })

export default function DevStore() {
    return (
        <div>
            dev
        </div>
    )
}
