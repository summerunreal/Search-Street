var app=getApp();
var test_name = '华南师范大学小卖部石牌校区旗舰店'
var test_pic = '../../images/search_buck.png'
var score = 80;
var score_rank = 5;
score_rank = score_rank.toFixed(1);
var score_rate = 0.8;

Page({

  /**
   * 页面的初始数据
   */
  data: {

    shopname: test_name,
    shoppic: null,
    score_number0: score,
    score_number1: score_rank,
    score_number2: score_rate,
    shopId:null,
    /*
    shopname:null,
    shoppic:null,
    */
    time: 0,
    number: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorage({
      key: 'shopId',
      data: options.id//从shoplist传来的shopid
    })//异步更新缓存shopId
    this.setData({
      shopId:options.id
    })
    var token = null;
    try {//同步获取与用户信息有关的缓存token
      const value = wx.getStorageSync('token')
      if (value) {
        token = value;
      }
    } catch (e) {
      console.log("error");
    }
    wx.request({
      url: app.globalData.serviceUrl+"/SearchStreet/shopadmin/getshopbyid?shopId=" + options.id,
      data: {},
      method: "GET",
      success: res => {
        console.log(res.data.shop);   //设置页面中的数据
        this.setData(
          {
            shopname: res.data.shop.shopName
          }
        )
        if (res.data.shop.profileImg!=null){
          this.setData({
            shoppic: app.globalData.imgUrl + res.data.shop.profileImg
          })
        }
      }
    })

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