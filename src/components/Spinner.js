import React from 'react'
import spinner from '../spinner.gif'

const Spinner=()=> {
        return (
            <div className="text-center justify-content-between " style={{zIndex:3}}>
                <img src={spinner} alt="spinner" style={{width:"60px"}}/>
            </div>
        )
    }

    export default Spinner;
