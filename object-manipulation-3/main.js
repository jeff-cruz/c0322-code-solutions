console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'Donatello',
    hand: null
  },
  {
    name: 'Leonardo',
    hand: null
  },
  {
    name: 'Raphael',
    hand: null
  },
  {
    name: 'MichaelAngelo',
    hand: null
  }];

var cards = [
  {
    rank: 'Ace',
    suit: 'clubs',
    worth: 11
  },
  {
    rank: 'Ace',
    suit: 'diamonds',
    worth: 11
  },
  {
    rank: 'Ace',
    suit: 'hearts',
    worth: 11
  },
  {
    rank: 'Ace',
    suit: 'spades',
    worth: 11
  },
  {
    rank: '2',
    suit: 'clubs',
    worth: 2
  },
  {
    rank: '2',
    suit: 'diamonds',
    worth: 2
  },
  {
    rank: '2',
    suit: 'hearts',
    worth: 2
  },
  {
    rank: '2',
    suit: 'spades',
    worth: 2
  },
  {
    rank: '3',
    suit: 'clubs',
    worth: 3
  },
  {
    rank: '3',
    suit: 'diamonds',
    worth: 3
  },
  {
    rank: '3',
    suit: 'hearts',
    worth: 3
  },
  {
    rank: '3',
    suit: 'spades',
    worth: 3
  },
  {
    rank: '4',
    suit: 'clubs',
    worth: 4
  },
  {
    rank: '4',
    suit: 'diamonds',
    worth: 4
  },
  {
    rank: '4',
    suit: 'hearts',
    worth: 4
  },
  {
    rank: '4',
    suit: 'spades',
    worth: 4
  },
  {
    rank: '5',
    suit: 'clubs',
    worth: 5
  },
  {
    rank: '5',
    suit: 'diamonds',
    worth: 5
  },
  {
    rank: '5',
    suit: 'hearts',
    worth: 5
  },
  {
    rank: '5',
    suit: 'spades',
    worth: 5
  },
  {
    rank: '6',
    suit: 'clubs',
    worth: 6
  },
  {
    rank: '6',
    suit: 'diamonds',
    worth: 6
  },
  {
    rank: '6',
    suit: 'hearts',
    worth: 6
  },
  {
    rank: '6',
    suit: 'spades',
    worth: 6
  },
  {
    rank: '7',
    suit: 'clubs',
    worth: 7
  },
  {
    rank: '7',
    suit: 'diamonds',
    worth: 7
  },
  {
    rank: '7',
    suit: 'hearts',
    worth: 7
  },
  {
    rank: '7',
    suit: 'spades',
    worth: 7
  },
  {
    rank: '8',
    suit: 'clubs',
    worth: 8
  },
  {
    rank: '8',
    suit: 'diamonds',
    worth: 8
  },
  {
    rank: '8',
    suit: 'hearts',
    worth: 8
  },
  {
    rank: '8',
    suit: 'spades',
    worth: 8
  },
  {
    rank: '9',
    suit: 'clubs',
    worth: 9
  },
  {
    rank: '9',
    suit: 'diamonds',
    worth: 9
  },
  {
    rank: '9',
    suit: 'hearts',
    worth: 9
  },
  {
    rank: '9',
    suit: 'spades',
    worth: 9
  },
  {
    rank: '10',
    suit: 'clubs',
    worth: 10
  },
  {
    rank: '10',
    suit: 'diamonds',
    worth: 10
  },
  {
    rank: '10',
    suit: 'hearts',
    worth: 10
  },
  {
    rank: '10',
    suit: 'spades',
    worth: 10
  },
  {
    rank: 'Jack',
    suit: 'clubs',
    worth: 10
  },
  {
    rank: 'Jack',
    suit: 'diamonds',
    worth: 10
  },
  {
    rank: 'Jack',
    suit: 'hearts',
    worth: 10
  },
  {
    rank: 'Jack',
    suit: 'spades',
    worth: 10
  },
  {
    rank: 'Queen',
    suit: 'clubs',
    worth: 10
  },
  {
    rank: 'Queen',
    suit: 'diamonds',
    worth: 10
  },
  {
    rank: 'Queen',
    suit: 'hearts',
    worth: 10
  },
  {
    rank: 'Queen',
    suit: 'spades',
    worth: 10
  },
  {
    rank: 'King',
    suit: 'clubs',
    worth: 10
  },
  {
    rank: 'King',
    suit: 'diamonds',
    worth: 10
  },
  {
    rank: 'King',
    suit: 'hearts',
    worth: 10
  },
  {
    rank: 'King',
    suit: 'spades',
    worth: 10
  }
];

function shuffleThenDeal(cards) {
  var hand = [];
  var twoCards = 2;
  var shuffledDeck = _.shuffle(cards);

  for (var i = 0; i < twoCards; i++) {
    if (hand.length === 0) {
      hand.push(shuffledDeck[i]);
    } else if (hand.length === 1) {
      hand.push(shuffledDeck[i]);
    }
    // console.log(hand);
  }
  return hand;
}

function giveCards() {
  for (var i = 0; i < players.length; i++) {
    var cardsInHand = shuffleThenDeal(cards);
    players[i].hand = cardsInHand;
    console.log(players[i].hand);
  }
}

// Create a collection of four objects that represent players. Each player has a unique name and a hand to hold cards in.
// Create a collection of fifty - two objects that represent a standard 52 - card deck.Each card should have a rank(Ace, 2, 3, ...King) and a suit(clubs, diamonds, hearts, spades).
// Shuffle the deck.
// Deal two cards to each player.No two players should be able to receive the same card.
// Find the player with the highest score.Each card is worth a specific point value.Aces are worth 11 points, face ranks(Jack, Queen, King) are worth 10 points, and number ranks are worth their value(2, 3, ... 10).
// Log the winning player to the console.
