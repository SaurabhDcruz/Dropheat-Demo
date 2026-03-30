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
  { id: 1, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: '../src/assets/featImg1.png', badges: ['New', 'Hot', 'Popular'] },
  { id: 2, brand: 'Card Trader', category: 'Streetwear, Watches', price: 50.00, image: '../src/assets/featImg2.png', badges: ['Popular'] },
  { id: 3, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: '../src/assets/featImg3.png', badges: [] },
  { id: 4, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: '../src/assets/featImg4.png', badges: ['Hot'] },
  { id: 5, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: '../src/assets/featImg5.png', badges: ['New'] },
  { id: 6, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: '../src/assets/featImg1.png', badges: ['New', 'Hot', 'Popular'] },
  { id: 7, brand: 'Card Trader', category: 'Streetwear, Watches', price: 50.00, image: '../src/assets/featImg2.png', badges: ['Popular'] },
  { id: 8, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: '../src/assets/featImg3.png', badges: ['New'] },
  { id: 9, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: '../src/assets/featImg4.png', badges: ['Hot'] },
  { id: 10, brand: 'Crazy Designers', category: 'Streetwear, Watches', price: 390.00, image: '../src/assets/featImg5.png', badges: ['New'] },
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
    items: [
      '../src/assets/LB1.png','../src/assets/LB2.png','../src/assets/LB3.png','../src/assets/LB4.png',
      '../src/assets/LB5.png','../src/assets/LB6.png','../src/assets/LB7.png','../src/assets/LB8.png'
    ] 
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
    items: [
      '../src/assets/LB9.png','../src/assets/LB10.png','../src/assets/LB11.png','../src/assets/LB12.png',
      '../src/assets/LB13.png','../src/assets/LB14.png','../src/assets/LB15.png','../src/assets/LB16.png'
    ] 
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
    items: [
      '../src/assets/LB17.png','../src/assets/LB18.png','../src/assets/LB19.png','../src/assets/LB20.png',
      '../src/assets/LB21.png','../src/assets/LB22.png','../src/assets/LB23.png','../src/assets/LB1.png'
    ] 
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
    items: [
      '../src/assets/LB2.png','../src/assets/LB3.png','../src/assets/LB4.png','../src/assets/LB5.png',
      '../src/assets/LB6.png','../src/assets/LB7.png','../src/assets/LB8.png','../src/assets/LB9.png'
    ] 
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
    items: [
      '../src/assets/LB10.png','../src/assets/LB11.png','../src/assets/LB12.png','../src/assets/LB13.png',
      '../src/assets/LB14.png','../src/assets/LB15.png','../src/assets/LB16.png','../src/assets/LB17.png'
    ] 
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
    items: [
      '../src/assets/LB18.png','../src/assets/LB19.png','../src/assets/LB20.png','../src/assets/LB21.png',
      '../src/assets/LB22.png','../src/assets/LB23.png','../src/assets/LB1.png','../src/assets/LB2.png'
    ] 
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
  { id: 1, user: 'User123', price: 390.00, icon: './src/assets/image57.png', color: '#107C10' },
  { id: 2, user: 'ProGamer', price: 50.00, icon: './src/assets/image58.png', color: '#FF4500' },
  { id: 3, user: 'LuckyOne', price: 120.00, icon: './src/assets/image59.png', color: '#E91E63' },
  { id: 4, user: 'Winner', price: 890.00, icon: './src/assets/image60.png', color: '#94a3b8' },
  { id: 5, user: 'DropKing', price: 45.00, icon: './src/assets/image61.png', color: '#8B5CF6' },
  { id: 6, user: 'Ace', price: 210.00, icon: './src/assets/image62.png', color: '#1A1B1E' },
  { id: 7, user: 'Saurabh', price: 150.00, icon: './src/assets/image57.png', color: '#FFD700' },
  { id: 8, user: 'Tiger', price: 75.00, icon: './src/assets/image58.png', color: '#00FF00' },
  { id: 9, user: 'Gamer99', price: 15.00, icon: './src/assets/image59.png', color: '#3B82F6' },
  { id: 10, user: 'Richie', price: 1200.00, icon: './src/assets/image60.png', color: '#FBBF24' },
  { id: 11, user: 'HypeBeast', price: 450.00, icon: './src/assets/image61.png', color: '#EF4444' },
  { id: 12, user: 'Collector', price: 300.00, icon: './src/assets/image62.png', color: '#10B981' },
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
