import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
import "./UpdateInfo.css"

const UpdateInfo = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `https://afternoon-lake-29194.herokuapp.com/bookInfo/${id}`;
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
        const updatedBookInfo = { name, email, price, author, publisher, img, description, stock }


        // Update data to server---------------------------------------------
        const url = `https://afternoon-lake-29194.herokuapp.com/bookInfo/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBookInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
                toast("Data Updated Successfully")

            })

    }


    //Update stock only------------------------------------
    const handleStock = (e) => {
        const stockInfo = e.target.stock.value;
        console.log(stockInfo);
        // const updatedStockInfo = { stockInfo }

    }
    return (
        <div className='home'>
            <div className='UpdateInfoALL'>
                <div className='updateInfo'>
                    <h1>Book Name: <small className='update'>{book.name}</small></h1>
                    <div>
                        <p>
                            <img src={book.img} alt="" /> <br />
                            <b>Name:</b>  {book.name} <br />
                            <b>Author:</b> {book.author} <br />
                            <b>Price:</b> Tk. {book.price} <br />
                            <b>In Stock:</b> {book.stock} <br />
                            <b>Description: </b> {book.description}

                        </p>
                        <form onSubmit={handleStock}>
                            <input type="number" name="stock" placeholder='Stock' /><br /> <br />
                            <input className='updateButton' type="submit" value="Stock Update" />
                        </form>
                    </div>
                </div>
                <div className='updateBookInfo'>
                    <h3>Enter info to update Existing data</h3>
                    <form onSubmit={updateInfo}>
                        <input type="text" name="name" placeholder='Book Name' required/><br />
                        <input type="text" name="author" placeholder='Author' required/><br />
                        <input type="text" name="publisher" placeholder='Publisher'required /><br />
                        <input type="number" name="price" placeholder='price' required /><br />
                        <input type="email" name="email" placeholder='Admin Email'required /><br />
                        <input type="url" name="img" placeholder='imageUrl'required /><br />
                        <input type="number" name="stock" placeholder='Stock'required /><br />
                        <textarea name="description" cols="21" rows="6" placeholder='Description' required></textarea><br /><br />
                        <input className='updateButton' type="submit" value="Update Information" />

                    </form>
                    <ToastContainer />
                </div>


            </div>
            <div>
                <h2 className='homebottom'>Are you want to see & manage all books? Please click the below button</h2>
                <Link to={'/manage'}><button className='Manage-button'>Manage Items</button></Link>
            </div>
        </div>
    );
};

export default UpdateInfo;