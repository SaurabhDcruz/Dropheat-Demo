// Product card images
import featImg1 from '../assets/featImg1.png';
import featImg2 from '../assets/featImg2.png';
import featImg3 from '../assets/featImg3.png';
import featImg4 from '../assets/featImg4.png';
import featImg5 from '../assets/featImg5.png';

// Battle item images
import LB1 from '../assets/LB1.png';
import LB2 from '../assets/LB2.png';
import LB3 from '../assets/LB3.png';
import LB4 from '../assets/LB4.png';
import LB5 from '../assets/LB5.png';
import LB6 from '../assets/LB6.png';
import LB7 from '../assets/LB7.png';
import LB8 from '../assets/LB8.png';
import LB9 from '../assets/LB9.png';
import LB10 from '../assets/LB10.png';
import LB11 from '../assets/LB11.png';
import LB12 from '../assets/LB12.png';
import LB13 from '../assets/LB13.png';
import LB14 from '../assets/LB14.png';
import LB15 from '../assets/LB15.png';
import LB16 from '../assets/LB16.png';
import LB17 from '../assets/LB17.png';
import LB18 from '../assets/LB18.png';
import LB19 from '../assets/LB19.png';
import LB20 from '../assets/LB20.png';
import LB21 from '../assets/LB21.png';
import LB22 from '../assets/LB22.png';
import LB23 from '../assets/LB23.png';

// Live drop icons
import image57 from '../assets/image57.png';
import image58 from '../assets/image58.png';
import image59 from '../assets/image59.png';
import image60 from '../assets/image60.png';
import image61 from '../assets/image61.png';
import image62 from '../assets/image62.png';

export interface Product {
  id: number;
  brand: string;
  category: string;
  price: number;
  image: string;
  badges: string[];
}

export interface Battle {
  id: number;
  price: number;
  players: string[];
  items: string[];
}

export interface Delivery {
  id: number;
  user: string;
  handle: string;
  time: string;
  avatar: string;
  review: string;
  quote: string;
  items: string[];
}

export interface ChatMessage {
  id: number;
  user: string;
  message: string;
  time: string;
  avatar: string;
}

export const productCards: Product[] = [
  { id: 1, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: featImg1, badges: ['New', 'Hot', 'Popular'] },
  { id: 2, brand: 'Card Trader', category: 'Streetwear, Watches', price: 50.00, image: featImg2, badges: ['Popular'] },
  { id: 3, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: featImg3, badges: [] },
  { id: 4, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: featImg4, badges: ['Hot'] },
  { id: 5, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: featImg5, badges: ['New'] },
  { id: 6, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: featImg1, badges: ['New', 'Hot', 'Popular'] },
  { id: 7, brand: 'Card Trader', category: 'Streetwear, Watches', price: 50.00, image: featImg2, badges: ['Popular'] },
  { id: 8, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: featImg3, badges: ['New'] },
  { id: 9, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: featImg4, badges: ['Hot'] },
  { id: 10, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: featImg5, badges: ['New'] },
];

export const battles: Battle[] = [
  { 
    id: 1, 
    price: 390.00, 
    players: [
      'https://i.pravatar.cc/150?u=1',
      'https://i.pravatar.cc/150?u=2',
      'https://i.pravatar.cc/150?u=3',
      'https://i.pravatar.cc/150?u=4'
    ], 
    items: [LB1, LB2, LB3, LB4, LB5, LB6, LB7, LB8]
  },

  { 
    id: 2, 
    price: 390.00, 
    players: [
      'https://i.pravatar.cc/150?u=5',
      'https://i.pravatar.cc/150?u=6',
      'https://i.pravatar.cc/150?u=7',
      'https://i.pravatar.cc/150?u=8'
    ], 
    items: [LB9, LB10, LB11, LB12, LB13, LB14, LB15, LB16]
  },

  { 
    id: 3, 
    price: 390.00, 
    players: [
      'https://i.pravatar.cc/150?u=9',
      'https://i.pravatar.cc/150?u=10',
      'https://i.pravatar.cc/150?u=11',
      'https://i.pravatar.cc/150?u=12'
    ], 
    items: [LB17, LB18, LB19, LB20, LB21, LB22, LB23, LB1]
  },

  { 
    id: 4, 
    price: 390.00, 
    players: [
      'https://i.pravatar.cc/150?u=13',
      'https://i.pravatar.cc/150?u=14',
      'https://i.pravatar.cc/150?u=15',
      'https://i.pravatar.cc/150?u=16'
    ], 
    items: [LB2, LB3, LB4, LB5, LB6, LB7, LB8, LB9]
  },

  { 
    id: 5, 
    price: 390.00, 
    players: [
      'https://i.pravatar.cc/150?u=17',
      'https://i.pravatar.cc/150?u=18',
      'https://i.pravatar.cc/150?u=19',
      'https://i.pravatar.cc/150?u=20'
    ], 
    items: [LB10, LB11, LB12, LB13, LB14, LB15, LB16, LB17]
  },

  { 
    id: 6, 
    price: 390.00, 
    players: [
      'https://i.pravatar.cc/150?u=21',
      'https://i.pravatar.cc/150?u=22',
      'https://i.pravatar.cc/150?u=23',
      'https://i.pravatar.cc/150?u=24'
    ], 
    items: [LB18, LB19, LB20, LB21, LB22, LB23, LB1, LB2]
  },
];

