export const fetchTransactions = async () => {
  // simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: '1',
      title: 'Payment from Joe Doe',
      amount: 25000,
      type: 'received',
      status: 'success',
      date: 'Today, 2:30 PM',
    },
    {
      id: '2',
      title: 'Order #1234 Premium Headphones',
      amount: 25000,
      type: 'received',
      status: 'success',
      date: 'Today, 2:30 PM',
    },
    {
      id: '3',
      title: 'Withdrawal to bank',
      amount: -50000,
      type: 'sent',
      status: 'success',
      date: 'Yesterday, 2:30 PM',
    },
    {
      id: '4',
      title: 'Refund to Customer',
      amount: -25000,
      type: 'sent',
      status: 'success',
      date: 'Yesterday, 2:30 PM',
    },
    {
      id: '5',
      title: 'Product to Customer',
      amount: 25000,
      type: 'received',
      status: 'failed',
      date: 'Yesterday, 2:30 PM',
    },
  ];
};