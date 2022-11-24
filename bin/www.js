//创建服务器
const http = require('http');

const serverHandler = require('../app');

//服务器端口
const PORT = 5000;

const server = http.createServer( serverHandler );


server.listen(PORT, () => {
  console.log('server running at port 5000...');
});



