import React, { Component } from "react";
import { connect } from "react-redux";
import PostListItem from "./PostListItem";
// TODO Import `connect()`, write a `mapState()` function that extracts the
// TODO data this component needs, and default-export the connected component.


export class PostsList extends Component {
    render() {
        const {posts = [], authors = []} = this.props;

        // TODO Bonus: convert the list items into a separate `<PostListItem> component, and connect it.
        // TODO        Be sure to pass the post ID as a prop, and access it using `ownProps` in `mapState`.
        // TODO        Bonus task is not tested, so you can experiment
        const renderedPosts = posts.map(post => {
            
            const author = authors.find(author => author.authorId === post.authorId) || { name: "Unknown" };
            const {name} = author;

            return <PostListItem key={post.id} postId={post.id}></PostListItem>;
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

function mapStateToProps(state) {
    return {
      authors: state.authors,
      posts : state.posts  
    }
};

export default connect(mapStateToProps)(PostsList); 

