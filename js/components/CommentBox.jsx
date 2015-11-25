var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var CommentBox = React.createClass({
  getDataFromJSON : function () {

    this.setState({
      data : this.props.data
    });

  },
  getInitialState : function () {
    return {
      data : [],
    }
  },
  componentDidMount: function() {
    //Simulamos una llamada AJAX
    setTimeout(this.getDataFromJSON, 2000);
  },
  handleCommentSubmit : function (comment) {
    comment.id = Date.now();

    var comments = this.state.data;
    var newComments = comments.concat([comment]);

    this.setState({data : newComments});

    console.log('handleCommentSubmit', comment);
  },
  render : function () {
    return (
      <div className="commentBox">
        <h1> Comentarios </h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  },
});


module.exports = CommentBox;
