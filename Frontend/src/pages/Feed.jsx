import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://ik.imagekit.io/dhruv3011/image_gQY_AJms7.jpg?updatedAt=1774076149088",
            caption:"First Post"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ?(
                    posts.map((post)=>(
                        <div key={post._id} className='post-card'>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ):(
                    <h1>No posts available</h1>
                )
            }
            
        </section>  
    )
}

export default Feed