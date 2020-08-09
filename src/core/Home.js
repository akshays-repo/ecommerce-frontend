import React from 'react'
import {API} from '../Backend'
import Base from './Base'
import '../styles.css'


const Home = () => {
    console.log("API IS",API)
    return (
        
        <Base title="Happy shopping" description="online store"/>
        
    )
}

export default Home
