import path from 'path';
import { data, website, media } from '@dottjt/datareade';

const main = async () => {
  const { projects, feedNFDSocial } = data;
  const { generateHugoMDFilesV6 } = website;
  const { generateRSSFeed } = media;

  const contentDirectory = path.join(__dirname, '..', 'content');

  // GENERATE WEBSITE CONTENT

  await generateHugoMDFilesV6({
    projects,
    contentDirectory,
  });
};

main();