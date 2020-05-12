import { generateHugoMDFiles } from './generate';
import { projectDataList } from './data/project';

const main = async () => {
  await generateHugoMDFiles(projectDataList);
};

main();