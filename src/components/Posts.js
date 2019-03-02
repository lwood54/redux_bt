import React, { Component } from 'react';
import cls from './Posts.module.css';

class Posts extends Component {
        state = {
                posts: []
        };

        componentDidMount() {
                fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(res => res.json())
                        .then(data => this.setState({ posts: data }));
        }
        render() {
                const postItems = this.state.posts.map(post => {
                        return (
                                <div key={post.id} className={cls.FetchItem}>
                                        <h3>{post.title}</h3>
                                        <p>{post.body}</p>
                                </div>
                        );
                });
                return (
                        <div className={cls.ItemsContainer}>
                                <h1>Posts</h1>
                                {postItems}
                        </div>
                );
        }
}

export default Posts;
