//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  addjia(){
    wx.cloud.callFunction({
      name:"add",
      data:{
        a:3,
        b:5
      },
      success(res){
        console.log("请求成功",res)
      },fail(err){
        console.log("请求失败",err)
      }
    })
  },

  open(){
    wx.cloud.callFunction({
      name:"openid",
      success(res){
        console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })
  },

  API(){
    wx.cloud.database().collection("user").get({
      success(res){
        console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })
  },
  yun(){
    wx.cloud.callFunction({
      name: "getdatabase",
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})
