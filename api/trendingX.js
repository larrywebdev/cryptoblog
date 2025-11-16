import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://twitter-trends-api.p.rapidapi.com/trends",
      {
        params: { woeid: "23424908" },
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "twitter-trends-api.p.rapidapi.com",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching X trends" });
  }
}
