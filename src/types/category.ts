export type Category = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  productsCount: number;
  createdAt: string;
};

export type CategoryOption = {
  id: string;
  name: string;
};

export type CategoryPayload = {
  name: string;
  description: string;
  isActive: boolean;
};
