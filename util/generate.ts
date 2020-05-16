import { ProjectData } from './types/data';
import path from 'path';
import fse from 'fs-extra';
import fetch from 'node-fetch';

const projectIndexFile = {
  "slug":"projects",
  "title": "Projects",
  "description": "A list of all the projects I've created.",
  "draft": false
}

const validateProjectUrls = async (projectData: ProjectData): Promise<void> => {
  const links =
    projectData.links
      .concat(projectData.socials)
      .map(obj => obj.link);

  for (const link of links) {
    const response = await fetch(link);
    if (response?.status !== 200) {
      console.log(`${link} does not seem to be returning a 200.`);
    }
  }
};

const getFilePath = (projectData: ProjectData): string => {
  const category: string = projectData.categories[0];
  const slug: string = projectData.slug;
  return path.join(__dirname, '..', `/content/projects/${category}/${slug}.md`);
};

const getFileContents = (projectData: ProjectData): string => {
  return JSON.stringify(projectData);
};

export const generateHugoMDFiles = async (projectDataList: ProjectData[]): Promise<void> => {
  try {
    fse.removeSync(path.join(__dirname, '..', 'content', 'projects'));
    console.log('removed /content/projects folder.');

    for (const projectData of projectDataList) {
      // await validateProjectUrls(projectData);

      const filePath = getFilePath(projectData);
      console.log(filePath);
      const fileContents = getFileContents(projectData);
      fse.outputFileSync(filePath, fileContents);
    }

    // create project _index.md
    const projectFilePath = path.join(__dirname, '..', 'content/projects/_index.md');
    const projectFileContents = JSON.stringify(projectIndexFile);
    fse.outputFileSync(projectFilePath, projectFileContents);

    console.log('finished template creation.')
  } catch(error) {
    throw new Error(`generateHugoMDFiles - ${error}`);
  }
};


// NOTE: The relative endpoint is

// TODO: This would also be a great opportunity to validate all the URLS and other data to ensure it is all functioning correctly.