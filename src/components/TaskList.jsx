import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/taskCreators';
import Error from './Error';
import Task from './Task';

const TaskList = props => {
  const { tasks, error } = useSelector(({ task }) => task);

  const dispatch = useDispatch();

  const { getTasksRequest, clearTaskError } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  useEffect(() => {
    getTasksRequest();
  }, []);

  return (
    <div>
      {error && <Error error={error} clearError={clearTaskError} />}
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
