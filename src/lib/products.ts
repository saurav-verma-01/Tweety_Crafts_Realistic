export type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  images: string[];
  category: string;
  tags: string[];
  fileSize: string;
  pages: number;
  format: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Rainbow Coloring Book Pack",
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.8,
    reviews: 124,
    description: "A delightful collection of rainbow-themed coloring pages that will spark your child's creativity! This pack includes 25 unique designs featuring rainbows, clouds, unicorns, and magical landscapes.",
    features: [
      "25 high-quality coloring pages",
      "Instant PDF download",
      "Print-ready format",
      "Ages 3-10",
      "Black and white line art",
      "Commercial license included"
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    category: "coloring",
    tags: ["Rainbow", "Kids", "Creative", "Printable"],
    fileSize: "15.2 MB",
    pages: 25,
    format: "PDF",
    image: "/placeholder.svg",
    tag: "Bestseller"
  },
  {
    id: 2,
    title: "Ocean Adventure Activity Set",
    price: 8.99,
    originalPrice: 12.99,
    rating: 4.9,
    reviews: 89,
    description: "Dive into fun with ocean-themed activities for kids!",
    features: [
      "20 activity sheets",
      "Instant PDF download",
      "Ages 4-9",
      "Colorful illustrations"
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    category: "activity",
    tags: ["Ocean", "Adventure", "Kids"],
    fileSize: "10.5 MB",
    pages: 20,
    format: "PDF",
    image: "/placeholder.svg",
    tag: "New"
  },
  {
    id: 3,
    title: "Space Explorer Craft Kit",
    price: 15.99,
    originalPrice: 21.99,
    rating: 4.7,
    reviews: 156,
    description: "Explore the universe with this fun craft kit!",
    features: [
      "15 craft projects",
      "Materials included",
      "Ages 6-12"
    ],
    images: [
      "/placeholder.svg"
    ],
    category: "craft",
    tags: ["Space", "Craft", "Kids"],
    fileSize: "8.2 MB",
    pages: 15,
    format: "PDF",
    image: "/placeholder.svg",
    tag: "Popular"
  },
  {
    id: 4,
    title: "Dinosaur Discovery Bundle",
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 203,
    description: "Roar into learning with dinosaur-themed activities!",
    features: [
      "30 dino activities",
      "Stickers included",
      "Ages 5-10"
    ],
    images: [
      "/placeholder.svg"
    ],
    category: "coloring",
    tags: ["Dinosaur", "Learning", "Kids"],
    fileSize: "12.7 MB",
    pages: 30,
    format: "PDF",
    image: "/placeholder.svg",
    tag: "Bestseller"
  },
  {
    id: 5,
    title: "Princess Castle Stickers",
    price: 6.99,
    originalPrice: 9.99,
    rating: 4.6,
    reviews: 67,
    description: "Decorate with magical princess castle stickers!",
    features: [
      "50+ stickers",
      "Reusable",
      "Ages 3+"
    ],
    images: [
      "/placeholder.svg"
    ],
    category: "stickers",
    tags: ["Princess", "Castle", "Stickers"],
    fileSize: "2.1 MB",
    pages: 1,
    format: "Stickers",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Animal Friends Activity Pack",
    price: 10.99,
    originalPrice: 14.99,
    rating: 4.8,
    reviews: 91,
    description: "Meet new animal friends with this fun activity pack!",
    features: [
      "18 animal activities",
      "Coloring and puzzles",
      "Ages 4-8"
    ],
    images: [
      "/placeholder.svg"
    ],
    category: "activity",
    tags: ["Animal", "Friends", "Activity"],
    fileSize: "9.3 MB",
    pages: 18,
    format: "PDF",
    image: "/placeholder.svg",
    tag: "New"
  }
]; 