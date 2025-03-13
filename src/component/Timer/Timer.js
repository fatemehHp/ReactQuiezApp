import React, { useContext, useEffect } from 'react'
import styles from './Timer.module.css'
import { StateContext } from '../../App'
const Timer = () => {
    const{dispatch,secondsReminding}=useContext(StateContext)
    useEffect(function(){
      const id=  setInterval(() => {
            dispatch({type:"secendReminding"})
        }, 1000);
        return ()=>{
            clearInterval(id)

        }
    },[dispatch])
    return <div className={styles.timer}>{secondsReminding}</div>
}

export default Timer
