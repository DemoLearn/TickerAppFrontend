import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';


export default class Spinner extends Component {

    static propTypes = {
        text: PropTypes.string
    }

    static defaultProps = {
        text: ''
    }

    render () {
        return (
            <Box align='center' className='spinner'>
                <Spinning size='large' />
                <div>
                    {this.props.text}
                </div>
            </Box>
        );
    }

}
