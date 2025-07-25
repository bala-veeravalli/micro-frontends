
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3001/',
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': process.env.CONTAINER_APP_URL || 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      remotes: {
        cart: 'cart@http://localhost:3002/remoteEntry.js',
      },
      exposes: {
        './Products': './src/Products',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
