import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../header';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { products } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed' });
  }

  if (!products) {
    return res.status(400).json({ error: 'price not found' });
  }
  const successUrl = `${process.env.NETX_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NETX_URL}`;

  const lineItems = products.map((product: IProduct) => ({
    price: product.defaultPriceId,
    quantity: product.quantity,
  }));

  const checkotSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'subscription',
    line_items: lineItems,
  });

  return res.status(201).json({
    checkoutUrl: checkotSession.url,
  });
}
