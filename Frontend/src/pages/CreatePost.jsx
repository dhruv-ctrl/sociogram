import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate();
    const handlePost = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const res =await axios.post("http://localhost:3000/create-post",formData);
            console.log(res);
            navigate("/feed");
        }catch(err){
            console.log(err);
            alert("Error creating post");
        }
    }
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={handlePost}>
            <input type = "file" name='image' accept='image/*'/>
            <input type='text' name='caption' placeholder='Enter Caption' required />
            <button type='submit'>Post</button>
        </form>
    </section>
  )
}

export default CreatePost