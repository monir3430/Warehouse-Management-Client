import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init'
import React, { useEffect, useState } from 'react';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myBooks, setMyBooks] = useState([]);
    console.log(myBooks)
    useEffect(()=>{
        const getMyBooks = async ()=>{
            const email = user.email;
            const url = `http://localhost:5000/bookInfo?email=${email}`;
           const {data} = await axios.get(url)
           const userBooks = data.filter(book=>book.email === email);
           setMyBooks(userBooks);
        }
        getMyBooks();
        
       

    }, [])
    


    return (
        <div>
           <h1>User's total Books : {myBooks.length}</h1>
           <tr className='table'>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Publisher</th>
            </tr>
           {
               myBooks.map(myBook=> 
               
                <tr className='table'>
                  <th>{myBook.name}</th>
                  <th>{myBook.author}</th>
                  <th>{myBook.publisher}</th>
                </tr>
               
              )
           }
        </div>
    );
};

export default MyItems;