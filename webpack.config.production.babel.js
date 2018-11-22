import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
// import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';

import baseConfig from './webpack.config.base';
import { config } from './gulp/constants/config';

export default merge.smart(baseConfig, {
  entry: {
    index: [
      `./${config.app}/${config.script}/index.js`
    ]
  },
  output: {
    path: path.join(__dirname, config.dist, config.assets, config.js)
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          compress: {
            drop_console: true
          },
          warnings: false,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  },
  // optimization,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new VueLoaderPlugin(),
    new webpack.ProgressPlugin((percentage, msg) => {
      process.stdout.write('progress ' + Math.floor(percentage * 100) + '% ' + msg + '\r');
    })
  ]
});