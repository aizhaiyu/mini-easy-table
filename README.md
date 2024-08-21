

## 说明

最近需要还原一个table效果，网上找了很多基本不适合，原生的小程序table又很少，本组件是对[etable](https://github.com/middleHallo/etable_demo)进行优化改良，感谢大佬提供的思路

先上效果 在img

<img src="/img/img.gif" alt="img" style="zoom:30%;" />


<img src="E:\wolfman\programData\小程序\mini-easy-table\img\jt.png" style="zoom:73%;" />
 
## 使用介绍

组件在目录components中，复制到项目中使用即可

### 1、引入

```
"usingComponents": {
    "easy-table": "/components/easy-table/easy-table"
 }
```

### 2、使用

```
<easy-table 
  border="{{false}}"//边框
  stripe="{{false}}"//斑马纹
  align="center"//对齐方式
  left="{{true}}"//固定左边栏
  y="250"//设置了高度会默认标题top悬浮
  opText="查看详情" //有内容显示操作按钮
  config="{{config}}"
/>
```

### 3、表格数据

```json
data:{
config: {
  //必须
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
    }
  ],
  titles: ["月份", "结算金额","结算金额"],
  //必须
  props: ['month', 'money','money1'],
  columnWidths: ['270rpx', '270rpx','270rpx']
}
}
```

- content 数据，数组类型，必填
- titles 头部标题，数组类型，非必填
- props 每一列对应的数据的key值

- columnWidths  每一列的列宽，值类型使用rpx，注意：(titles,props,columnWidths这3个数组的长度需保持一致)

  