var React = require('react');
var ListContainer = require('./list-container');

var Board = function(props) {
  return (
      <div className="board">
          <h1>{props.title}</h1>
          <ListContainer title="List 1" />
          <ListContainer title="List 2" />
          <ListContainer title="List 3" />
      </div>
  );
};

module.exports = Board;
