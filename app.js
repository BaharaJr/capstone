const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const commentRouter = express('./src/routes/commentRouter');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/comments', commentRouter);
app.get('/', (req, res) => {
  res.render(
    'index', {
      nav: [{
        link: '/Comments',
        title: 'Comments'
      },
      {
        link: '/authors',
        title: 'Authors'
      }
      ],
      title: 'Capstone'
    }
  );
});

app.listen(process.env.PORT || 3000, () => {
  debug('Listening to port 3000');
});
