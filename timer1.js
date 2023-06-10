
//Setting a timer takes alarmTime-parameter-time in seconds//
function alarmTimer(alarmTime) {
  const interval = setInterval(function() { //it executes a callback function/ sec that writes "." to outputstandard//
   process.stdout.write('.')
  }, 1000); //seconds to millisec//
  
  setTimeout(function() {
    clearInterval(interval);
    console.log(`\nAlarm! ${alarmTime} second(s) have passed.`); 
  }, alarmTime * 1000)
}

function output() {
  if(process.argv.length <= 2) { //no numbers provided//
    console.log("No alarms specified.");
    return;
  }
  
// checking if  time is not valid(non numeric or negative number) returns error message//

  const alarms = process.argv.slice(2);
  for(const alarmTime of alarms) {
  const parsedTime = parseInt(alarmTime);
  if(!isNaN(parsedTime) && parsedTime >= 0) {
    alarmTimer(parsedTime);
  } else {
    console.log(`Invalid argument: ${alarmTime}`);
  }
  }
}
output();
process.stdout.write('\x07');

