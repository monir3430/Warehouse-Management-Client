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
           <h1>My Books : {myBooks.length}</h1>
           {
               myBooks.map(myBook=> <table>
                <tr>
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Publisher</th>
                </tr>
                <tr>
                  <td>{myBook.name}</td>
                  <td>{myBook.author}</td>
                  <td>{myBook.publisher}</td>
                </tr>
               
              </table>)
           }
        </div>
    );
};

export default MyItems;