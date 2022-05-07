import React, { useEffect, useState } from 'react';
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

   
    return (
        <div >
            
          <div className='inventory'>
          {
                   
                   
                   bookInfo.map(book=> <p key = {book._id}>
                   <img src={book.img} alt="" /> <br />
                   <b>Name:</b>  {book.name} <br />
                   <b>Author:</b> {book.author} <br />
                   <b>Price:</b> Tk. {book.price} <br />
                   <b>In Stock:</b> {book.stock} <br />
                   <b>Description</b>: {book.description} <br /> <br />
                   
                   <span >
                   <button className='manage-button' onClick={()=>dataDelete(book._id)}>Delete <i class="fa-solid fa-trash-can"></i></button>
                   <button className='manage-button2' onClick={()=>dataDelete(book._id)}>Delivered <i class="fa-regular fa-truck-ramp-box"></i></button>
                   </span>
                   
                   </p>
                   
                   )
                   
                  
                 
                   
               }
          </div>
                

                <ToastContainer/>
                
        </div>
    );
};

export default ManageItems;