//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    datalist: []
  },
  get() {
    let that = this;
    console.log(111),
    wx.cloud.callFunction({
      name:"getdata",
      success(res){
        console.log("连接成功",res)
        that.setData({
          datalist:res.result.data
        })
      },fail(err){
        console.log("连接失败",err)
      }
    })

  }
})
