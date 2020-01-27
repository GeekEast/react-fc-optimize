### 1. React Developer Tool
- [How to use the React Developer Tools](https://flaviocopes.com/react-developer-tools/)

### 2. 组件创建原则
#### 单一职责原则
- **每个组件只做一件事情**
- 如果组件变得复杂，应该拆分为小组件

#### DRY原则
- **能够计算得到的就不需要单独存储**
- 组件尽量无状态，所需数据尽量通过props获取 -> 可以使用`Memo`进行性能优化

### 3. 副作用
- 含义: 任何能够引起当前`函数之外`变化的东西
- 包含: API Call to backend.

### 4. 导致react重新渲染的要素
- `parent` component re-render
- component `props` change
- `setState()` or `forceUpdate()`

### 5. Redux
- 讲联动的action和reducer放在一个文件
- 在actions.js中还是导出了全部的actions
- redux-saga is a thunk for complex situation. [Link](https://juejin.im/post/59e6cd68f265da43163c2821) need to learn generator at first.


### 6. Router
- 通过看url就知道该页面具体是显示的什么内容
- Router是可以嵌套的，以实现多级导航


### 7. UI库选择
- Ant Design: 蚂蚁出品, 适用企业, 高交互
- Material UI: 比较fancy，适合外包
- Semantic UI: 历史悠久，适合老玩家

#### 选择要素
- 组件库是否完善，Ant Design最齐全
- 样式风格是否符合业务需求， 
- API设计是否便捷和灵活: Ant Design!
- 技术支持是否完善: 技术文档齐全、issue回答效率
- 开发是否完善

### 8. Performance
- 通过`Inspect > Performance`检测代码`基准水平`
- 通过`useMemo`或者`Memo`进行代码优化
- 通过`Lazy-loading`进行组件延迟加载
- **避免**`inline css`的使用
- 不要忘记添加`key`
- 防抖(`Debouncing`)和节流(`throttling`)
- `CDN`
- 使用`css动画`而不是js动画
- `gzip压缩`
- `web worker`分担计算密集任务
- `SSR`加快`首屏渲染`
#### LazyLoad

|       Library       | Suspense |  SSR  | Library splitting | import(`./${value}`) |
| :-----------------: | :------: | :---: | :---------------: | :------------------: |
|     React.lazy      |    ✅     |   ❌   |         ❌         |          ❌           |
| @loadable/component |    ✅     |   ✅   |         ✅         |          ✅           |
- Normal: `React.lazy` and `React.Suspense`
```javascript
import {lazy, Suspense} from 'react';
// 选择延迟加载路由组件
const ComponentOne = lazy(() => import('components/ComponentOne'))
// Suspense包裹Router,并且设置`正在装载`状态组件
<Suspense fallback={<div>Loading</div>}>
  <Router>
    ...
  </Router>
</Suspense>
```
- Powerful: `@loadable/component`
#### redux优化: `reselect`
- 通过计算就不再call api
#### 父子组件
- `问题`: 父组件任意状态的更新都会造成子组件的重新渲染
- `思路`: 父子关系和兄弟关系一定要用妥当
- `解决`: 状态下调，使得状态的变化只会引起子组件的状态变化
- `工具`: dev tool 里面选择highlight updates when components render. `蓝色`，`绿色`， `黄色`，`红色`。其中蓝色是指**最不频繁**的更新，其次是`绿色`，`黄色`，`红色`。黄色和红色并不一定是不好的，之所以出现黄色或者红色，组件这个时候确实因为某些state或者props改变导致了**频繁更新**。
#### asynchronous render
  

### 9. Absolute Import
- `.env`
```env
<!-- .env -->
NODE_PATH="./src"
```
- `tsconfig.json`
```javascript
{
  "compilerOptions": {
    "baseUrl": "src" // core
  },
  "include": ["src"]
}
```











