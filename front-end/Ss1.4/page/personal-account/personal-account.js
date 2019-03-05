var search_money='40';
var mymoney='2';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_money:search_money,
    mymoney:mymoney
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var token = null;
    try {                    //同步获取与用户信息有关的缓存token
      const value = wx.getStorageSync('token')
      if (value) {
        token = value;
      }
    } catch (e) {
      console.log("error");
    }
    wx.request({
      url: '',             //请求获取用户目前账户中的搜币数目和可提现金额的数目
      data:{

      },
      method:"POST",
      success(res){
        console,log(res.data);
        this.setData({
          search_money:res.data.search_money,
          mymoney:res.data.mymoney,
        })
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