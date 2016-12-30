import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();
const indexPath = path.join(__dirname, './index.html');
const publicPath = express.static(path.join(__dirname, '../public'))

app.use('/public', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) })
const port = (process.env.PORT || 4000)

if (process.env.NODE_ENV !==  'production') {
  const compiler = webpack(webpackConfig)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
}

app.listen(port, () => console.log(`Running on localhost:${port}`));
