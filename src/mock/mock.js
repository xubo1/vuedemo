import Mock from 'mockjs'

Mock.mock(/getNewsList/, {
    'list|5': [{
        'url': '@url',
        'title': '@ctitle(4, 8)'
    }]
}),
Mock.mock(/login/, {
    data:{
        name: 'xb',
        password: '123456'
    }
}),
Mock.mock(/getProductList/, {
    productList:{
        pc:{
          title: 'pc产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
             {
              name: '数据预测',
              url: 'http://warcraft.com',
              hot: true
            },
             {
              name: '流量分析',
              url: 'http://overwath.com'
            },
             {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app:{
           title: '应用类',
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
             {
              name: '产品助手',
              url: 'http://twitter.com'
            },
             {
              name: '智能地图',
              url: 'http://maps.com'
            },
             {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]

        }
      }
}),
// Mock.mock(/getSlides/,[
//         {
//         src: require('../assets/slideShow/pic1.jpg'),
//         title: 'xxx1',
//         href: 'detail/analysis'
//       },
//         {
//         src: require('../assets/slideShow/pic2.jpg'),
//         title: 'xxx2',
//         href: 'detail/count'
//       },
//         {
//         src: require('../assets/slideShow/pic3.jpg'),
//         title: 'xxx3',
//         href: 'detail/publish'
//       },
//         {
//         src: require('../assets/slideShow/pic4.jpg'),
//         title: 'xxx4',
//         href: 'detail/forecast'
//       }
//       ]
// ),
Mock.mock(/getBoardList/, {
    list:[
       {
          title: '开放产品',
          description: '开放产品是一款新产品',
          id: 'loud',
          saleout: false,
          toKey: 'analysis'
         },
           {
          title: '品牌营销',
          description: '品牌营销帮你更好的找到好的品牌',
          id: 'earth',
          saleout: false,
          toKey: 'count'
         },
           {
          title: '使命送达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'car',
          saleout: false,
          toKey: 'forecast'
         },
           {
          title: '永攀高峰',
          description: '永攀高峰，永不放弃',
          id: 'hill',
          saleout: false,
          toKey: 'publish'
         }
      ]
})