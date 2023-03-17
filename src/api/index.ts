import axios from 'axios';

const URL = 'http://localhost:5000';

export const getPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload:any) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload:any) => axios.post(`${URL}/posts/update`, payload);