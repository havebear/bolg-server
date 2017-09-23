// 0    请求成功
// 4100 token不合法或过期
// 4200 请求失败
// 4500 请求错误

let data_0 = {
    code : 0,
    msg  : '请求成功',
    data : {}
}

let data_4100 = {
    code : 4100,
    msg  : '用户信息不合法或过期'
}

let data_4200 = {
    code : 4200,
    msg  : '请求失败',
}

let data_4500 = {
    code : 4500,
    msg  : '请求参数有误'
}

module.exports = {
    data_0 :    data_0,
    data_4100 : data_4100,
    data_4200 : data_4200,
    data_4500 : data_4500
}