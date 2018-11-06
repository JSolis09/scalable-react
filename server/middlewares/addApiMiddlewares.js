const express = require('express');
const router = express.Router();

router.get('/topics', (req, res) => {
    const data = [
        {
          name: 'libraries',
          description: 'links to useful open source libraries'
        },
        {
          name: 'apps',
          description: 'links to new and exciting apps'
        },
        {
          name: 'news',
          description: 'links to programming related news articles'
        }
      ];
    res.json(data);
});

router.get('/topics/:name/links', (req, res) => {
  const { name } = req.params;
  let data;
  switch(name) {
    case 'libraries':
      data = [
        {
          description: 'The very library we are working with now',
          url: 'https://github.com/facebook/react',
          topicName: 'links',
          id: 'fake1'
        },
        {
          description: 'Some old videos',
          url: 'http://tagtree.io',
          topicName: 'links',
          id: 'fake2'
        }
      ];
      break;
    case 'apps':
      data = [
        {
          description: 'An app to manage your finances',
          url: 'https://22seven.com',
          topicName: 'apps',
          id: 'fake3'
        }
      ];
      break;
    case 'news':
      data = [
        {
          description: 'Go find some news yourselft!',
          url: 'https://google.com',
          topicName: 'news',
          id: 'fake4'
        }
      ];
      break;
    default:
      data = [];
  }
  res.json(data);
});

module.exports = router;