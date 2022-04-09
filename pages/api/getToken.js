export default async function getIcons(req, res) {
  // use the FLATICON_API_KEY to authenticate
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    // Authorization: `Bearer ${process.env.FLATICON_API_KEY}`,
  };

  // get the icons
  const response = await fetch(
    "https://api.flaticon.com/v3/app/authentication",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        apikey: process.env.FLATICON_API_KEY,
      }),
    }
  );

  if (response.ok) {
    // parse the response
    const data = await response.json();
    // send the response
    return res.status(200).json(data);
  } else {
    console.log(response);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
}
