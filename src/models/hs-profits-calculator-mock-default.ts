
export const data = {
  fromDate: '2018-01-01',
  currency: {'name': 'euro', 'symbol': '€', 'code': 'EUR'},

  totalCostsEoy: {
    category: 'totalCostsEoy',
    amount: 22000
  },
  totalCostsEoyByCategory:
  [
    {
      category: 'fare',
      amount: 10000
    },
    {
      category: 'accomodation',
      amount: 12000
    }
  ],

  costsEoyByDate:
  [
    {
      'date': '2018-01-01',
      'category': 'fare',
      'amount': 80
    },
    {
      'date': '2018-01-01',
      'category': 'accomodation',
      'amount': 100
    }
  ],

  totalProfitsEoy: {
    'category': 'totalProfitsEoy',
    'amount': 100000
  },

  totalProfitsEoyByCategory:
  [
    {
      'category': 'outstaffing',
      'amount': 100000
    }
  ],

  profitsEoyByDate:
  [
    {
      'date': '2018-01-01',
      'category': 'outstaffing',
      'amount': 800
    },
    {
      'date': '2018-01-01',
      'category': 'outstaffing',
      'amount': 800
    }
  ]
};
