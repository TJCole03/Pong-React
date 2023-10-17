import { useState } from 'react'
import styles from './PlayingField.module.scss'
import { Box } from 'react-bootstrap'

export default function PlayingField() {
    
    return (
        <>
        <h1>Paddles like a what??</h1>
        {/* actual boundary lines for ball */}
        <div className={styles.container}>
               <Box />
        </div>
        </>
    )
}