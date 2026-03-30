import React from 'react';
import { ProductCard } from '../ui/ProductCard';
import { SortFilterBar } from '../ui/SortFilterBar';
import { Product } from '../../data/mockData';

interface FeaturedBoxesProps {
  products: Product[];
}

export const FeaturedBoxes: React.FC<FeaturedBoxesProps> = ({ products }) => {
  return (
    <section className="space-y-8">
      <SortFilterBar />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
