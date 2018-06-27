import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import TasksComponent from '../components/tasks/TasksComponent';


class HomeContainer extends Component {

    static propTypes = {
        tasks: PropTypes.instanceOf(List).isRequired
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.tasks !== this.props.tasks;
    }

    render () {
        return (
            <TasksComponent
                tasks={this.props.tasks}
            />
        );
    }

}

export default connect(({ tasks }) => ({
    tasks
}))(HomeContainer);
