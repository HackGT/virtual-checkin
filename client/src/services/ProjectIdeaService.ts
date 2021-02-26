/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { ProjectIdea } from '../types/ProjectIdea';
const getIdeas = async (): Promise<any> => {
  try {
    const ideas = await axios.get('/ideas');
    console.log(ideas.data);
    return ideas.data;
  } catch (e: any) {
    if (e.response) {
      throw new Error(e.response.data.message);
    } else {
      throw new Error('Please refresh page & try again.');
    }
  }
};
const addIdea = async (idea: ProjectIdea): Promise<any> => {
  try {
    const resp = await axios.post('/ideas/add', idea);
    return resp.data;
  } catch (e: any) {
    if (e.response) {
      throw new Error(e.response.data.message);
    } else {
      throw new Error('Please refresh page & try again.');
    }
  }
};
const removeIdea = async (id: string): Promise<any> => {
  try {
    const resp = await axios.post('/ideas/remove/' + id);
    return resp.data;
  } catch (e: any) {
    if (e.response) {
      throw new Error(e.response.data.message);
    } else {
      throw new Error('Please refresh page & try again.');
    }
  }
};
const editIdea = async (id: string, idea: ProjectIdea): Promise<any> => {
  await axios.post('/ideas/edit/' + id, idea);
};
export { getIdeas, addIdea, removeIdea, editIdea };
