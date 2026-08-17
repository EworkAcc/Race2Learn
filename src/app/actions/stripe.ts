'use server';

import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';

const createCheckoutSession = async (priceId: string) => {
  const origin = process.env.site_URL; 

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'hosted_page',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId, 
          quantity: 1,
        },
      ],
      mode: 'payment', 
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
    });

    if (session.url) {
      redirect(session.url);
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
      throw error;
    }
    console.error('Stripe Checkout Error:', error);
    throw new Error('Failed to create live checkout session.');
  }
}
export default createCheckoutSession;