import React, { Component } from "react";
import { connect } from "react-redux";

export class PostsListItem extends Component {
    render() {
      const { title="", name=""} = this.props;
      return <li>{title}, by {name}</li>  
    }
}
function mapStateToProps(state, ownProps) {
    const post = state.posts.find(post => post.id === ownProps.postId);
    return {
      title: post.title,
      name : state.authors.find(author => author.authorId === post.authorId).name  
    }
};

export default connect(mapStateToProps)(PostsListItem); 


