import path from 'path';
import { data, util } from '@dottjt/datareade';

const main = async () => {
  const { projects } = data;
  const { juliusV6: { generateHugoMDFiles } } = util;

  const contentDirectory = path.join(__dirname, '..', 'content');

  await generateHugoMDFiles({
    projects,
    contentDirectory,
  });
};

main();