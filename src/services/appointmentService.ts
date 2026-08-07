import type { Appointment } from "../types";

const KEY = "habitatt-appointments";

function read(): Appointment[] {
  const raw = localStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as Appointment[]) : [];
}

function write(list: Appointment[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export const appointmentService = {
  async list(): Promise<Appointment[]> {
    return Promise.resolve(read());
  },
  async book(appointment: Omit<Appointment, "id" | "status">): Promise<Appointment> {
    const list = read();
    const created: Appointment = { ...appointment, id: `a_${Date.now()}`, status: "upcoming" };
    list.unshift(created);
    write(list);
    return Promise.resolve(created);
  },
};
