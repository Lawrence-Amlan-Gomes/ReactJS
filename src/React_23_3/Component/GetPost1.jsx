import React from "react"
import { useState, useEffect } from "react"




export default function GetPost1(){

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState('');
    const [ post, setPost ] = useState({});
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data)=>{
            setLoading(false);
            setError('');
            setPost(data);
        })
        .catch(()=>{
            setPost({});
            setLoading(false);
            setError('There was an error');
        })
    },[])
    
    return(
        <div className="app">  
            {loading ? "Loading..." : post.title}
            {error ? error : null}
        </div>
    )
}