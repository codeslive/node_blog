
const querystring = require('querystring');

const handleBlogRoute = require('./src/routes/blog');


// 处理POST数据

const getPostData = () => {
  const promise = new Promise((resolve , reject) => {
    if(req.method !== 'POST'){
      resolve({});
      return;
    }

    if(res.headers['content-type'] !== 'application/json'){
      resolve({});
      return
    }

    let postData = '';
    req.on('data' , (chunk) =>{
        postData += chunk.toString();
    });

    req.on('end' , ()=>{
      if(!postData){
        resolve({});
        return;
      }

      resolve(
        JSON.stringify(postData)
      )
    })


  })

  return promise;
}

const serverHandler = (req , res) =>{
    res.setHeader('Content-Type' , 'application/json');

    const url = req.url;
    req.path = url.split('?')[0];

    //解析 query
    req.query = querystring.parse(url.split('?')[1]);

    getPostData(req).then((postData) =>{
      req.body = postData;
      const blogData = handleBlogRoute(req , res);
      if(blogData){
          res.end(
            JSON.stringify(blogData)
          );
          return;
      }

      res.writeHead(404 , {'Content-Type' : 'text/plain'});
      res.write('404 Not Found');
      res.end();
    })


}

module.exports = serverHandler;