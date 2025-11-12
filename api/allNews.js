import axios from "axios";

export default async function handler(req, res) {
  const query = req.query.query;
  try {
    const response = await axios.get(
      `https://cryptocurrency-news2.p.rapidapi.com/v1/${query}`,
      {
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
        },
      }
    );

    res.status(200).json(response.data);
  } catch {
    res.status(500).json({ error: "Error fetching news" });
  }
}
