import '@babel/polyfill';
import 'isomorphic-fetch';
import { getProjectPipelines } from './getProjectPipelines';
import { debugConsole } from './debugConsole';

export const owner = 'entria';
export const repo = 'feedback-server';
export const vcs = 'gh';
export const projectSlug = `${vcs}/${owner}/${repo}`;

const removeJobs = async () => {
  console.log('remove jobs from circleci');

  const data = await getProjectPipelines(projectSlug);

  debugConsole(data);
};

(async () => {
  try {
    await removeJobs();
  } catch (err) {
    console.log('err: ', err);
  }

  process.exit(0);
})();
