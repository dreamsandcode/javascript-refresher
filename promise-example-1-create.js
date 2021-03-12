const getPerson = new Promise((resolve, reject) => {
  const randomNumber = Math.random();

  setTimeout(() => {
    if (randomNumber < 0.6) {
      resolve({
        firstName: "Brian",
        lastName: "Palmer",
      });
    } else {
      reject(new Error("Something went wrong"));
    }
  }, 2000);
});

getPerson
  .then((x) => {
    console.log(x);
  })
  .catch((error) => {
    console.log(error);
  });
