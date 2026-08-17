'use client';

import React, { useTransition } from 'react';
import createCheckoutSession from '@/app/actions/stripe';

interface CheckoutButtonProps {
  priceId: string;
}

const CheckoutButton = ({ priceId }: CheckoutButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleCheckout = () => {
    startTransition(async () => {
      try {
        await createCheckoutSession(priceId);
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isPending}
      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-5 rounded-lg transition disabled:opacity-50"
    >
      {isPending ? 'Connecting to Stripe...' : 'Buy Now'}
    </button>
  );
}
export default CheckoutButton;