import React, { Component } from 'react'
import spinner from '../spinner.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center justify-content-between " style={{zIndex:3}}>
                <img src={spinner} alt="spinner" style={{width:"60px"}}/>
            </div>
        )
    }
}
