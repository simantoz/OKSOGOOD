import bentoImg from './assets/images/bento.png';
import platterImg from './assets/images/platter.png';
import mojitoImg from './assets/images/mojito.png';

export const CATEGORIES = ['Semua', 'Nasi Bento', 'Mix Platter', 'Mojito'];
export const ADMIN_PHONE = "62895412987937";

export const PRODUCTS = [
  {
    id: 1,
    name: 'Nasi Bento Chicken Katsu',
    category: 'Nasi Bento',
    price: 15000,
    image: bentoImg,
    description: 'Nasi hangat dengan fillet ayam goreng tepung yang renyah (Chicken Katsu), dilengkapi salad segar dan saus spesial.',
    variants: ['Ori', 'Pedas'],
    po_tag: 'PO Batch 1 - Pengiriman Jumat'
  },
  {
    id: 2,
    name: 'Nasi Bento Beef Teriyaki',
    category: 'Nasi Bento',
    price: 20000,
    image: bentoImg,
    description: 'Irisan daging sapi premium dengan saus teriyaki manis gurih, disajikan dengan nasi putih pulen.',
    variants: ['Standard'],
    po_tag: 'PO Batch 1 - Pengiriman Jumat'
  },
  {
    id: 3,
    name: 'Mix Platter Snack',
    category: 'Mix Platter',
    price: 12000,
    image: platterImg,
    description: 'Kombinasi Kentang Goreng, Sosis, dan Onion Rings. Cocok untuk ngemil bareng teman.',
    variants: ['Standard'],
    po_tag: 'Tersedia Setiap Hari'
  },
  {
    id: 4,
    name: 'Mix Platter Jumbo',
    category: 'Mix Platter',
    price: 15000,
    image: platterImg,
    description: 'Versi porsi besar dari Mix Platter, lebih banyak sosis dan tambahan nugget ayam.',
    variants: ['Standard'],
    po_tag: 'PO Batch 2 - Pengiriman Sabtu'
  },
  {
    id: 5,
    name: 'Mojito Lime Mint',
    category: 'Mojito',
    price: 8000,
    image: mojitoImg,
    description: 'Minuman segar dengan perasan jeruk nipis, daun mint asli, dan soda yang melegakan dahaga.',
    variants: ['Less Sugar', 'Normal'],
    po_tag: 'Tersedia Setiap Hari'
  },
  {
    id: 6,
    name: 'Mojito Strawberry',
    category: 'Mojito',
    price: 8000,
    image: mojitoImg,
    description: 'Kesegaran buah strawberry asli dengan sentuhan mint dan sirup rahasia OkSoGood.',
    variants: ['Less Sugar', 'Normal'],
    po_tag: 'Tersedia Setiap Hari'
  }
];
