import React from 'react';
import BookSingleCard from '../components/home/BookSingleCard';

const books = [
  { _id: '1',price:'0$', description: 'Free-Forever features for individual users', type: 'Free' },
  { _id: '2',price:'40.99$', description: 'Enhance features with best sessions for individual', type: 'Standard' },
  { _id: '3',price:'60.99$', description: 'Access premium content with exclusive benefits', type: 'Premium' },
];

const Pricing = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-row justify-start items-center overflow-x-auto" style={{ backgroundImage: `url('/media/b3.jpg')` }}>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} type={item.type} />
      ))}
    </div>
  );
};

export default Pricing;
