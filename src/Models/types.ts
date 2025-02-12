export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id?: number;
  name?: string;
  username: string;
  email: string;
  password: string;
  address?: Address;
  phone: string;
  website?: string;
  company?: Company;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface PostsState {
  posts: Post[];
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
