var React = require('react');
var PropTypes = React.PropTypes;

var CommentForm = React.createClass({

  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Tu nombre" />
        <input type="text" placeholder="Dí algo" />
        <input type="submit" value ="Post"/>
      </form>
    );
  }
});

module.exports = CommentForm;
