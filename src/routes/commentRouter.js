const express = require('express');

const commentRouter = express.Router();

const comments = [
  {
    title: 'Yooh manigga what is good',
    author: 'Bennettt'
  },
  {
    title: 'Never been better',
    author: 'For Sure'
  }
];

commentRouter.route('/')
  .get((req, res) => {
    res.render(
      'comments', {
        nav: [{
          link: '/Comments',
          title: 'Comments'
        },
        {
          link: '/authors',
          title: 'Authors'
        }
        ],
        title: 'Capstone',
        comments
      }
    );
  });

commentRouter.route('/comment')
  .get((req, res) => {
    res.send('Hello Single Comment');
  });

module.exports = commentRouter;
