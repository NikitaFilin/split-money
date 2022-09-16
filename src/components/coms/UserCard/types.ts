export type TUser = {
  id: string;
  name: string;
};

export type TProduct = {
  id: string;
  name: string;
  price: number;
  chosenProductUsers: string[];
  averageCost: number;
};
