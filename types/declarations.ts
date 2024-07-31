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

export interface wishListItem {
  slug: string;

  inList?: boolean;
}

export interface Item {
  slug: string;
  quantity: number;
}
