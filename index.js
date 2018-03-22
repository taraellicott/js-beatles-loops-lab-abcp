function theBeatlesPlay(musicians, instruments) {
  var newPlay = [];
  for (var i = 0; i < musicians.length; i++) {
   newPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newPlay;
}


function johnLennonFacts(facts) {
var i = 0;
  while (facts.length > 0) {
    facts = facts[i] + "!!!";
    i++;
  }
return facts;
}



function iLoveTheBeatles(number) {
  var newLove = [];
  do {
  newLove.push("I love the Beatles!" * number);
  } while (number < 15) 
   return newLove; 

}