import React, { useEffect, useState } from 'react';
import "../AllItems/AllItems.css"

const AllItems = () => {
    const [bookInfo, setBookInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookInfo')
            .then(res => res.json())
            .then(data => setBookInfo(data))
    }, [])
    return (
        <div>
            <h1 className='allbooks'>Choice and take as more as you want</h1>
            <div className="allitems">
            {
                    bookInfo.map(book =>
                        <p key={book._id}>
                            <img src={book.img} alt="" /> <br />
                            <b>Name:</b> {book.name} <br />
                            <b>Author:</b> {book.author} <br />
                            <b>Price:</b> Tk. {book.price} <br />
                            <b>In Stock:</b> {book.stock} <br /> <br />
                            <b>Description:</b> {book.description} <br /> <br />
                        </p>)
                }
            </div>
        </div>
    );
};

export default AllItems;