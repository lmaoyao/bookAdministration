import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";
axios.interceptors.response.use((res)=>{//在这里统一拦截结果
    return res.data
})
//获取列表的数据
export const  getList=()=>{
    return axios.get("/list")
}
//获取图片详情
export const gethot =()=>{
    return axios.get("/hot")
};
//获取全部图书
export const getBook=()=>{
    return axios.get("/book")
}
export const removeBook = (id)=>{
    return axios.delete(`/book?id=${id}`)
}
//获取某一本书
export const findOneBook = (id)=>{
    return axios.get(`/book?id=${id}`)
};
//修改图书
/*
* id：编号
* data：数据 请求体发送
*
* */
export const updateBook = (id,data)=>{
    return axios.put(`/book?id=${id}`,data);
}
export const  addBook = (data)=>{
    return axios.post("/book",data)
}
