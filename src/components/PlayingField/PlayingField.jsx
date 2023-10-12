import { useState } from 'react'
import styles from './PlayingField.module.scss'
import { Ball } from './Ball.jsx'
import { Paddle } from './Paddle.jsx'

export default function PlayingField() {
    
    return (
        <div className={styles.container}>
            <h1>Paddles like what?</h1>
            <Ball />
            <Paddle />
        </div>
    )
}