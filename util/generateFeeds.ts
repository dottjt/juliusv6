import path from 'path';
import { data, media } from '@dottjt/datareade';

const main = async () => {
  const { feedNFDSocial } = data;
  const { generateRSSFeed } = media;

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