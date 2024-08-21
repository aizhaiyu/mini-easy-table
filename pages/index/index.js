// index.js
Page({
  data:{
    align:"left",
    left: false,
    y:"0",
    stripe:false,
    border:false,
    opText:"",
    //刷新表格
    refresh:[1],
    //table
    list: {
      content: [
        {
          month: '2024-08',
          money: '￥22',
          money1: '￥22'
        },
        {
          month: '2024-08',
          money: '￥22',
          money1: '￥22'
        },
        {
          month: '2024-08',
          money: '￥22',
          money1: '￥22'
        },
        {
          month: '2024-08',
          money: '￥22',
          money1: '￥22'
        }
      ],
      titles: ["月份", "金额","结算金额"],
      props: ['month', 'money', 'money1'],
      columnWidths: ['270rpx', '270rpx', '270rpx']
    },
  },
  /**
   * 表格事件
   * @param {*} event 
   */
  OpClick(event) {
    console.log(event.detail)
  },

  /**************************************** */
  //表格对齐方式
  alignClick(){
    const value = this.data.align
    this.setData({ align: value == "left" ? "center" : value == "center" ? "right" :"left" })
  },
  //显示最后列的操作按钮 需要配合bind:OpClick事件
  opTextClick(){
    const value = this.data.opText
    this.setData({ opText: value?"":"操作" })
  },
  //斑马纹
  stripeClick(){
    const value = this.data.stripe
    this.setData({ stripe: !value })
  },
  //边框
  borderClick(){
    const value = this.data.border
    this.setData({ border: !value })
  },
  //固定左侧
  leftClick(){
    const value = this.data.left
    this.setData({ left: !value })
  }

})
