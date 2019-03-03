import React from 'react';
import TodoItem from './item';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            list: [],
            info: '',
        };
    }

    save() {
        let { id } = this.state;
        const { list, info } = this.state;

        if (info.length === 0) { return; }

        id += 1;
        this.setState({
            id,
            list: [...list, { id, info }],
            info: '',
        });
    }

    remove(id) {
        const { list } = this.state;
        const index = list.findIndex(item => item.id === id);
        list.splice(index, 1);
        this.setState({ list });
    }

    handleInputChange() {
        this.setState({
            info: this.input.value.trim(),
        });
    }

    render() {
        const { list, info } = this.state;
        return (
            <div className="app">
                <h3>TODO</h3>
                <div>
                    <input
                        ref={(c) => { this.input = c; }}
                        type="text"
                        value={info}
                        onChange={() => { this.handleInputChange(); }}
                        onKeyDown={(e) => { e.keyCode === 13 && this.save(); }}
                    />
                    <button type="button" onClick={() => { this.save(); }}>提交</button>
                </div>
                <ul>
                    {
                        list.map(item => (
                            <TodoItem
                                key={item.id}
                                info={item.info}
                                handleRemove={() => { this.remove(item.id); }}
                            />
                            // <li key={item.id}>
                            //     {item.info}
                            //     <button
                            //         type="button"
                            //         onClick={() => { this.remove(item.id); }}
                            //     >
                            //         删除
                            //     </button>
                            // </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Todo;
