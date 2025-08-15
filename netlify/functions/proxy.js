// netlify/functions/proxy.js
export const handler = async (event) => {
  const targetUrl = 'http://accct.top/891';
  
  try {
    const { default: fetch } = await import('node-fetch');
    const response = await fetch(targetUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    
    return {
      statusCode: 200,
      body: await response.text(),
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `代理请求失败: ${error.message}`
    };
  }
};