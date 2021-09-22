import React, {useState} from 'react';
import '../CSS/Post.css'
import { Button, Icon } from 'semantic-ui-react'

function Post({post}) {

    const [liked, setLiked] = useState(false)

    return (
        <div className="post">
            <h1> {post.title} </h1>
            <img src={post.url} alt="space"/>
            <h2> {post.date}</h2>
            <p> {post.explanation} </p>
            <Button icon onClick={()=>setLiked(!liked)}> 
                
                {liked ? <Icon name="heart"/>: <Icon name="heart outline" />}
                

            </Button>
        </div>
    )
}

export default Post
