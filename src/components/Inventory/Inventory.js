import React, { useEffect, useState } from 'react';
import "./Inventory.css"

const Inventory = () => {
    const [bookInfo, setBookInfo] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bookInfo')
        .then(res=>res.json())
        .then(data => setBookInfo(data))
    }, [])
    return (
        <div className='inventory'>
            
           {
                    bookInfo.map(book=> <p key = {book._id}>
                    <img src={book.img} alt="" /> <br />
                     <b>Name:</b>  {book.name} <br />
                
                    <b>Author:</b> {book.author} <br />
                    <b>Price:</b> Tk. {book.price} <br />
                    <b>In Stock:</b> {book.stock} <br />
                    
                    <b>Description</b>: {book.description}
                    
                    </p>
                    )
                }
        </div>
    );
};

export default Inventory;