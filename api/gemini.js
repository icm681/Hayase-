export default async function handler(req, res) {
    const apiKey = process.env.GEMINI_API_KEY;
    const response = await fetch(`https://api.google.com/gemini?key=${apiKey}`);
    const data = await response.json();
    res.status(200).json(data);
}
