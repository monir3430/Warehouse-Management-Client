import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "./ManageItems.css"

const ManageItems = () => {
    const [bookInfo, setBookInfo] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bookInfo')
        .then(res=>res.json())
        .then(data => setBookInfo(data))
    }, [])

    //Delete Information------------
    const dataDelete = (id)=>{
        const deleteProceed = window.confirm('Are you sure to delete? ')
        if(deleteProceed){
            console.log("deleting id", id)
            const url = `http://localhost:5000/bookInfo/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remainingData = bookInfo.filter(book=> book._id !==id);
                    setBookInfo(remainingData);
                    
                }

            })

        }
        
    }

    const updateQty = (id) => {
        const result = bookInfo.map(b=> {
            if(b._id === id) {
                b.stock = b.stock - 1
            }
            return b;
        });

        setBookInfo(result);
    }

   
    return (
        <div>
            <h1>This is managing section .Handle carefully, a wrong click can lost data permanently</h1>
            <div className='full-area'>
            
            
            <div className='inventory'>
            {
                     
                     
                     bookInfo.map(book=> <p key = {book._id}>
                     <img src={book.img} alt="" /> <br />
                     <b>Name:</b>  {book.name} <br />
                     <b>Author:</b> {book.author} <br />
                     <b>Price:</b> Tk. {book.price} <br />
                     <b>In Stock:</b> {book.stock} <br /> <br />
                     
                     
                     <span >
                     <button className='manage-button' onClick={()=>dataDelete(book._id)}>Delete <i className="fa-solid fa-trash-can"></i></button>
                     <button className='manage-button2' onClick={() => updateQty(book._id)}>Delivered <i className="fa-regular fa-truck-ramp-box"></i></button>
                     </span> <br /><br />
                     <Link to={`/update/${book._id}`}><button className='button'>Update Book Info</button></Link>
                     
                     </p>
                     
                     )
                     
                    
                   
                     
                 }
            </div>
            <div> <br />
            <Link to={'/additems'}><button className='Manage-button'>Add New Book</button></Link>
              </div> <br />
                  
  
                  <ToastContainer/>
                  
          </div>
        </div>
    );
};

export default ManageItems;