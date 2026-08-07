import { doctors } from "../data/mockData";
import type { Doctor } from "../types";

// Swap these for apiClient.get("/doctors") etc. once the backend is live.
export const doctorService = {
  async list(): Promise<Doctor[]> {
    return Promise.resolve(doctors);
  },
  async getById(id: string): Promise<Doctor | undefined> {
    return Promise.resolve(doctors.find((d) => d.id === id));
  },
};
