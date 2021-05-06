import React from 'react'
import './App.css'
import Cards from './features/covid/Cards/Cards'
import DevStore from './features/devStore/DevStore'

function App() {
    return (
        <div className="App">

            <h2>
                <DevStore />
            </h2>
            <Cards />

        </div>
    )
}

export default App
