function delayedMessage(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

delayedMessage("Hi, Yuliia!", 1000);