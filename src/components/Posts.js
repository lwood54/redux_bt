import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

import cls from './Posts.module.css';

class Posts extends Component {
        componentDidMount() {
                this.props.fetchPosts();
        }

        render() {
                const postItems = this.props.posts.map(post => {
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

Posts.propTypes = {
        fetchPosts: PropTypes.func.isRequired,
        posts: PropTypes.array.isRequired
};

// the 'posts' in state.posts is used because that is what we used inside the rootReducer inside rootReducer.js
const mapStateToProps = state => ({
        posts: state.posts.items
});

export default connect(
        mapStateToProps,
        { fetchPosts }
)(Posts);
