// src/app/store/page.tsx
import React from 'react';
import Navbar from '@/components/NavBar';
import CustFooter from '@/components/Footer';
import CheckoutButton from '@/components/CheckoutButton'; // Your custom checkout component

const storeInventory = [
  { id: 'price_1U5BNi7wSjiyxmK5gT9E8mLd', name: 'Redcat Gen8 Scout II AXE Edition 1/10 Scale (Brushless)', price: '$499.00', image: 'https://images.amainhobbies.com/cdn-cgi/image/f=auto,width=475/images/large/rer/rer12113.jpg'},
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 py-12 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#a43a3a] mb-2">Store</h1>
          <p className="text-gray-600">Pick a plan to support us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {storeInventory.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 flex flex-col justify-between">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                <div className="text-3xl font-extrabold text-[#a43a3a]">{product.price}</div>
                <img src={product.image} alt={product.name} />
              </div>
              <CheckoutButton priceId={product.id} />
            </div>
          ))}
        </div>
      </div>

      <CustFooter />
    </div>
  );
}
