const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const DotEnv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TerserPlugin = require("terser-webpack-plugin");

const pkg = require("./package.json");

const deps = pkg.dependencies;
const peerDeps = pkg.peerDependencies;

const RESUME_MODULE = "https://rococo-sfogliatella-7e0924.netlify.app" || "http://localhost:8080";
const EVALUATION_MODULE = "https://effulgent-melba-d97ae2.netlify.app" || "http://localhost:3001";

const PostCSSLoader = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [[autoprefixer]]
    }
  }
};

module.exports = (_env, argv) => {
  const isDev = argv.mode === "development";
  const isProd = argv.mode === "production";

  const config = {
    output: {
      publicPath: "/",
      filename: "[name].[contenthash:8].js",
      chunkFilename: "[name].[contenthash:8].chunk.js"
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
    },

    devServer: {
      port: 3000,
      historyApiFallback: true
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false
          }
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", PostCSSLoader]
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "./assets/[name][ext]"
          }
        },
        {
          test: /\.json$/,
          type: "javascript/auto",
          use: "json-loader"
        }
      ]
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "interviewApp",
        filename: "remoteEntry.js",
        remotes: {
          resume: `resume@${RESUME_MODULE}/remoteEntry.js`,
          mcq_test_app: `mcq_test_app@${EVALUATION_MODULE}/remoteEntry.js`
        },
        exposes: {},
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: peerDeps.react
          },
          "react-dom": {
            singleton: true,
            requiredVersion: peerDeps["react-dom"]
          }
        }
      }),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "src/index.html")
      })
    ]
  };

  if (isDev) {
    config.devtool = "inline-source-map";

    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new DotEnv({
        path: path.resolve(__dirname, ".env"),
        allowEmptyValues: true
      })
    );
  }

  if (isProd) {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
          PORT: JSON.stringify(process.env.PORT),
          PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
          REACT_APP_THEME: JSON.stringify(process.env.REACT_APP_THEME),
          REACT_APP_AWS_ACCESS_KEY: JSON.stringify(process.env.REACT_APP_AWS_ACCESS_KEY),
          REACT_APP_AWS_SECRET_KEY: JSON.stringify(process.env.REACT_APP_AWS_SECRET_KEY),
          REACT_APP_BUCKET_NAME: JSON.stringify(process.env.REACT_APP_BUCKET_NAME),
          REACT_APP_REDIRECT_URL_LINKEDIN: JSON.stringify(
            process.env.REACT_APP_REDIRECT_URL_LINKEDIN
          ),
          REACT_APP_LINKEDIN_CLIENT_ID: JSON.stringify(process.env.REACT_APP_LINKEDIN_CLIENT_ID),
          REACT_APP_LINKEDIN_CLIENT_SECRET: JSON.stringify(
            process.env.REACT_APP_LINKEDIN_CLIENT_SECRET
          ),
          REACT_APP_AWS_API_URL: JSON.stringify(process.env.REACT_APP_AWS_API_URL),
          REACT_APP_AWS_API_STAGE: JSON.stringify(process.env.REACT_APP_AWS_API_STAGE)
        }
      })
    );

    config.performance = { hints: false };
  }

  return config;
};
