import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { info, handleRemove } = this.props;
        return (
            <li>
                {info}
                <button
                    type="button"
                    onClick={handleRemove}
                >
                    删除
                </button>
            </li>
        );
    }
}

Item.propTypes = {
    info: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired,
};

export default Item;
