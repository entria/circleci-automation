import { api } from './api';
import { baseUrl } from './circleciApi';

export const projectPipeline = (projectSlug: string, branch = 'master') => `/project/${projectSlug}/pipeline?branch=${branch}`;

export const getProjectPipelines = async (projectSlug) => {
  const url = `${baseUrl}${projectPipeline(projectSlug)}`;

  return await api(url);
};
