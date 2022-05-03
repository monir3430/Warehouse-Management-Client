import React, { useEffect, useState } from 'react';
import "./Additems.css";

const AddItems = () => {

//     const [productInfo, setProductInfo] = useState([]);
//     console.log(productInfo)

//   useEffect(()=>{
//     fetch('http://localhost:5000/productInfo')
//     .then(res=>res.json())
//     .then(data=>setProductInfo(data))
//   }, [])

    const handleAddProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const author = event.target.author.value;
        const publisher = event.target.publisher.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        console.log(name, email, price, author, publisher, img, description)
        const bookInfo = { name, email, price, author, publisher, img, description}


           // Post data to server

    fetch('http://localhost:5000/bookInfo', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(bookInfo)
    })
    .then(res=>res.json())
    .then(data=>{ console.log(data)
        // const newProduct = [...productInfo, data];
        // setProductInfo(newProduct)
    })

    }

    return (
        <div className='addproduct'>
            <h3>Add Product Details</h3>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="name" placeholder='Book Name' /><br /><br />
                <input type="text" name="author" placeholder='Author' /><br /><br />
                <input type="text" name="publisher" placeholder='Publisher' /><br /><br />
                <input type="number" name="price" placeholder='price' /><br /><br />
                <input type="email" name="email" placeholder='Admin Email' /><br /><br />
                <input type="url" name="img" placeholder='imageUrl' /><br /><br />
                <textarea name="description" cols="30" rows="10" placeholder='Description'></textarea><br /><br />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    );
    }

export default AddItems;