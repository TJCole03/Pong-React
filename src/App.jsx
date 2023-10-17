import { useState } from 'react'
import Play from './pages/Play'
import Ball from './components/Ball/Ball'
import Paddle from './components/Paddles/Paddle'
import PlayingField from './components/PlayingField/PlayingField'
function App() {
    return (
    <>
        <Play />
        <Ball />
        <Paddle /> 
        <PlayingField /> 
    </>
    )
}

export default App;