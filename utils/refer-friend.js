const sendReferFriendEmail = async (email, name) => {
    const res = await fetch("http://localhost:3000/api/refer", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email,
        firstName: name,
        lastName: "Ali",
        url: 'https://www.google.com/'
        }),
    });
    console.log(res); 
}