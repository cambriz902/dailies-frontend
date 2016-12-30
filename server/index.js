const express = require('express');
const path = require('path');

const app = express();
const indexPath = path.join(__dirname, './index.html');
const publicPath = express.static(path.join(__dirname, '../public'))

app.use('/public', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) })
const port = (process.env.PORT || 4000)

if (process.env.NODE_ENV !==  'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.config.dev');
  const compiler = webpack(webpackConfig)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
}

app.listen(port, () => console.log(`Running on localhost:${port}`));
