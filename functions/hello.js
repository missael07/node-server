exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: '¡Hola desde tu función en Netlify!' }),
    };
  };