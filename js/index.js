var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./board');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="This is a board."/>, document.getElementById('app'));
});
