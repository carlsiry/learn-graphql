
## demos

- hello.js ：客户端的基本示例
- server.js : 服务器端的基本示例

## 使用 apollo 在 angular 中

- 安装依赖：
`yarn add apollo-angular apollo-angular-link-http apollo-client apollo-cache-inmemory graphql-tag graphql`

- 需要在全局模块提供 apollo 服务配置

```ts
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/commom/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri: 'https://api.example.com/graphql'}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [ HttpClientModule, ApolloModule, HttpLinkModule ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [ HttpLink ]
    }
  ]
})
export class ShareModule {}
```

- 使用 apollo 服务

```ts
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

class OneService {
  constructor(
    apollo: Apollo,
  ) {
    apollo.query({
      query: gql`
        { hello }
      `
    })
  }
}
```
