// pages/user_option/user_option.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '咨询', checked: true },
      { name: '建议', checked: false },
      { name: '其他', checked: false }
    ],

    focus: false,
    option: ''
  },
  change_value:function(e){
    this.setData({
      option:e.detail.value
    })
    console.log(e.detail.value)
  },
  send:function(){
    var that = this;
    wx.request({
      url: 'https://www.ifeels.cn/msbmuser_idea/',
      data:{
        openid:app.globalData.openid,
        content:that.data.option,
      },
      header:{
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method:"post",
      success:function(res){
        console.log(res.data)
        if(res.data.statusCode == 1){
          wx.showToast({
            title: '成功',
            icon:'success',
          })
        }
      },
      fail(res){
        wx.showToast({
          title: '请检查网络连接',
          icon: 'none',
          duration: 2000,
        })
      },
      complete(res){
        wx.switchTab({
          url: '../mine/mine',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})