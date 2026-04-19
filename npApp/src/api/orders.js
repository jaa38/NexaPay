export const fetchOrders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          orderId: 'ORD-001',
          title: 'Kratos Weapon Purchase',
          amount: 45000,
          status: 'completed',
          items: 2,
          date: 'April 3, 2026',
        },
        {
          id: '2',
          orderId: 'ORD-002',
          title: 'Captain America Shield Repair',
          amount: 85000,
          status: 'processing',
          items: 1,
          date: 'April 4, 2026',
        },
        {
          id: '3',
          orderId: 'ORD-003',
          title: 'Spartan Armor Upgrade',
          amount: 23500,
          status: 'pending',
          items: 3,
          date: 'April 5, 2026',
        },
      ]);
    }, 1500);
  });
};