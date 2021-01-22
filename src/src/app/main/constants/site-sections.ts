export enum SiteSectionTypes {
  about = 'about',
}

type SiteSectionTypesMap = { [key in SiteSectionTypes]: string };

export const SiteSectionTypeNames: SiteSectionTypesMap = {
  [SiteSectionTypes.about]: 'О проекте',
};
