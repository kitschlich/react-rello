var React = require('react');

var Card = function(props) {
    return (
        <div className="card">
          {props.text}
        </div>
    );
};

module.exports = Card;
