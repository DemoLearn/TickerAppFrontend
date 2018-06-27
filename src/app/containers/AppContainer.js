import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import GrommetApp from 'grommet/components/App';
// import Spinner from '../components/SpinnerComponent';


class App extends Component {

    static propTypes = {
        // state: PropTypes.object.isRequired,
        children: PropTypes.node.isRequired
    }

    render () {
        return (
            <GrommetApp centered={false}>
                {this.renderApp()}
            </GrommetApp>
        );
    }

    renderApp () {
        return this.props.children;
    }

    // renderApp () {
    //     if (this.props.state.user) {
    //         return this.props.children;
    //     }
    //     return (
    //         <Spinner text='Loading...' />
    //     );
    // }

}

const mapStateToProps = state => ({ state });

export default withRouter(connect(mapStateToProps)(App));
