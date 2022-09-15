export type TUser = {
  id: number;
  name: string;
};

export type TProduct = {
  id: number;
  name: string;
  price: number;
  chosenProductUsers: number[];
  averageCost: number;
};
