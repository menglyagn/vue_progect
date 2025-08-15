import fetch from "node-fetch";

export const handler = async (event) => {
  const url = decodeURIComponent(event.queryStringParameters.url);
  
  if (!url) {
    return { statusCode: 400, body: "Missing URL parameter" };
  }

  try {
    const response = await fetch(url);
    const data = await response.text();
    
    return {
      statusCode: 200,
      body: data,
      headers: {
        "Content-Type": response.headers.get("content-type"),
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    return { statusCode: 500, body: "Proxy error: " + error.message };
  }
};