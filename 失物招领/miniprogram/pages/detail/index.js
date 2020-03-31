// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    biaoqian:false,
    option:true,
    swiperlist:[
      { image_src:"../../image/11.jpg"},
      { image_src:"../../image/12.jpg"},
      { image_src:"../../image/13.jpg"},
      { image_src: "../../image/14.jpg" }

    ],
    information:[{
      title:"女士夹克",
      desc: "这是我今天上午第三节课，在旧操场得看台上拾到的一件夹克，兜里装有钥匙。", time:"2020.3.20",
      locate:"d210教室",
      name:"翟虾虾",
      id:"********",
      academy:"********"
    }],
    user_option:[
      {
        src:"../../image/21.jpeg",
        name:"龍龍",
        time:"2020.3.20",
        detail:"这个衣服我好像见过！"
      },
      {
        src: "../../image/22.jpeg",
        name: "虾虾胖",
        time: "2020.3.20",
        detail: "你是不是早上在d210上课了，我也好像看见了"
      },
      {
        src: "../../image/23.jpeg",
        name: "小熊熊",
        time: "2020.3.21",
        detail: "我已经把它交给你们班同学了"
      }
    ]
  },
  hidden(e){
    this.setData ({
      hidden:false
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