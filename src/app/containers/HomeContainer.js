import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TasksComponent from '../components/tasks/TasksComponent';
import { getTasks } from '../actions/tasksActions';


class HomeContainer extends Component {

    static propTypes = {
        tasks: PropTypes.instanceOf(Map).isRequired,
        getTasks: PropTypes.func.isRequired
    }

    componentDidMount () {
        this.props.getTasks();
    }

    shouldComponentUpdate (props) {
        return props.tasks !== this.props.tasks;
    }

    render () {
        return (
            <div>
                {this.renderError()}
                {this.renderTasks()}
            </div>
        );
    }

    renderError () {
        const error = this.props.tasks.get('error');
        if (error !== null) {
            return <div>An error occurred: {error}</div>;
        }
        return null;
    }

    renderTasks () {
        return (
            <TasksComponent
                tasks={this.props.tasks}
            />
        );
    }

}

const mapStateToProps = ({ tasks }) => ({
    tasks
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTasks
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
