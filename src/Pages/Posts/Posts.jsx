import React, { useEffect, useState } from 'react'
import "./Posts.css"
import config from "../../config.json"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Posts() {
    const [posts,setPosts] = useState([]);
    const navigate =useNavigate();
    useEffect(() => {
      const fetchPosts = async () =>{
        const {data } = await axios.get(config.apiUrl);
        setPosts(data);
      };
      fetchPosts();
    },[]);

    const handleDelete = async (post) => {
      setPosts(posts.filter((p) => p._id !== post.id));
      await axios.delete(`${config.apiUrl}/${post.id}`);
    };
  return (
    <div className='posts'>
    <div className='container'>
        <button 
        onClick={()=> navigate("/post/new")}
        className='btn btn-primary mb-4'>New Posts</button>
        <table className="table">
            <thead>
                <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Update</th>
            <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {posts.map((post) =>(
                <tr key ={post.id}>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td ><button onClick={()=> navigate(`/post/${post.id}`)}
                    className='btn btn-sm ms-1 btn-primary '>Update </button></td>
                    <td><button   onClick={() => handleDelete(post)}
                    className='btn btn-sm ms-1 btn-danger '>Delete </button></td>
                </tr>
            )
            )}
            </tbody>
        </table>
    </div>
    </div>
    )
}

export default Posts