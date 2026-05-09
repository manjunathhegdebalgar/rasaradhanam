// Netlify function to serve config including admin credentials from env vars
exports.handler = async function(event) {
  const config = {
    adminUser: process.env.ADMIN_USER || 'admin',
    adminPass: process.env.ADMIN_PASS || '',
  };
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(config)
  };
};