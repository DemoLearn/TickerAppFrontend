import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';


export default class TasksComponent extends Component {

    static propTypes = {
        tasks: PropTypes.instanceOf(Map).isRequired
    }

    render () {
        return <div>We have {this.props.tasks.get('tasksList').size} tasks</div>;
    }

}
