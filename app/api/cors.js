export default function handler(req, res) {
  // Handle CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // Handle the API logic
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'GET request success' });
  } else if (req.method === 'OPTIONS') {
    // Handle preflight request
    res.status(200).end();
  } else {
    // Handle other methods
    res.status(405).end();
  }
}