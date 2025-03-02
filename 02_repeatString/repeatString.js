const repeatString = function(string, num) {
  
  let repeatedString = string;

  if(num == 0){
    return "";
  }else if(num < 0){
    return "ERROR";
  }else {
    for(let i=1; i < num; i++){
      repeatedString = repeatedString + string;
    }
  }  

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
