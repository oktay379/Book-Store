import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const DeleteBook = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        axios.delete("http://localhost:3001/book/delete/"+id)
        .then(res => {
            if(res.data.deleted) {
              navigate("/books");
            }
        })  
        .catch(err => console.log(err)) 
    }, [])
}

export default DeleteBook