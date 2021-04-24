import React, {Component} from "react";

import store from "./store";

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : store.getState().posts,
            authors: store.getState().authors,            
        };
        
        store.subscribe(this.onStoreUpdated);
    }

    componentDidMount() {
        this.onStoreUpdated = this.onStoreUpdated.bind(this);
    }

    onStoreUpdated = () => {
        this.setState({ posts: store.getState().posts, authors : store.getState().authors});
        // TODO Update the list of posts and users in state to re-render
    }

    render() {
        const {posts, authors} = this.state;

        const renderedPosts = posts.map(post => {
            const author = authors.find(author => author.authorId === post.authorId) || {name : "Unknown"};
            const {name} = author;

            return <li key={post.id }>{post.title}, by {name}</li>;
        });

        return (
            <div>
                <h4>Posts</h4>
                <ul>
                    {renderedPosts}
                </ul>
            </div>
        );
    }
}
