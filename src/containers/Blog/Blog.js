import React, { Component } from "react";
import {Route,Link,Switch,Redirect} from 'react-router-dom';


// import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import Posts from './Posts/Posts'
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
 

  componentDidMount() {
    axios.get("").then((response) => {
      const posts = response.data;
      const updatedPosts = posts.slice(0, 4);
      this.setState({ posts: updatedPosts });
    });
  }
  render() {
 
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li><Link to='/posts'>Home</Link></li>
              <li><Link to='/new-post'>New Post</Link></li>
            </ul>
          </nav>
        </header>
       <Switch>
        <Route path='/new-post'   component={NewPost} />
        <Route path='/posts' component={Posts} />
        <Redirect from='/' to='/posts'/>
     </Switch>
        

        {/* <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
