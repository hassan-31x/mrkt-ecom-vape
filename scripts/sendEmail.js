async function sendEmailBrevo() {
  const res = await fetch("http://localhost:3000/api/refer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // senderEmail: "hello",
        email: "muhammadhassanchannel786@gmail.com",
        firstName: "Hassan",
        lastName: "Ali",
        url: 'https://www.google.com/'
    }),
  });
  console.log(res); 
}

sendEmailBrevo();
