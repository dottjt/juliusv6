import { config } from 'dotenv';
config();

import { generateHugoMDFiles } from './generate';
// import { getProjectFirstLastCommitDates } from './git';
import { projectDataList } from './data/project';

const main = async () => {
  await generateHugoMDFiles(projectDataList);

  // await getProjectFirstLastCommitDates();
};

main();