// pages/lostIndex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '丢失', value: 0 },
      { text: '找到', value: 1 }
    ],
    option2: [
      { text: '全部分类', value: 'a' },
      { text: '饭卡', value: 'b' },
      { text: '钥匙', value: 'c' },
      { text: '书本', value: 'd' },
      { text: '水卡', value: 'e' },
      { text: '男朋友', value: 'f' },
      { text: '女朋友', value: 'g' }
    ],
    value1: 0,
    value2: 'a',
    goods: [
      {
        src: "../../image/11.jpg",
        name: "龍龍",
        detail: "今天早市第二节体育课，我把衣服掉在了旧操场，他们有人说被一个小哥哥捡走了，大家看到了方便和我联系一下么"
      },
      {
        src: "../../image/16.jpg",
        name: "虾虾胖",
        detail: "我中午在食堂吃饭捡到了一张饭卡，好像是计算机学院的蒋文隆同学，如果看到可以和我联系"
      },
      {
        src: "../../image/15.jpg",
        name: "小熊熊",
        detail: "我丢了一串钥匙，上面有一个小熊挂件，大概是掉在食堂了，如果有好心人看见了麻烦联系一下我。"
      },
      {
        src: "../../image/12.jpg",
        name: "小熊熊",
        detail: "我丢了一串钥匙，上面有一个小熊挂件，大概是掉在食堂了，如果有好心人看见了麻烦联系一下我。"
      },
      {
        src: "../../image/xiangji.png",
        name: "小熊熊",
        detail: "我丢了一串钥匙，上面有一个小熊挂件，大概是掉在食堂了，如果有好心人看见了麻烦联系一下我。"
      },
      {
        src: "../../image/14.jpg",
        name: "小熊熊",
        detail: "我丢了一串钥匙，上面有一个小熊挂件，大概是掉在食堂了，如果有好心人看见了麻烦联系一下我。"
      }
    ]
  },
  toPublish(e){
    wx.navigateTo({
      url: '../publish/index',
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