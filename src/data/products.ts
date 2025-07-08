type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description:
      "Premium wireless headphones with noise-cancellation technology and 30-hour battery life.",
    rating: 4.5,
    reviews: 234,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description:
      "Advanced fitness tracking with heart rate monitoring, GPS, and sleep analysis.",
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    id: "3",
    name: "Minimalist Leather Wallet",
    price: 45.99,
    image:
      "https://images.pexels.com/photos/2905667/pexels-photo-2905667.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Accessories",
    description:
      "Handcrafted genuine leather wallet with RFID protection and slim design.",
    rating: 4.3,
    reviews: 89,
    inStock: true,
  },
  {
    id: "4",
    name: "Portable Coffee Maker",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Kitchen",
    description:
      "Compact espresso maker for rich, authentic coffee anywhere you go.",
    rating: 4.6,
    reviews: 203,
    inStock: true,
  },
  {
    id: "5",
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Clothing",
    description:
      "Sustainably made from 100% organic cotton with a comfortable, relaxed fit.",
    rating: 4.2,
    reviews: 167,
    inStock: true,
  },
  {
    id: "6",
    name: "Wireless Phone Charger",
    price: 34.99,
    image:
      "https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
    rating: 4.4,
    reviews: 312,
    inStock: false,
  },
  {
    id: "7",
    name: "Ergonomic Office Chair",
    price: 249.99,
    image:
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Furniture",
    description:
      "Professional office chair with lumbar support and breathable mesh design.",
    rating: 4.7,
    reviews: 98,
    inStock: true,
  },
  {
    id: "8",
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    image:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Accessories",
    description:
      "Double-wall insulated bottle keeps drinks hot for 12 hours or cold for 24 hours.",
    rating: 4.5,
    reviews: 445,
    inStock: true,
  },
  {
    id: "9",
    name: "Premium Gaming Mouse",
    price: 69.99,
    image:
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description:
      "High-precision gaming mouse with customizable RGB lighting and 12,000 DPI.",
    rating: 4.6,
    reviews: 278,
    inStock: true,
  },
  {
    id: "10",
    name: "Scented Candle Set",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Home",
    description:
      "Set of 3 premium soy candles with relaxing lavender, vanilla, and eucalyptus scents.",
    rating: 4.3,
    reviews: 134,
    inStock: true,
  },
];
