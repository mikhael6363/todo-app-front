import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import {
  createTaskSaga,
  getTasksSaga,
  updateTaskSaga,
  deleteTaskSaga,
} from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, getTasksSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_REQUEST, updateTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, deleteTaskSaga);
}

export default rootSaga;
