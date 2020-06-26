const owner = 'entria';
const repo = 'feedback-server';

const removeJobs = async () => {
  console.log('remove jobs from circleci');
};

(async () => {
  try {
    await removeJobs();
  } catch (err) {
    console.log('err: ', err);
  }

  process.exit(0);
})();
