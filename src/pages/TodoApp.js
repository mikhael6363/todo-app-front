import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TodoApp = props => (
  <>
    <h3>Task list</h3>
    <TaskForm />
    <TaskList />
  </>
);

export default TodoApp;
