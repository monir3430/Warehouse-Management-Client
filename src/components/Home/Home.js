import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from "../../images/banner.jpg"
import './Home.css'

const Home = () => {

    const [bookInfo, setBookInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookInfo')
            .then(res => res.json())
            .then(data => setBookInfo(data))
    }, [])

    const books = bookInfo.slice(0, 6)


    return (
        <div className='home'>
            <h1>A Book Warehouse which asset is trusteeism</h1>


            <div className='activities'>

                <div className='banner'>
                    <h1><img src={banner} alt="" /></h1>
                </div>
                <div className='extra-section'>
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
                    <div className='activity'>
                        <h2 >Our mission</h2>
                        <p><b>A leading position of Bangladesh in which we can stock every kind of books and deliver as customer desired</b></p>
                    </div>
                </div>
            </div>
            <h1>Some books which are top selling</h1>
            <div className='homeBookInfo'>

                {
                    books.map(book =>
                        <p key={book._id}>
                            <img src={book.img} alt="" /> <br />
                            <b>Name:</b>  {book.name} <br />
                            <b>Author:</b> {book.author} <br />
                            <b>Price:</b> Tk. {book.price} <br />
                            <b>In Stock:</b> {book.stock} <br /> <br />

                            <Link to={`/update/${book._id}`}><button className='button'>Details & Update Info</button></Link>


                        </p>)
                }
            </div>

                <div >
                    <h2 className='homebottom'>Are you want to see & manage all books? Please click the below button</h2>
                    <Link to={'/manage'}><button className='Manage-button'>Manage Items</button></Link>
                </div>

        </div>
    );
};

export default Home;