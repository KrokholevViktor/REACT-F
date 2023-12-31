import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = function ({create}) {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }
    

    return (
        <form>
            {/*управляемый компонент*/} 
            <MyInput
            value={post.title} 
            onChange={e => setPost({...post, title: e.target.value})}
            type="text" 
            placeholder="Название поста" 
            />
            <MyInput
            value={post.body} 
            onChange={e => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder="описание поста" 
            />
            <MyButton onClick={addNewPost}>CREATE POST</MyButton>
        </form>
    )
}

export default PostForm;