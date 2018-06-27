import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';


export default class TasksComponent extends Component {

    static propTypes = {
        tasks: PropTypes.instanceOf(List).isRequired
    }

    render () {
        return <div>We have {this.props.tasks.size} tasks</div>;
    }

}
