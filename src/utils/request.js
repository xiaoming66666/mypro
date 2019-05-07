// 每一个求请，需要一个url 地址
// 根据情况， 还可以有一个data 数据
function request (url,data ) {
  return new Promise (function (resolve, rejected) {
    mpvue.request({
      url: url,
      success: function (info) {
        resolve(info.data);
      }
    });
  });
}
//
export default request;
