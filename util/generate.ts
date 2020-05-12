import { ProjectData } from './types/data';
import path from 'path';
import fse from 'fs-extra';
import fetch from 'node-fetch';

const validateProjectUrls = async (projectData: ProjectData): Promise<void> => {
  const links =
  projectData.links
    .concat(projectData.socials)
    .map(obj => obj.link);

  for (const link of links) {
    const response = await fetch(link);

    if (response?.data?.status !== 200) {
      console.log(`${link} does not seem to be returning a 200.`);
    }
  }
};

const getFilePath = (projectData: ProjectData): string => {
  const category: string = projectData.categories[0];
  const slug: string = projectData.slug;
  return `../content/projects/${category}/${slug}.md`;
};

const getFileContents = (projectData: ProjectData): string => {
  return JSON.stringify(projectData);
};

export const generateHugoMDFiles = async (projectDataList: ProjectData[]): Promise<void> => {
  try {
    console.log(__dirname);
    console.log(path.join(__dirname));
    // fse.removeSync('../content');

    for (const projectData of projectDataList) {
      await validateProjectUrls(projectData);

      const filePath = getFilePath(projectData);
      const fileContents = getFileContents(projectData);
      fse.outputFileSync(filePath, fileContents);
    }

  } catch(error) {
    throw new Error(`generateHugoMDFiles - ${error}`);
  }
};


// NOTE: The relative endpoint is

// TODO: This would also be a great opportunity to validate all the URLS and other data to ensure it is all functioning correctly.