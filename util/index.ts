import { generateHugoMDFiles } from './generate';
import { projectDataList } from './data/project';

const main = () => {
  generateHugoMDFiles(projectDataList);
};

main();