import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://crypto-news16.p.rapidapi.com/news/top/10",
      {
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "crypto-news16.p.rapidapi.com",
        },
      }
    );

    res.status(200).json(response.data);
  } catch {
    res.status(500).json({ error: "Error fetching news" });
  }
}
