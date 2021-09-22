import React from 'react'
import '../CSS/Post.css'

function Post({post}) {
    return (
        <div className="post">
            <h1> {post.copyright} </h1>
            <img src={post.url} alt="space"/>
            <p> {post.explanation} </p>
        </div>
    )
}

export default Post
