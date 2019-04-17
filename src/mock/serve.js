let http = require("http");
let fs = require("fs");
let url = require("url");

function read(cb) {
    fs.readFile("./books.json","utf8",function (err,data) {
        if (err || data.length===0){
            cb([])//如果错误，或者文件长度为0的时候
        }else {
            cb(JSON.parse(data))//读出来的数据转成数组
        }
    })
}

function write(data,cb) {//写入内容
    fs.writeFile('./books.json',JSON.stringify(data),cb)
}
let list = require("./list.js");
http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/

    let {pathname,query} = url.parse(req.url,true);//true把query转化成对象
    if (pathname === "/list"){
        /*res.setHeader("Content-Type","application/json;charset=utf8");
        return res.end(JSON.stringify(list))*/
        read(function (books) {
            res.setHeader("Content-Type","application/json;charset=utf8");
            // let hot = books.reverse().slice(0,8);
            res.end(JSON.stringify(books))
        })
    }
    if (pathname==="/hot"){
        read(function (books) {
            res.setHeader("Content-Type","application/json;charset=utf8");
            let hot = books.reverse().slice(0,8);
            res.end(JSON.stringify(hot))
        })
        return
    }
    if (pathname === "/book"){//对书的增删改查
        let id = parseInt(query.id);
        switch (req.method){//?id
            case "GET":
                if (!isNaN(id)){//查询一个
                    read(function (books) {
                        let book = books.find(item =>{
                            return item.bookId === id;
                        });
                        if (!book)book={}//如果没有找到则是undefined
                        res.setHeader("Content-Type","application/json;charset=utf8");
                        res.end(JSON.stringify(book));
                    })
                } else {//获取所有的图书
                    read(function (books) {
                        res.setHeader("Content-Type","application/json;charset=utf8");
                        res.end(JSON.stringify(books))
                    })
                }
                break;
            case "POST":
                let adds = "";
                req.on("data",chunk =>{
                    adds += chunk;
                });
                req.on("end",()=>{
                    let book = JSON.parse(adds);
                    read(function (books) {//添加id
                        book.bookId = books.length?books[books.length-1].bookId+1:1;
                        books.push(book);//将数据放到books中，
                        write(books,function () {
                            res.end(JSON.stringify(book))
                        })
                    });
                })
                break;
            case "PUT":
                if (id){//获取了当前要修改的id
                    let str = "";
                    req.on("data",chunk => {
                        str += chunk;
                    })
                    req.on("end",()=>{
                        let book = JSON.parse(str)//book要改成什么样子
                        read(function (books) {
                            books = books.map(item=>{
                                if (item.bookId === id){//找到id相同的哪一本书
                                    return book //用新的覆盖老的
                                }
                                return item; //其他书正常返回即可
                            })
                            write(books,function () {//将数据写会JSON中
                                res.end(JSON.stringify(book));
                            })
                        })
                    })
                }
                break;
            case "DELETE":
                read(function (books) {
                    books = books.filter((item)=>{
                        return item.bookId !== id
                    });
                    write(books,function(){
                        res.end(JSON.stringify({ }));//删除返回空对象
                    })
                });
                break;
        }
        return
    }
}).listen(3000,()=>{
    console.log("3000");
})