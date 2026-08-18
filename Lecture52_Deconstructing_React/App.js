import React from './react'
import { render } from './react-dom'

const div = (
    <div className='container'>{'Hello'} <b className='hii'>hii</b></div>
)


const div2 = <div>Div 2</div>

const fruits = ['apple', 'mangos', 'pineapple']

function Card(props){
    console.log(props)
    return (
        <div className='container'>{'Hello'} <b className='hii'>hii</b></div>
    )
}

console.log(<Card />)

render([div, div2, 'css', <Card name={'anurag'}/>], document.getElementById('root'))
