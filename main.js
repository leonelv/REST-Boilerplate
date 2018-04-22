const express = require('express');
const app = express();
const GET = require('./routes/get.routes');
const POST = require('./routes/post.routes')
const PORT = process.env.PORT || 8008
app.listen(PORT, () => {
  `Listening @ ${PORT}`
})
app.use(GET)
app.use(POST)

process.on('unhandledRejection',(a,b)=>{
  console.log(`${b}\n${a}`);
})