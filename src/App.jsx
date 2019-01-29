import React from 'react';
import './App.css';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    handleClick() {
        console.log(this);
    }

    render() {
        return (
            <div className="app">
                <h3>TODO</h3>
                <div>
                    <input type="text" />
                    <button type="button" onClick={this.handleClick}>提交</button>
                </div>
            </div>
        );
    }
}

export default App;
