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

  // GENERATE RSS FEEDS

  const OUTPUT_RSS_FILE = path.join(__dirname, '..', 'themes', 'reade', 'static', 'nfd_social_feed.xml');

  await generateRSSFeed({
    title: 'NeverFap Deluxe Social Feed',
    websiteLink: 'https://neverfapdeluxe.com/',
    description: 'NeverFap Deluxe Social Feed so I can aggregate to the world. Something along those lines, I think.',

    linkRSSFile: 'https://juliusreade.com/nfd_social_feed.xml',
    outputRSSFile: OUTPUT_RSS_FILE,
    feedList: feedNFDSocial
  });
};

main();