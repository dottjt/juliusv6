import { ProjectData } from './types/data';
import path from 'path';
import fse from 'fs-extra';

export const getFilePath = (projectData: ProjectData): string => {
  const category: string = projectData.categories[0];
  const slug: string = projectData.slug;
  return `../content/projects/${category}/${slug}.md`;
};

export const getFileContents = (projectData: ProjectData): string => {
  return JSON.stringify(projectData);
};

export const generateHugoMDFiles = (projectDataList: ProjectData[]): void => {
  console.log(__dirname);
  console.log(path.join(__dirname));
  // fse.removeSync('../content');

  // for (const projectData of projectDataList) {
  //   const filePath = getFilePath(projectData);
  //   const fileContents = getFileContents(projectData);
  //   fse.outputFileSync(filePath, fileContents);
  // }
};

// NOTE: The relative endpoint is