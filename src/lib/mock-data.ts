export interface Frame {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  shape: 'Round' | 'Square' | 'Aviator' | 'Cat-Eye' | 'Rectangle';
  material: 'Acetate' | 'Titanium' | 'Metal';
  gender: 'Men' | 'Women' | 'Unisex';
  size: string;
  colors: { name: string; hex: string }[];
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const MOCK_FRAMES: Frame[] = [
  {
    id: '1',
    slug: 'atlas-classic-black',
    name: 'Atlas Round',
    brand: 'Lucent Eyewear',
    price: 145,
    shape: 'Round',
    material: 'Acetate',
    gender: 'Unisex',
    size: '49 - 20 - 145',
    colors: [
      { name: 'Onyx Black', hex: '#111111' },
      { name: 'Amber Tortoise', hex: '#8B4513' },
    ],
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    isNew: true,
  },
  {
    id: '2',
    slug: 'vanguard-titanium-gold',
    name: 'Vanguard Square',
    brand: 'Lucent Eyewear',
    price: 195,
    shape: 'Square',
    material: 'Titanium',
    gender: 'Men',
    size: '52 - 18 - 140',
    colors: [
      { name: 'Brushed Gold', hex: '#D4AF37' },
      { name: 'Matte Silver', hex: '#C0C0C0' },
    ],
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80',
    isBestSeller: true,
  },
  {
    id: '3',
    slug: 'celeste-cat-eye',
    name: 'Celeste Cat-Eye',
    brand: 'Lucent Eyewear',
    price: 165,
    shape: 'Cat-Eye',
    material: 'Acetate',
    gender: 'Women',
    size: '51 - 17 - 142',
    colors: [
      { name: 'Rosewood', hex: '#800020' },
    ],
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80',
    isNew: true,
  },
];