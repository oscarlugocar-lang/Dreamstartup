import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export async function getProjects() {
  const response = await api.get('/projects');
  return response.data;
}

export async function getClients() {
  const response = await api.get('/clients');
  return response.data;
}

export async function createProject(data: { name: string; client: string; status?: string }) {
  const response = await api.post('/projects', data);
  return response.data;
}

export default api;
