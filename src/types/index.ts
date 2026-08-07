export type UserRole = "patient" | "doctor" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experienceYears: number;
  rating: number;
  reviews: number;
  availableToday: boolean;
  fee: number;
  avatar: string;
  languages: string[];
  bio: string;
}

export interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  requiresPrescription: boolean;
  inStock: boolean;
  packSize: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  mode: "video" | "in-person";
  status: "upcoming" | "completed" | "cancelled";
}

export interface Order {
  id: string;
  items: { medicineId: string; name: string; qty: number; price: number }[];
  total: number;
  status: "processing" | "shipped" | "delivered";
  placedOn: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
