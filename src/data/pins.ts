import { Pin, Category,  } from '../types/index';

export const categories: Category[] = [
  { id: 1, name: 'Home Decor', icon: 'home' },
  { id: 2, name: 'Fashion', icon: 'shirt' },
  { id: 3, name: 'Travel', icon: 'plane' },
  { id: 4, name: 'Food', icon: 'utensils' },
  { id: 5, name: 'DIY & Crafts', icon: 'scissors' },
  { id: 6, name: 'Art', icon: 'palette' },
  { id: 7, name: 'Technology', icon: 'laptop' },
  { id: 8, name: 'Fitness', icon: 'dumbbell' }
];

export const pins: Pin[] = [
  {
    id: 1,
    title: 'Modern living room design with minimalist furniture',
    description: 'A clean, modern living room with neutral tones and minimal decor.',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    user: { id: 1, name: 'Interior Design Ideas', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', followers: 25300, following: 124 },
    saves: 1245,
    width: 800,
    height: 1200,
    categories: ['Home Decor', 'Interior Design']
  },
  {
    id: 2,
    title: 'Street fashion in Tokyo',
    description: 'Exploring unique street fashion styles from Tokyo.',
    imageUrl: 'https://images.pexels.com/photos/2531159/pexels-photo-2531159.jpeg',
    user: { id: 2, name: 'Fashion Forward', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', followers: 18200, following: 342 },
    saves: 987,
    width: 1200,
    height: 800,
    categories: ['Fashion', 'Street Style']
  },
  {
    id: 3,
    title: 'Mountain landscapes',
    description: 'Beautiful mountain views from hiking adventures.',
    imageUrl: 'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg',
    user: { id: 3, name: 'Outdoor Adventures', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg', followers: 9800, following: 156 },
    saves: 2345,
    width: 1000,
    height: 1500,
    categories: ['Travel', 'Outdoors']
  },
  {
    id: 4,
    title: 'Homemade pasta recipe',
    description: 'Simple and delicious homemade pasta recipe for beginners.',
    imageUrl: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
    user: { id: 4, name: 'Culinary Creations', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', followers: 15600, following: 78 },
    saves: 1876,
    width: 1200,
    height: 800,
    categories: ['Food', 'Recipes']
  },
  {
    id: 5,
    title: 'DIY plant holders',
    description: 'Creative and easy DIY plant holders using recycled materials.',
    imageUrl: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg',
    user: { id: 5, name: 'Crafty Corner', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg', followers: 7800, following: 210 },
    saves: 946,
    width: 800,
    height: 1200,
    categories: ['DIY & Crafts', 'Home Decor']
  },
  {
    id: 6,
    title: 'Abstract art painting techniques',
    description: 'Learn different techniques for creating beautiful abstract art.',
    imageUrl: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg',
    user: { id: 6, name: 'Art Explorer', avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg', followers: 12400, following: 98 },
    saves: 1543,
    width: 1200,
    height: 900,
    categories: ['Art', 'DIY & Crafts']
  },
  {
    id: 7,
    title: 'Workspace setup ideas',
    description: 'Productive and inspiring workspace setups for remote workers.',
    imageUrl: 'https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg',
    user: { id: 7, name: 'Workspace Inspiration', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', followers: 9200, following: 124 },
    saves: 2156,
    width: 1000,
    height: 1200,
    categories: ['Technology', 'Home Decor']
  },
  {
    id: 8,
    title: 'Home workout routine',
    description: '30-minute effective home workout routine with no equipment needed.',
    imageUrl: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg',
    user: { id: 8, name: 'Fitness First', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', followers: 18900, following: 156 },
    saves: 1879,
    width: 800,
    height: 1200,
    categories: ['Fitness', 'Health']
  },
  {
    id: 9,
    title: 'Cozy cabin retreat',
    description: 'A peaceful cabin in the woods for the perfect getaway.',
    imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg',
    user: { id: 3, name: 'Outdoor Adventures', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg', followers: 9800, following: 156 },
    saves: 1432,
    width: 1500,
    height: 1000,
    categories: ['Travel', 'Architecture']
  },
  {
    id: 10,
    title: 'Colorful summer fashion',
    description: 'Vibrant summer fashion trends for this season.',
    imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    user: { id: 2, name: 'Fashion Forward', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', followers: 18200, following: 342 },
    saves: 876,
    width: 800,
    height: 1200,
    categories: ['Fashion', 'Summer']
  },
  {
    id: 11,
    title: 'Minimalist bedroom design',
    description: 'Clean and calming minimalist bedroom ideas.',
    imageUrl: 'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg',
    user: { id: 1, name: 'Interior Design Ideas', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', followers: 25300, following: 124 },
    saves: 2234,
    width: 1200,
    height: 800,
    categories: ['Home Decor', 'Minimalism']
  },
  {
    id: 12,
    title: 'Garden landscaping ideas',
    description: 'Beautiful and easy-to-maintain garden landscape designs.',
    imageUrl: 'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg',
    user: { id: 5, name: 'Crafty Corner', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg', followers: 7800, following: 210 },
    saves: 1542,
    width: 1000,
    height: 1300,
    categories: ['DIY & Crafts', 'Gardening']
  },
];