import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/taskCreators';
import { INITIAL_VALUES } from '../constants';

const TaskForm = props => {
  const dispatch = useDispatch();

  const { createTaskRequest } = bindActionCreators(ActionCreators, dispatch);

  const onSubmit = (values, formikBag) => {
    console.log(values);
    createTaskRequest(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      <Form>
        <Field name='body' placeholder='Add a new task' />
        <Field name='deadline' type='date' />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
