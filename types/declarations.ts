// export type work = {
//   name: string;
//   desc: string[];
//   wideImage?: string;
//   smallImage?: string;
//   bigImage?: string;
//   baseImage?: string;
//   isLarge: boolean;
//   slug?: string;
//   jumboImage?: string;
//   behanceLink?: string;
//   splashImage?: string;
//   aboutHero?: string[];
//   colors?: string[];
//   isCaseStudy?: boolean;
//   mainFont?: string;
//   typoShowcaseImage?: string;
//   backgroundBigText?: string;
//   isInternal?: boolean;
//   additionalFontData?: [
//     {
//       fontName: string;
//       desc: string;
//     }
//   ];
//   designImages?: string[];
// };

// export interface workDetails {
//   work: work;
// }

// export type experience = {
//   role: string;
//   companyName: string;
//   duration: string;
//   tasks: string[];
// };

export type collectionType = {
  title: string;
  image?: string;
  backgroundColor: string;
};

export type bikeTypes =
  | "Mountain Bike"
  | "City Bike"
  | "Road Bike"
  | "Electric Bike";

export type bike = {
  name: string;
  rating?: number;
  type: bikeTypes[];
  imageName?: string;
  price: string;
  slug?: string;
};
