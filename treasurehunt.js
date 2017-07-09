var count = 9;
// The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
// Unsure why we used *8 +1. It could be because of our floor usage, we won't ever hit 9.
// So adding 1 ensures our range can include 9? This is my best guess.
var treasureLocation = (Math.floor(Math.random()*8))+1
var bombLocation = (Math.floor(Math.random()*8))+1
while (bombLocation === treasureLocation){
  bombLocation = (Math.floor(Math.random()*8))+1
}
  function checkPosition(id) {
    if (treasureLocation === id){
      /*document.getElementById("counter").innerHTML = "Remaining Clicks: " + count*/
      document.getElementById(id).innerHTML = "$"
      document.getElementById("outcome").innerHTML = "YOU WIN!!!!!"
      count = 0;
      if (count === 0) {
        document.getElementById("count").innerHTML = "Remaining Clicks: " + count;
        return;
      }
  } else if (bombLocation === id){
      document.getElementById(id).innerHTML = "&#x2620"
      document.getElementById("outcome").innerHTML = "YOU LOSE :("
      count = 0;
      if (count === 0) {
        document.getElementById("count").innerHTML = "Remaining Clicks: " + count;
        return;
      }
      document.getElementById("count").innerHTML = "Remaining Clicks: " + count
  }  else {
      document.getElementById(id).innerHTML = "&#x1f332"
      count = count - 1;
    document.getElementById("count").innerHTML = "Remaining Clicks: " + count
  }
}
