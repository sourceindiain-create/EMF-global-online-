export type UserRole = "student" | "client" | "admin" | "partner" | "team";

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  photoURL?: string;
  createdAt: any;
}

export interface JobPost {
  id: string;
  title: string;
  description: string;
  type: "job" | "skill" | "land" | "animal" | "service";
  authorId: string;
  authorName: string;
  createdAt: any;
  location?: string;
  price?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "agriculture" | "handmade" | "ayurveda";
  imageUrl: string;
  stock: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
}
