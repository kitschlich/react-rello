var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/card');
var List = require('../js/list');
var ListContainer = require('../js/list-container');
var Board = require('../js/board');

describe('Card component', function() {
    it('Renders a card with given text',  function() {
        var testText = "test text";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card text={testText} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card');

        var text = result.props.children;
        text.should.equal('test text');
    });
});

describe('List component', function() {
    it('Renders a list with given cards and allows cards to be added',  function() {
        var cards = ['card 1', 'card 2'];

        var renderer = TestUtils.createRenderer();
        renderer.render(<List cards={cards} onAddSubmit="test" onAddInputChanged="test"/>);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('list');

        var h2 = result.props.children[0];
        h2.type.should.equal('h2');

        var cards = result.props.children[1];
        cards.should.be.an('array');
        cards.should.have.length(2);

        var card1 = cards[0];
        card1.type.should.equal(Card);
        card1.key.should.equal('0');
        card1.props.text.should.equal('card 1');

        var form = result.props.children[2];
        form.type.should.equal('form');
        form.props.onSubmit.should.equal('test');

        var input = form.props.children[0];
        input.type.should.equal('input');
        input.props.type.should.equal('text');
        input.props.onChange.should.equal('test');

        var button = form.props.children[1];
        button.type.should.equal('button');
        button.props.type.should.equal('submit');
        button.props.children.should.equal('Add Card');
    });
});

describe('ListContainer component', function() {
    it('A stateful List that provides specific functionality',  function() {
        var title = 'test ListContainer';

        var renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={title} />);
        var result = renderer.getRenderOutput();
        result.type.should.equal(List);
        result.props.title.should.equal('test ListContainer');
        result.props.cards.should.be.an('array');
        result.props.cards.should.have.length(0);
        result.props.inputText.should.be.a('string');
        result.props.inputText.should.equal('');
        result.props.onAddInputChanged.should.be.a('function');
        result.props.onAddSubmit.should.be.a('function');
    });
});

describe('Board component', function() {
    it('Renders a board with a title and three blank lists',  function() {
        var title = 'test board';

        var renderer = TestUtils.createRenderer();
        renderer.render(<Board title={title} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('board');
        result.type.should.equal('div');
        result.props.children.should.be.an('array');
        result.props.children.should.have.length(4);

        var h1 = result.props.children[0];
        h1.type.should.equal('h1');
        h1.props.children.should.equal('test board');

        var list1 = result.props.children[1];
        list1.type.should.equal(ListContainer);
        list1.props.title.should.equal('List 1');
    });
});
