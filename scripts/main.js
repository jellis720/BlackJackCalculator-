/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  console.log("hand",hand);
  let total = 0;
  console.log("total",total);

  for (let i = 0; i < hand.length; i++) {
    if ((hand[i] === "J") || (hand[i] === "Q") || (hand[i] === "K")) {
      total += 10;
      console.log("hand[i]",hand[i]);
      console.log("total",total);
    } else if(hand[i] !== "A"){
      total += +hand[i];
      console.log("hand[i]",hand[i]);
      console.log("total",total);
    }
  }

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "A") {
      if(total <= 10) {
        total += 11;
        console.log("hand[i]",hand[i]);
        console.log("total",total);
      } else {
        total += 1;
        console.log("hand[i]",hand[i]);
        console.log("total",total);
      }
      console.log("total",total);
    }
  }
  return total
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
