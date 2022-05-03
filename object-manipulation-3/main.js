console.log('Lodash is loaded:', typeof _ !== 'undefined');
// players
var players = [
  {
    name: 'Donatello'
  },
  {
    name: 'Leonardo'
  },
  {
    name: 'Raphael'
  },
  {
    name: 'MichaelAngelo'
  }];

// deck of cards
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

// shuffle cards and deal cards
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
  }
  return hand;
}

// play game
function playGame(players) {
  // give players cards
  for (var player of players) {
    var hand = shuffleThenDeal(cards);
    player.hand = hand;

    // determine the worth of the cards for each player
    var worth = 0;
    for (var card of player.hand) {
      worth = worth + card.worth;
    }
    player.worth = worth;
  }

  // create array of players cards worth totals
  var playersWorth = [];
  for (var i = 0; i < players.length; i++) {
    playersWorth.push(players[i].worth);
  }

  // whoever has highest total wins
  var highestWorth = playersWorth[0];
  var highestWorthIndex = 0;
  for (var j = 1; j < playersWorth.length; j++) {
    if (playersWorth[j] > highestWorth) {
      highestWorth = playersWorth[j];
      highestWorthIndex = j;
    }
  }

  var winner = players[highestWorthIndex];
  console.log(winner.name, 'is the winner!');
}

playGame(players);

// 1.Create a collection of four objects that represent players. Each player has a unique name and a hand to hold cards in
//    - create an array named players, each index being an object with a name property and a name value
// 2. Create a collection of fifty - two objects that represent a standard 52 - card deck.Each card should have a rank(Ace, 2, 3, ...King) and a suit(clubs, diamonds, hearts, spades).
//    - create an array named cards, each index being an object with:
//        - a rank property with a string value of the name of the card
//        - a suit property with a string value of the suit of card
//        - a worth property with a number value of how much the card is worth
// 3. Shuffle the deck.
//    - create a new function definition named shuffleThenDeal with the parameter of cards
//    - create an empty array and assign it to a new variable named hand
//    - assign the value 2 to a new variable named twoCards representing the cards in each players hands
//    - use the shuffle lodash method on the cards array and assign it to a new variable named shuffledCards
//    - distribute a card by pushing an index of the shuffledCards array to the hand array
//    - if a player does not have a card in their hand, give them a card
//    - if a player has one card in their hand, give them another card
// 4. Deal two cards to each player.No two players should be able to receive the same card.
//    - create a new function definition named playGame with the parameter of players
//    - for each player, give them a set of cards by assigning a hand to their hand
//    - determine the worth of cards for each player
// 5. Find the player with the highest score.Each card is worth a specific point value.Aces are worth 11 points, face ranks(Jack, Queen, King) are worth 10 points, and number ranks are worth their value(2, 3, ... 10).
//    - create an empty array assigned to the new variable playersWorth
//    - for every players hand worth, push the value to the playersWorth array
//    - assign the highestWorth to the first player's worth
//    - assign the highestWorthIndex to 0
//    - loop through playersWorth array
//    - if playersWorth index value is higher than the first,
//    - assign highestWorth to the playersWorth index
//    - assign highestWorthIndex to the same index
//    - the player at the highestWorthIndex is assigned to the new variable winner
// 6. Log the winning player to the console.
//    - log the winner's name to the console
