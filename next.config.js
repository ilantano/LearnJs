/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const path = require("path");
const { i18n } = require("./next-i18next.config");

module.exports = withFonts(
  withCSS(
    withSass(
      withImages({
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000,
                name: "[name].[ext]",
                esModule: false,
              },
            },
          });
          config.resolve.modules.push(path.resolve("./"));
          return config;
        },
        i18n,
      })
    )
  )
);
