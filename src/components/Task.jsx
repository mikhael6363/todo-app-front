import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as ActionCreators from '../actions/taskCreators';

const Task = props => {
  const { isDone, body, id, deadline } = props;

  const dispatch = useDispatch();
  const { deleteTaskRequest, updateTaskRequest } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const checkboxHandler = event => {
    const {
      target: { checked },
    } = event;
    updateTaskRequest({ id, values: { isDone: checked, body } });
  };

  return (
    <article>
      <h3>{body}</h3>
      <span>Done: {isDone}</span>
      <input type='checkbox' checked={isDone} onChange={checkboxHandler} />
      <p>{deadline}</p>
      <button onClick={() => deleteTaskRequest({ id })}>Delete task</button>
    </article>
  );
};

export default Task;
