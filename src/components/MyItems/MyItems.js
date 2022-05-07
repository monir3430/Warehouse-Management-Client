import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init'
import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myBooks, setMyBooks] = useState([]);
    useEffect(()=>{
        const getMyBooks = async ()=>{
            const email = user.email;
            const url = `http://localhost:5000/bookInfo?email=${email}`;
           const {data} = await axios.get(url)
           setMyBooks(data);
        }
        getMyBooks();
       

    }, [])
    return (
        <div>
           <h1>My Books : {myBooks.length}</h1>
        </div>
    );
};

export default MyItems;