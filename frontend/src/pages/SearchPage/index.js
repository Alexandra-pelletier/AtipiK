import React from 'react';

import ResultList from 'src/components/ResultList';

const elements = [
  {
    id: 1,
    title: 'Tendre son i-mac entre 2 arbres',
    description: 'Petit coin de forêt bucolique avec i-macs suspendus. Profitez d\' un peut de tranquilité, seul ou en famille.',
    pictures: [
      'https://picsum.photos/200',
      'https://picsum.photos/201',
    ],
    country: 'Brésil',
    city: 'Marseille',
  },
  {
    id: 2,
    title: 'Apple sort le nouvel i-gloo',
    description: 'Si vous n\'êtes pas manchots, cet i-gloo est fait pour vous. Vous allez peut-être peler mais vous aller triper.',
    pictures: [
      'https://picsum.photos/202',
      'https://picsum.photos/203',
    ],
    country: 'glaglaska',
    city: 'Northtown',
  },
];

const SearchPage = () => (
  <ResultList elements={elements} />
);

export default SearchPage;
