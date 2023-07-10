//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const cmdLine = process.argv.slice(2);

if (cmdLine.length === 0) {
  process.exit(); //terminates the program
}

for (let secs of cmdLine) {
  const timer = Number(secs) * 1000; //convert seconds to milliseconds

  if (timer > 0 && typeof timer === "number") {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  } 
}
