import ReactDOM from 'react-dom/client';
import './style.css'


function Card(key,title,img,brand,price){
    return(
        <div className='card' key={key}>
        <img src={img} alt="samsung" />
        <div className='card-content'>
            <h3>{title}</h3>
            <p>{brand}</p>
            <p><b>${price}</b></p>
        </div>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        const container2 = data.products.map((product) => {
            return Card(
                product.id, 
                product.title, 
                product.thumbnail, 
                product.brand, 
                product.price);
        });

        console.log(container2);

        root.render(<div className='container'>{container2}</div>);
    });