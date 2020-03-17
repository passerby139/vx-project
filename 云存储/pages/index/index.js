//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    imageURL: ""
  },

  upimage(){
    let that = this;
    console.log(11)
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
     
      success(res) {
        console.log(1111,res),
        that.uplode(res.tempFilePaths[0]);
      }
    })
  },

  uplode(fileURl){

    wx.cloud.uploadFile({
      cloudPath: new Date().getTime()+"png",
      filePath: fileURl,
      success:res=>{
        console.log("上传成功", res)
        this.setData({
          imageURL: res.fileID
        })
      },

      fail: console.error
    })
  },
  upvideo(){
    console.log(111),
      wx.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: 'back',
        success(res) {
          console.log("选择成功"+res.tempFilePath),
            wx.cloud.uploadFile({
              cloudPath: "视频.mp4",
            filePath: res.tempFilePath,
              success: res => {
                console.log("上传成功", res)
              },
              fail: console.error
            })
        }
      })
  }
})
