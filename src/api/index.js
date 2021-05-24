import axios from 'axios';
import { BASE_URL } from '../config';

const httpClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const createTask = ({ task } = {}) => {
  console.log(task);
  return httpClient.post('/tasks', task);
};

export const getTasks = () => httpClient.get(`/tasks`);

export const updateTask = ({ id, values } = {}) =>
  httpClient.patch(`/tasks/${id}`, values);

export const deleteTask = ({ id } = {}) => httpClient.delete(`/tasks/${id}`);

export default httpClient;
