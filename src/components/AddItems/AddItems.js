import React, { useEffect, useState } from 'react';

const AddItems = () => {

    const [users, setUsers] = useState([]);
    console.log(users)

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  }, [])

    const handleAddProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.number.value;
        console.log(name, email, price)
        const productInfo = { name, email, price }


           // Post data to server

    fetch('http://localhost:5000/productInfo', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(productInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        const newUsers = [...users, data];
        setUsers(newUsers)
    })

    }


     

    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="name" placeholder='Products Name' /><br />
                <input type="email" name="email" placeholder='Email' /><br />
                <input type="number" name="number" id="" /><br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
    }

export default AddItems;