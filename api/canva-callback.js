export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('No code provided');
  }

  // ✅ For now, just show the code — confirm the redirect flow works
  res.send(`OAuth code received: ${code}`);
}
