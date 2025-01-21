const functions = require('firebase-functions')


exports.checkTest = functions.https.onRequest((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const param = req.query.id
  let message = ''


  const response = {
    status: 200,
    message,
  }

  res.send(response)
})
