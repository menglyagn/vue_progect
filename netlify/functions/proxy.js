const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const { url } = event.queryStringParameters;

    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'URL 参数是必需的' })
      };
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Referer': 'https://myprojecttext.netlify.app/' // 替换为您的网站域名
      },
      redirect: 'follow'
    });

    const contentType = response.headers.get('content-type') || 'text/plain';
    const body = await response.text();

    return {
      statusCode: response.status,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};