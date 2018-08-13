
const { graphql, buildSchema } = require('graphql')

// 建立数据模式
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

// 定义数据模型处理函数
const root = { hello: () => 'hello world' };

graphql(schema, '{ hello }', root)
.then(res => console.log(res))

