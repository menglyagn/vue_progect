exports.handler = async (event) => {
  // 动态导入 ESM 模块
  const fetch = (await import('node-fetch')).default;
  
  const targetUrl = decodeURIComponent(event.queryStringParameters.url);
  
  if (!targetUrl) {
    return { statusCode: 400, body: 'Missing URL parameter' };
  }

  try {
    const response = await fetch(targetUrl);
    const html = await response.text();
    
    return {
      statusCode: 200,
      body: html,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};