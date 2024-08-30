const data = [
  {
    slug: 'golf-and-tennis',
    title: 'What I Think About When I Play Golf and Tennis',
    snippet: 'Consistency is key.',
    image: '/images/blog/golf-cover.jpg',
    date: '2024-07-02',
    categories: ['Sports'],
  },
  {
    slug: 'confidence',
    title: 'From Self-Doubt to Self-Belief',
    snippet: 'My journey.',
    image: '/images/blog/confidence.jpg',
    date: '2024-08-29',
    categories: ['Personal'],
  },
];

const categories = [...new Set(data.flatMap((post) => post.categories))].sort();

export { data, categories };
