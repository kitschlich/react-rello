var React = require('react');
var Card = require('./card');

var List = function(props) {
  var cards = props.cards.map(function(card,index) {
    return (
      <Card text={card} key={index} />
    );
  });
  return (
    <div className="list">
        <h2>{props.title}</h2>
        {cards}
        <form onSubmit={props.onAddSubmit}>
          <input type="text" onChange={props.onAddInputChanged}/>
          <button type="submit">Add Card</button>
        </form>
    </div>
    );
};

module.exports = List;
