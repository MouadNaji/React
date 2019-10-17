import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Post from "./Post";
import AddPostForm from "./AddpostForm";
import Button from "muicss/lib/react/button";
import {
  SwipeableList,
  SwipeableListItem
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

function Feed(props) {
  return (
    <div className="feed">
      <SwipeableList>
        <SwipeableListItem
          swipeLeft={{
            content: <div>React Component</div>,
            action: () => console.info("swipe action triggered")
          }}
          swipeRight={{
            content: <div>Eksempel på</div>,
            action: () => console.info("swipe action triggered")
          }}
        >
          <div className="eksempel">Mouad Naji</div>
        </SwipeableListItem>
      </SwipeableList>
      <AddPostForm />
      {props.posts.map(item => {
        return (
          <Post
            key={item._id}
            likes={item.likes}
            comments={item.comments}
            message={item.message}
            author={item.Author}
          />
        );
      })}
    </div>
  );
}

function App() {
  const name = "Mouad"; // pass to profile and footer
  // const posts = [<Post />, <Post />, <Post />]; // pass this to feed
  /*const [likes, setlikes] = useState([
    {
      message: "Im having a great day today",
      author: "Mouad"
    },
    {
      message: "Im also having a great day",
      author: "Mathias"
    }
  ]);*/

  const [posts, setposts] = useState([]);
  useEffect(() => {
    const baseURL = "https://movies-cb29.restdb.io/rest/";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d9108cc1ce70f637985514f",
      "cache-control": "no-cache"
    };
    fetch(baseURL + "posts?fetchchildren=true", {
      method: "get",
      headers: headers
    })
      .then(e => e.json())
      .then(e => setposts(e));
  }, []);

  function addPost() {
    /*const[author, setAuthor] = useState(""):
    const[message, setMessage] = useState(""):*/ //////////////////////////////////////////////////////

    setposts(
      posts.concat({
        message: "im having a decent day today",
        Author: "Peter",
        _id: "",
        likes: "",
        comments: ""
      })
    );
  }
  return (
    <div className="App">
      <Header name={name} />
      <Button onClick={addPost}>Add post</Button>

      <Feed posts={posts} />

      <Footer name={name} />
    </div>
  );
}

export default App;
