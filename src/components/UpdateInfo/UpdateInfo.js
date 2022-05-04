import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./UpdateInfo.css"

const UpdateInfo = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/bookInfo/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [])




    
    const updateInfo = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const author = event.target.author.value;
        const publisher = event.target.publisher.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const stock = event.target.stock.value;
        console.log(name, email, price, author, publisher, img, description, stock)
        const updatedBookInfo = { name, email, price, author, publisher, img, description, stock}


           // Update data to server

    fetch('http://localhost:5000/bookInfo', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(updatedBookInfo)
    })
    .then(res=>res.json())
    .then(data=>{ console.log(data)
        event.target.reset();
        
    })

    }
    return (
        <div>
            <div className='updateInfo'>
                <h1>Book Name: <small className='update'>{book.name}</small></h1>
            </div>
            <div className='updateBookInfo'>
            <form onSubmit={updateInfo}>
                <input type="text" name="name" placeholder='Book Name' /><br />
                <input type="text" name="author" placeholder='Author' /><br />
                <input type="text" name="publisher" placeholder='Publisher' /><br />
                <input type="number" name="price" placeholder='price' /><br />
                <input type="email" name="email" placeholder='Admin Email' /><br />
                <input type="url" name="img" placeholder='imageUrl' /><br />
                <input type="number" name="stock" placeholder='Stock' /><br />
                <textarea name="description" cols="21" rows="6" placeholder='Description'></textarea><br /><br />
                <input className='updateButton' type="submit" value="Update Information" />
                
            </form>
            </div>
        </div>
    );
};

export default UpdateInfo;