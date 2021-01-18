import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost:null
    }

    componentDidMount(){
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.params.id))
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id).then(response => {
                this.setState({
                    loadedPost:response.data
                })
            })
        }
         
    }

    componentDidUpdate(){
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.params.id))
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id).then(response => {
                this.setState({
                    loadedPost:response.data
                })
            })
        }
         
    }
    render () {

        let post = <p>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p>Loading...</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.content}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return <section>{post}</section>;
    }
}

export default FullPost;