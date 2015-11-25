var React = require('react');
var CommentBox = require('./components/CommentBox.jsx');
var data = require('./utils/data.json');

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
