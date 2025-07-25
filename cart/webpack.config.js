const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
   mode: "development",
   entry: "./src/index.js",
   output: {
      publicPath: "http://localhost:3002/",
   },
   devServer: {
    port: 3002,
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
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-react"],
               },
            },
         },
      ],
   },
   plugins: [
      new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/Cart',
        './eventBus': './src/eventBus.js',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
      new HtmlWebpackPlugin({
         template: "./public/index.html",
      }),
   ],
};
