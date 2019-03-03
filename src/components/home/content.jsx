import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from '../common/Loadable';
// import PrivateRoute from '../PrivateRoute'

// const Home = LoadableComponent(()=>import('../../routes/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const Todo = Loadable(() => import('../practice/todo'));
const Dianping = Loadable(() => import('../practice/dianping'));

// @withRouter
// class ContentMain extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Switch>
//                     <Route exact path="/home/practice/todo" component={Todo} />
//                     <Route exact path="/home/practice/dianping" component={Dianping} />
//                 </Switch>
//             </div>
//         );
//     }
// }

function ContentMain() {
    return (
        <Switch>
            <Route exact path="/home/practice/todo" component={Todo} />
            <Route exact path="/home/practice/dianping" component={Dianping} />
        </Switch>
    );
}

export default ContentMain;
