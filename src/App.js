import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';
import { useState } from "react";
import MyInput from "./components/UI/input/MyInput";


function App() {
 
  const [posts, setPosts] = useState([
    {id: 1, title: 'aaa', body: 'zzz'},
    {id: 2, title: 'bbb', body: 'xxx'},
    {id: 3, title: 'rrr', body: 'www'},
  ]) 

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <div>
        <hr style={{margin: '15px 0'}}></hr>
        <div>
          <MyInput
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)} 
            placeholder="Поиск..."
          />
          <MySelect
            value={selectedSort}
            onChange={sortPost}
            options={[
              {value: 'title', name: 'по названию'},
              {value: 'body', name: 'по описанию'}
            ]}
            defaultValue="Сортировка"
          />
        </div>
      </div>
      {posts.length
      ? <PostList remove={removePost} posts={posts} title={'Посты про JS'} />
      : <h1 style={{textAlign: 'center'}}>
          Посты не найдены
        </h1>}
      
    </div>
  );
}

export default App;
