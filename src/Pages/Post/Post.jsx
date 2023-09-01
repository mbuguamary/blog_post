import config from "../../config.json"
import React from 'react'
import axios from 'axios'
import "./Post.css"
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';

const Post = () => {
    const {id} =useParams();
    const [post,setPost] = useState({
      title: "",
      content:"",
    });
    useEffect(() => {
        if (!id) return;
        const fetchPost = async () => {
          const { data } = await axios.get(`${config.apiUrl}/${id}`);
          setPost(data);
        };
        fetchPost();
      }, []);
      const handleChange = (e) => {
        const postClone = { ...post };
        postClone[e.target.name] = e.target.value;
        setPost(postClone);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (id === "new") {
          await axios.post(config.apiUrl, post);
          return navigate("/");
        } else {
          await axios.put(`${config.apiUrl}/${id}`, post);
          return navigate("/");
        }
      };
  
    return (
    <div className='post_wrapper'>
    <div className='container'>
       <form className="post">
        <input
        type='text'
        placeholder='title...'
        name="title"
        value={post.title}
        onChange={handleChange}
        />
        <input
        type='text'
        placeholder='title...'
        name="title"
        value={post.content}
        onChange={handleChange}
        />
          <button onClick={handleSubmit} className="btn btn-primary">
            {id === "new" ? "Post" : "Update"}
          </button>
       </form>
    </div>

    </div>
  )
}

export default Post