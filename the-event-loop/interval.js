let currentCount = 3;
const countdown = setInterval(() => {
  console.log(currentCount--);
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(countdown);
  }
}, 1000);
