import { fetchOrders } from '../api/orders';

export const getOrders = async () => {
  try {
    const data = await fetchOrders();

    // 🔥 You can transform data here later
    return data;
  } catch (error) {
    throw new Error('Failed to load orders');
  }
};