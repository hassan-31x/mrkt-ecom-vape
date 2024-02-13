export const sendReferFriendEmail = async (
  referralEmail,
  referredEmail,
  firstName,
  lastName,
  url
) => {
  const res = await fetch("http://localhost:3000/api/refer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      referralEmail,
      referredEmail,
      firstName,
      lastName,
      url: `${url}login`,
    }),
  });
  console.log(res);
};
