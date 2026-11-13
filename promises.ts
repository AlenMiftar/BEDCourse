const myPromise = new Promise((resolve, reject) => {
  console.log("1. This executor function starts immediately.");
  const success = true; // Change this to false to test rejection

  if (success) {
    console.log("2. Operation was successfully!");
    resolve("Resolved Operation successfully!"); // This will be ignored since the promise is already resolved
  } else {
    console.log("2. Operation was rejected!");
    reject("2. Operation rejected.");
  }
  console.log("executor function has finished");
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

const fetchAdviceById = (id: number) => {
  const data = fetch(`https://api.adviceslip.com/advice/${id}`).then(
    (response) => {
      console.log(response.ok);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
  );
};

fetchAdviceById(1);
