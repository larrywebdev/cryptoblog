import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://google-trends-real-time-insights-api.p.rapidapi.com/general/",
      {
        params: {
          geo: "NG",
          order: "1",
        },
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host":
            "google-trends-real-time-insights-api.p.rapidapi.com",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching Google trends" });
  }
}
