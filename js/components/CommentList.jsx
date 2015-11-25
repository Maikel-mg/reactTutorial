var React = require('react');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({

  render: function() {
    var commentNodes;
    if(this.props.data && this.props.data.length > 0 ){
      commentNodes = this.props.data.map(
        function (comment) {
          return (
            <Comment author={comment.author} key={comment.id}>
              {comment.text}
            </Comment>
          );
        }
      );
    }


    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }

});

module.exports = CommentList;
