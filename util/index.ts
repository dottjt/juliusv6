import path from 'path';
import { data, website } from '@dottjt/datareade';

const main = async () => {
  const { projects } = data;
  const { generateHugoMDFilesV6 } = website;

  const contentDirectory = path.join(__dirname, '..', 'content');

  await generateHugoMDFilesV6({
    projects,
    contentDirectory,
  });
};

main();