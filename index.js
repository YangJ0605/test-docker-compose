const express = require('express')

const app = express()

app.get('/api/user', async (req, res) => {
  res.json({
    name: 'cc',
    age: 18
  })
})

app.listen(4000, () => {
  console.log('serve running at http://localhost:4000')
})
