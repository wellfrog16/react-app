import React from 'react';
import './App.css';
import { _ } from './utils/cdn';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    handleClick() {
        const { list } = this.state;
        this.setState({
            list: [...list, 'abc'],
        });
    }

    render() {
        const { list } = this.state;
        return (
            <div className="app">
                <h3>TODO</h3>
                <div>
                    <input type="text" />
                    <button type="button" onClick={() => { this.handleClick(); }}>提交</button>
                </div>
                <ul>
                    {
                        list.map(item => <li key={_.uniqueId()}>{item}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default App;
