const express = require('express');
const router = express.Router();

const links = [
  {
    description: 'The very library we are working with now',
    url: 'https://github.com/facebook/react',
    topicName: 'libraries',
    id: 'fake1',
    voteCount: 2,
  },
  {
    description: 'Some old videos',
    url: 'http://tagtree.io',
    topicName: 'libraries',
    id: 'fake2',
    voteCount: 5,
  },
  {
    description: 'An app to manage your finances',
    url: 'https://22seven.com',
    topicName: 'apps',
    id: 'fake3',
    voteCount: 4,
  },
  {
    description: 'Go find some news yourselft!',
    url: 'https://google.com',
    topicName: 'news',
    id: 'fake4',
    voteCount: 3,
  },
];

router.get('/topics', (req, res) => {
  const data = [
    {
      name: 'libraries',
      description: 'links to useful open source libraries',
    },
    {
      name: 'apps',
      description: 'links to new and exciting apps',
    },
    {
      name: 'news',
      description: 'links to programming related news articles',
    },
  ];
  res.json(data);
});

router.get('/topics/:topicName/links', (req, res) => {
  const { topicName } = req.params;
  const data = links.filter(l => l.topicName === topicName);
  res.json(data);
});

router.post('/topics/:topicName/links', (req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk.toString();
  });
  req.on('end', () => {
    let link = JSON.parse(data);
    link = Object.assign(link, { id: Date.now().toString(), voteCount: 0 });
    links.push(Object.assign({}, link));
    res.json(link);
  });
});

module.exports = router;
