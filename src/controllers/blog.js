// 博客相关方法
const getList = (author , keyword) =>{
    // 从数据库里拿数据

    return[
      {
        id:1,
        title:'标题1',
        content:'内容1',
        author:'zhansan',
        createdAt:1668838491172
      },

      {
        id:2,
        title:'标题2',
        content:'内容2',
        author:'lisi',
        createdAt:1668838491188
      },
    ]
}


// 获取博客详情数据
const getDetail = (id) => {
  return{
    id:1,
    title:'标题1',
    content:'内容1',
    author:'zhansan',
    createdAt:1668838491172
  }
}


module.exports = {
  getList,
  getDetail
}