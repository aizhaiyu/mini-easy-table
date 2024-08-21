Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    //对齐方式 left center right
    align: {
      type: String,
      value: 'left'
    },
    size:{
      type: String,
      value: '28'
    },
    //指定表格高度
    y:{
      type: String,
      value: '0'
    },
    //是否固定左边标题
    left:{
      type: Boolean,
      value: false
    },
    //斑马纹
    stripe: {
      type: Boolean,
      value: true
    },
    //是否边框
    border: {
      type: Boolean,
      value: false
    },
    //标题背景
    headbgColor: {
      type: String,
      value: '#f7f8fa'
    },
    //操作文本 不传不显示
    opText: {
      type: String,
      value: ''
    },
    
    /**
     config: {
        content: [
          {
            month: '2024-08',
            money: '￥22'
          },
          {
            month: '2024-08',
            money: '￥22'
          },
        ],
        titles: ["月份", "结算金额"],
        props: ['month', 'money'],
        columnWidths: ['270rpx', '270rpx']
      }
    */
    config: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 获取当前行数据
     * @param {event} event 
     */
    OpClick(event) {
      //当前行数据
      const {row} = event.currentTarget.dataset;
      this.triggerEvent('OpClick', row);
    }
  },
  observers: {
    'y': function (y) {
      if (y) {
        // this.setData({y:y})
      }
    }
  },

  /**
   * 声明周期函数
   */
  pageLifetimes: {

  }
})