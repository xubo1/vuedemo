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
})