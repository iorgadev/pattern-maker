export default async function getIcons(req, res) {
  // get the TOKEN from the request
  const token = req.headers.authorization;

  // get the search query string
  const query = req.query.q;

  // use the TOKEN to authenticate
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  // get the icons
  const response = await fetch(
    `https://api.flaticon.com/v3/search/icons/?q=${query}`,
    {
      method: "GET",
      headers: headers,
    }
  );

  if (response.ok) {
    // parse the response
    const data = await response.json();
    // send the response
    return res.status(200).json(data);
  } else {
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
}
