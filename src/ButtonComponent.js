import React, { Component } from 'react'

export default class ButtonComponent extends Component {
    render() {
        return (
            <div>
                <input placeholder='Enter your name' />
                <button style={{height:20, width:200, backgroundColor:'red', color:"white"}} onClick={() => alert()}>Click Me</button>
            </div>
        )
    }
}
