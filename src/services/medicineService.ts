import { medicines } from "../data/mockData";
import type { Medicine } from "../types";

export const medicineService = {
  async list(): Promise<Medicine[]> {
    return Promise.resolve(medicines);
  },
};
