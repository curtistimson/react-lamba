export function handler(event, context, callback) {
  console.log(event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!" })
  });
}