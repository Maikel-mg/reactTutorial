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
    setInterval(this.getDataFromJSON, 2000);
  },
  render : function () {
    return (
      <div className="commentBox">
        <h1> Comentarios </h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    )
  },
});


module.exports = CommentBox;
