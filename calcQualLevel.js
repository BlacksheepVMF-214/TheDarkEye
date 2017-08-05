function calcQualLevel() {
  var intAttr01 = 15, intAttr02 = 15, intAttr03 = 11; 
  var intDie01 = 12, intDie02 = 9, intDie03 = 13;
  var intDiff01, intDiff02, intDiff03;
  var intExcess, intQL;
  
  intExcess = 0;
  
  intExcess += intAttr01 - intDie01;
  intExcess += intAttr02 - intDie02;
  intExcess += intAttr03 - intDie03;
  
  alert(intExcess;)
  
}

function rollD20() {
    var intDieRoll = Math.floor((Math.random() * 20) + 1);
    return (intDieRoll);
    if(intDieRoll == 20) {
      alert("Failure!!!")
    }
  }
