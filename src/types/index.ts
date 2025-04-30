export interface Pin {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    user: User;
    saves: number;
    width: number;
    height: number;
    categories: string[];
  }
  
  export interface User {
    id: number;
    name: string;
    avatar: string;
    followers: number;
    following: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    icon: string;
  }