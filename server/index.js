const express = require('express');
const path = require('path');

const app = express();
const indexPath = path.join(__dirname, './index.html');
const publicPath = express.static(path.join(__dirname, '../public'));
const port = (process.env.PORT || 4000);

app.use('/public', publicPath);

if (process.env.NODE_ENV !==  'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.config.dev.js');
  const compiler = webpack(webpackConfig);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
}

app.get('*', (req, res) => { res.sendFile(indexPath) });

app.listen(port, () => console.log(`Running on localhost:${port}`));
