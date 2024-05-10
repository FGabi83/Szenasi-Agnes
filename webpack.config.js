const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");



const javascript = {
  test: /\.(js)$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

console.log("PostCSS objektum létrehozása...");

const postcss = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        require('autoprefixer')(),
      ],
    },
  },
};

console.log("PostCSS objektum létrehozva:", postcss);

console.log("Stílusok konfigurálása...");
const styles = {
  test: /\.(css)$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        url: false,
      },
    },
    postcss,
  ], 
};
console.log("Stílusok konfigurálva:", styles);


const pug = {
  test: /\.pug$/,
  use: [
    {
      loader: "pug-loader",
      options: {
        pretty: true,
      },
    },
  ],
};

const config = {
  mode: "development",
  devtool: "source-map",
  entry: {
    App: "./public/javascripts/homepage-app.js",
  },
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [javascript, styles, pug],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "public/images/photos", 
          to: "images/photos" 
        },
        {
          from: "public/images/icons",
          to: "images/icons",
        }
        
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./views/index.pug",
      filename: "index.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/tanacsadas.pug",
      filename: "tanacsadas.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/autogen.pug",
      filename: "autogen.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/rolam.pug",
      filename: "rolam.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/kapcsolat.pug",
      filename: "kapcsolat.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/adatvedelem.pug",
      filename: "adatvedelem.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/impresszium.pug",
      filename: "impresszium.html", 
    }),
  ],
};

module.exports = config;
// Path: views/index.pug