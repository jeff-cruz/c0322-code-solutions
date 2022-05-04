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

var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var cards = [];

// create card
function createCard(rank, suit, worth) {
  var card = {
    rank: rank,
    suit: suit,
    worth: worth
  };
  return card;
}

// create deck of cards
for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < ranks.length; j++) {
    var rank = ranks[j];
    var suit = suits[i];
    var worth = ranks[j];
    if (_.isString(ranks[j])) {
      if (ranks[j].length >= 4) {
        worth = 10;
      } else {
        worth = 11;
      }
    }
    cards.push(createCard(rank, suit, worth));
  }
}

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
  // console.log('Donatello\'s card worth: ', players[0].worth);
  // console.log('Leonardo\'s card worth: ', players[1].worth);
  // console.log('Raphael\'s card worth: ', players[2].worth);
  // console.log('MichaelAngelo\'s card worth: ', players[3].worth);
  console.log(winner.name, 'is the winner!');
}

playGame(players);

// 1.Create a collection of four objects that represent players. Each player has a unique name and a hand to hold cards in
//    - create an array named players
// 2. Create a collection of fifty - two objects that represent a standard 52 - card deck.Each card should have a rank(Ace, 2, 3, ...King) and a suit(clubs, diamonds, hearts, spades).
//    - create a function named createCard, parameters of rank, suit, worth
//        - a rank property with a string or number value of the name of the card
//        - a suit property with a string value of the suit of card
//        - a worth property with a number value of how much the card is worth
//    - loop through array of suits
//    - nested loop through array of ranks
//    - assign value at index of ranks to new variable rank
//    - assign value at index of suits to new variable suit
//    - assign value at index of ranks to new variable worth
//    - if rank value is a string
//      - if length of ranks at j is less than or equal to 4
//      - assign 10 to worth variable
//      - else assign 11 to worth variable
// push the card (createCard function with rank suit and worth as arguments) into the cards array creating the deck of cards
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
