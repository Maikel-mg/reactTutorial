var React = require('react');
var PropTypes = React.PropTypes;

var CommentForm = React.createClass({
  getInitialState : function () {
    return {
      author : '',
      text: ''
    }
  },
  handleAuthorChange : function (event) {
    this.setState({author : event.target.value});
  },
  handleCommentChange : function (event) {
    this.setState({text : event.target.value});
  },
  handleSubmit : function (event) {
    event.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author : author, text : text});
    this.setState({author : '', text : ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Tu nombre" value={this.state.author} onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Dí algo"  value={this.state.text}  onChange={this.handleCommentChange} />
        <input type="submit" value ="Post"/>
      </form>
    );
  }
});

module.exports = CommentForm;
