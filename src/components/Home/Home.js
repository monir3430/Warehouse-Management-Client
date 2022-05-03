import React, { useEffect, useState } from 'react';
import book from "../../images/book.jpg"
import './Home.css'

const Home = () => {

    const [bookInfo, setBookInfo] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bookInfo')
        .then(res=>res.json())
        .then(data => setBookInfo(data))
    }, [])

    const books = bookInfo.slice(0, 6)
    

    return (
        <div className='home'>
            <h1>A Book Warehouse which asset is trusteeism</h1>


            <div className='activities'>
                <div className='activity'> 
                    <h2>Our Activities</h2>
                    <ol>
                        <b>
                        <li>Stock internal sellable books</li>
                        <li>Replace by newer version books</li>
                        <li>Rent space for external seller</li>
                        <li>Daily Price update</li>
                        <li>Daily stock update </li>
                        </b>
                    </ol>
                </div>
                <div>
                    <h1><img src={book} alt="" /></h1>
                </div>
                <div className='activity'>
                    <h2 >Out mission</h2>
                    <p><b>A leading position of Bangladesh in which we can stock every kind of books and deliver as customer desired</b></p>
                </div>
            </div>
            <h2>{books.length}</h2>
            {
                books.map(book=>
                    <p key = {book._id}>
                    <img src={book.img} alt="" /> <br />
                     <b>Name:</b>  {book.name} <br />
                    <b>Author:</b> {book.author} <br />
                    <b>Price:</b> Tk. {book.price} <br />
                    <b>In Stock:</b> {book.stock} <br />
                    
                    
                    </p>)
            }
            
        </div>
    );
};

export default Home;