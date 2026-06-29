import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'


function Card(props) {
    const { title, img, brand, price } = props
    return (
        <div className='card'>
            <img src={img} alt="samsung" />
            <div className='card-content'>
                <h3>{title}</h3>
                <p>{brand}</p>
                <p><b>${price}</b></p>
            </div>
        </div>
    )
}


function Card2() {
    return <h1>Hello</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root'));


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        root.render(
            <div className='container'>
                {data.products.map((product) => {
                    return <Card
                        key={product.id}
                        title={product.title} 
                        brand={product.brand} 
                        price={product.price}
                        img={product.thumbnail} />
                })}
            </div>
        )
    });


const h1 = <h1>Hello World</h1>
console.log(h1);

// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: Card,
//     ref: null,
//     props: {},
// })


// root.render(
//     React.createElement(Card, {
//         title: 'iphone 13',
//         image: '',
//         brand: 'Apple',
//         price: 899,
//         key: 12
//     })
// )



// root.render(<Card
//     title="iphone 13"
//     image=""
//     brand="Apple"
//     price="899"/>
// )