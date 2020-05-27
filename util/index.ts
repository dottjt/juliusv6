import { data, util } from '@dottjt/datareade';

const main = async () => {
  const { projects } = data;
  const { juliusV6: { generateHugoMDFiles } } = util;

  await generateHugoMDFiles(projects);
};

main();