exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const { username, password } = JSON.parse(event.body || '{}');

  const validUser = process.env.ADMIN_USER;
  const validPass = process.env.ADMIN_PASS;

  if (!validUser || !validPass) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Auth not configured' }) };
  }

  if (username === validUser && password === validPass) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ error: 'Invalid credentials' })
  };
};