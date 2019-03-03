import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { moment } from './utils/cdn';
import './assets/style/main.less';
// import Todo from './container/todo';
// import Dianping from './container/dianping';
import Home from './container/home';
import * as serviceWorker from './serviceWorker';

moment.locale('zh-cn');

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/todo" component={Todo} />
                <Route path="/dianping" component={Dianping} /> */}
                <Route path="/home" component={Home} />
                <Route component={Home} />
            </Switch>
        </HashRouter>
    </LocaleProvider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
