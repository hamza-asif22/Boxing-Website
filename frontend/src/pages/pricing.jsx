import React from 'react';
import BookSingleCard from '../components/home/BookSingleCard';

const books = [
  { _id: '1', price: '0$', features: ['Workout Tracking', 'News Updates', 'Basic Training Tips','Limited Video Library'], description: 'Access basic features like workout tracking and news updates at no cost, perfect for casual boxing enthusiasts.', type: 'Free', rating: '3.5/5.0',priceplan:'You will get a limited access to features of the app and the website. Limited training data and access.' ,payement:[]},
  { _id: '2', price: '40.99$', features: ['Personalized Training Plans', 'Advanced Technique Videos','Live Webinars','Ad-Free Experience'], description: 'Unlock advanced features such as personalized training plans and exclusive content for a monthly subscription, tailored for dedicated boxing enthusiasts.', type: 'Standard', rating: '4.5/5.0',priceplan:'This plan provide you the best experience for your training. You will have access to almost all features. With easy payement methods you can pay easily buy membership.' ,payement:['Online Banking','PayPal','SadaPay']  },
  { _id: '3', price: '60.99$', features: ['VIP Live Streaming', 'One-on-One Coaching Sessions', 'Unlimited Video Downloads','Customizable Dashboard','Priority Support','Access to Pro Athlete Workouts'], description: 'Enjoy VIP access to live streaming events, one-on-one coaching sessions, and unlimited content downloads, ideal for serious athletes and professionals.', type: 'Premium', rating: '4.9/5.0',priceplan:'With Premium Membership plan you will get access to all features of the app and website. With easy payement methods you can pay easily buy membership.',payement:['Online Banking','PayPal','SadaPay'] },
];

const Pricing = () => {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-x-auto" style={{ backgroundImage: `url('/media/b3.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <h1 className="text-white text-3xl text-pretty font-bold mt-8 mb-4">Choose Your Desired Membership Plan</h1>
      <div className="flex justify-center items-center flex-wrap py-8">
        {books.map((item) => (
          <BookSingleCard key={item._id} book={item} type={item.type} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
