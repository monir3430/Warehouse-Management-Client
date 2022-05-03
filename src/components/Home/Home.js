import React from 'react';
import book from "../../images/book.jpg"
import './Home.css'

const Home = () => {

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
        </div>
    );
};

export default Home;