export const deliveries: Delivery[] = [
  { 
    id: 1, 
    user: 'Andr Grown', 
    handle: '@users9384', 
    time: '3 hours ago', 
    avatar: 'https://i.pravatar.cc/150?u=andr1', 
    review: 'Best serivce I ever used', 
    quote: 'It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment', 
    items: ['https://picsum.photos/seed/d1/200/200', 'https://picsum.photos/seed/d2/200/200', 'https://picsum.photos/seed/d3/200/200'] 
  },
  { 
    id: 2, 
    user: 'Andr Grown', 
    handle: '@users9384', 
    time: '3 hours ago', 
    avatar: 'https://i.pravatar.cc/150?u=andr2', 
    review: 'Best serivce I ever used', 
    quote: 'It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment', 
    items: ['https://picsum.photos/seed/d4/200/200', 'https://picsum.photos/seed/d5/200/200', 'https://picsum.photos/seed/d6/200/200'] 
  },
  { 
    id: 3, 
    user: 'Andr Grown', 
    handle: '@users9384', 
    time: '3 hours ago', 
    avatar: 'https://i.pravatar.cc/150?u=andr3', 
    review: 'Best serivce I ever used', 
    quote: 'It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment', 
    items: ['https://picsum.photos/seed/d7/200/200', 'https://picsum.photos/seed/d8/200/200', 'https://picsum.photos/seed/d9/200/200'] 
  },
  { 
    id: 4, 
    user: 'Andr Grown', 
    handle: '@users9384', 
    time: '3 hours ago', 
    avatar: 'https://i.pravatar.cc/150?u=andr4', 
    review: 'Best serivce I ever used', 
    quote: 'It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment', 
    items: ['https://picsum.photos/seed/d10/200/200', 'https://picsum.photos/seed/d11/200/200', 'https://picsum.photos/seed/d12/200/200'] 
  },
];

export interface LiveDrop {
  id: number;
  user: string;
  price: number;
  icon: string;
  color: string;
}

export const liveDrops: LiveDrop[] = [
  { id: 1, user: 'User123', price: 390.00, icon: image57, color: '#107C10' },
  { id: 2, user: 'ProGamer', price: 50.00, icon: image58, color: '#FF4500' },
  { id: 3, user: 'LuckyOne', price: 120.00, icon: image59, color: '#E91E63' },
  { id: 4, user: 'Winner', price: 890.00, icon: image60, color: '#94a3b8' },
  { id: 5, user: 'DropKing', price: 45.00, icon: image61, color: '#8B5CF6' },
  { id: 6, user: 'Ace', price: 210.00, icon: image62, color: '#1A1B1E' },
  { id: 7, user: 'Saurabh', price: 150.00, icon: image57, color: '#FFD700' },
  { id: 8, user: 'Tiger', price: 75.00, icon: image58, color: '#00FF00' },
  { id: 9, user: 'Gamer99', price: 15.00, icon: image59, color: '#3B82F6' },
  { id: 10, user: 'Richie', price: 1200.00, icon: image60, color: '#FBBF24' },
  { id: 11, user: 'HypeBeast', price: 450.00, icon: image61, color: '#EF4444' },
  { id: 12, user: 'Collector', price: 300.00, icon: image62, color: '#10B981' },
];

export const chatMessages: ChatMessage[] = [
  { id: 1, user: 'coolmate', message: 'Hello all friends', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c1' },
  { id: 2, user: 'coolmate', message: 'its all time waiting and show now low 😔', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c2' },
  { id: 3, user: 'coolmate', message: 'Please provide camera access through your browser or device settings. Click "Allow" when prompted, or adjust settings accordingly.', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c3' },
  { id: 4, user: 'HATEfriends', message: 'Good luck everybody 🍀', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=h1' },
  { id: 5, user: 'coolmate', message: 'Hello all friends', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c4' },
  { id: 6, user: 'coolmate', message: 'how you been mate? It’s been a while', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c5' },
  { id: 7, user: 'coolmate', message: 'Ooooooffff', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c6' },
  { id: 8, user: 'coolmate', message: 'errr how did i move to sports', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c7' },
  { id: 9, user: 'coolmate', message: 'Hello all friends', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c8' },
  { id: 10, user: 'coolmate', message: 'they moved the start times for fd back 30 min', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c9' },
  { id: 11, user: 'coolmate', message: 'thought the mod had gone mad asking not to share casino bets lol', time: '10:13', avatar: 'https://i.pravatar.cc/150?u=c10' },
];
