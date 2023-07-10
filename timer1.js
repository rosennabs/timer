//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const cmdLine = process.argv.slice(2);

if (cmdLine.length === 0) {
  return;
}
else {
  for (let secs of cmdLine) {
    if (secs > 0 && typeof (secs) === "number") {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, secs);
    }
  }
};