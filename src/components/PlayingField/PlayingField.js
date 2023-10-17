import { useState } from 'react'
import styles from './PlayingField.module.scss'

export default function PlayingField() {
    
    return (
        <>
        <h1>Paddles like a what??</h1>
        {/* actual boundary lines for ball */}
        <container className={styles.boundary}>
               
        </container>
        </>
    )
}