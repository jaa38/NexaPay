// components/Transactions/transactions.data.js

export const fetchTransactions = async () => {
  // 🔁 simulate API delay
  await new Promise((res) => setTimeout(res, 1000));

  return [
    {
      id: '1',
      title: 'Payment from John Doe',
      time: '1 hour ago',
      amount: 100,
      type: 'success',
    },
    {
      id: '2',
      title: 'Bank Withdrawal',
      time: '2 hours ago',
      amount: -100,
      type: 'withdrawal',
    },
    {
      id: '3',
      title: 'Refund from John Doe',
      time: '3 hours ago',
      amount: -100,
      type: 'refund',
    },
    {
      id: '4',
      title: 'Bank Withdrawal',
      time: '2 hours ago',
      amount: '-$100.00',
      type: 'error',
    },
  ];
};
