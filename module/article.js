const db = require('../db/db');
let query = db.query;

// 发表文章
let insert = function( value ) {
    let _sql = `insert into b_article(
        article_cate, 
        article_title, 
        article_brief, 
        article_con,
        article_author, 
        article_top, 
        article_hot, 
        article_reprint, 
        article_made_url
     ) values(?,?,?,?,?,?,?,?,?);`
    return query( _sql, value );
}

// 根据index和number查询所有文章
let findAll = function ({index = 0, number = 10}={}) {
    let startNumber = index * number;
    let _sql = `
      SELECT * FROM b_article
        LIMIT ${index}, ${number}`;
    return query( _sql);
}

// 更新文章评论数
// let update = function( value ) {
//     let _sql = "update posts set  comments=? where id=?"
//     return query( _sql, value )
// }
// 

module.exports={
    insert: insert,
    findAll: findAll
}