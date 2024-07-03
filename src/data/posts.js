const data = [
  {
    slug: 'golf-and-tennis',
    title: 'What I Think About When I Play Golf and Tennis',
    snippet: 'Consistency is key.',
    image: '/images/blog/golf-cover.jpg',
    date: '2024-07-02',
    categories: ['Sports'],
  },
];

const categories = [...new Set(data.flatMap((post) => post.categories))].sort();

export { data, categories };
