import { put } from 'redux-saga/effects';
import * as ActionCreators from '../actions/taskCreators';
import * as API from '../api';

export function * createTaskSaga (action) {
  try {
    const { payload } = action;

    const {
      data: { data: task },
    } = yield API.createTask(payload);

    yield put(ActionCreators.createTaskSuccess({ task }));
  } catch (error) {
    yield put(ActionCreators.createTaskError({ error }));
  }
}

export function * getTasksSaga (action) {
  try {
    const { payload } = action;
    const {
      data: { data: tasks },
    } = yield API.getTasks(payload);

    yield put(ActionCreators.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(ActionCreators.getTasksError({ error }));
  }
}

export function * updateTaskSaga (action) {
  try {
    const { payload } = action;

    const {
      data: { data: updatedTask },
    } = yield API.updateTask(payload);

    yield put(ActionCreators.updateTaskSuccess({ updatedTask }));
  } catch (error) {
    yield put(ActionCreators.updateTaskError({ error }));
  }
}

export function * deleteTaskSaga (action) {
  try {
    const {
      payload,
      payload: { id },
    } = action;

    yield API.deleteTask(payload);

    yield put(ActionCreators.deleteTaskSuccess({ id }));
  } catch (error) {
    yield put(ActionCreators.updateTaskError({ error }));
  }
}
