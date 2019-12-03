import React from 'react'
import PropTypes from 'prop-types'

class Tooltip extends React.Component {

    constructor(props) {
        super(props);
        this.tooltipRef = React.createRef();
        this.state = {
            opacity: false,
            top: '0',
            left: '0',
        }
    }

    toggle() {
        const specs = this.tooltipRef.current.getBoundingClientRect();
        const top = specs.top + 20;
        const left = specs.left;

        this.setState({
            top,
            left,
            opacity: !this.state.opacity
        })
    }

    render() {
        return (
            <>
                <span className='tooltip-span'
                      ref={this.tooltipRef}
                      onMouseEnter={this.toggle.bind(this)}
                      onMouseLeave={this.toggle.bind(this)}
                >{this.props.children}</span>

                <span className='tooltip'
                      style={{
                          top: this.state.top,
                          left: this.state.left,
                          opacity: +this.state.opacity}}
                >{this.props.text}</span>
            </>
        )
    }
}

export default Tooltip;

Tooltip.defaultProps = {
    text: 'Для этого слова подсказки нет'
};

Tooltip.propTypes = {
    text: PropTypes.string
};
