var React = require('react');
var List = require('./list');

var ListContainer = React.createClass({
  getInitialState: function() {
    return {
      inputText: '',
      cards: []
    }
  },
  onAddInputChanged: function(text) {
    this.setState({
      inputText: text.target.value
    });
    console.log('Input changed!');
  },
  onAddSubmit: function(e) {
    console.log('Prevent default');
    e.preventDefault();
    this.setState({
      cards: this.state.cards.concat(this.state.inputText)
    });
  },
  render: function() {
    return (
      <List title={this.props.title}
            cards={this.state.cards}
            inputText={this.state.inputText}
            onAddInputChanged={this.onAddInputChanged}
            onAddSubmit={this.onAddSubmit} />
    );
  }
});

module.exports = ListContainer;
