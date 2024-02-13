export const sendReferFriendEmail = async (
  referralEmail,
  referredEmail,
  firstName,
  lastName,
  url
) => {
  const res = await fetch("/api/refer", {
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
};
