import React, { Component, useState } from 'react'

class OldCounter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0,
            count2: 0,
        }
        console.log('constructor')
    }
    render() {
        console.log('render')
        const {name} = this.props
        const {count, count2} = this.state
        return (
        <>
        <h1 className='mt-4'>{name}</h1>
          <div className='flex gap-4 mt-6 items-center'>
            <button className='rounded bg-blue-400 px-4 py-1' onClick={() => this.setState({count:count - 1})}>-</button>
            <h2>{count}</h2>
            <button className='rounded bg-blue-400 px-4 py-1' onClick={() => this.setState({count:count + 1})}>+</button>
         </div>

          <div className='flex gap-4 mt-6 items-center'>
            <button className='rounded bg-blue-400 px-4 py-1' onClick={() => this.setState({count2:count2 - 1})}>-</button>
            <h2>{count2}</h2>
            <button className='rounded bg-blue-400 px-4 py-1' onClick={() => this.setState({count2:count2 + 1})}>+</button>
         </div>
        </>)
    }
}

export default OldCounter

