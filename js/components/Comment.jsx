var React = require('react');
var PropTypes = React.PropTypes;
var marked = require('marked');

var Comment = React.createClass({

  rawMarkup : function () {
      var raw = marked(this.props.children.toString(), {sanitize : true});
      return { __html : raw};
  },
  render: function() {
    return (
      <div className="">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
      </div>
    );
  }

});

module.exports = Comment;
