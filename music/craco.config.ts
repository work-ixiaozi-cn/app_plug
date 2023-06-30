import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';
import {BaseContext as WebpackContext, CracoConfig } from '@craco/types'
import {Configuration as WebpackConfig} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from "path";

const config: CracoConfig = {
  webpack: {
    configure: (webpackConfig: WebpackConfig, {env, paths}: WebpackContext) => {
      return {
        ...webpackConfig,
        entry: path.join(__dirname, 'src/index.tsx'),
        output:{
          ...webpackConfig.output,
          filename: `static/js/renderer${env === 'production' ? '' : '.[contenthash:8]'}.js`,
        },
        resolve:{
          ...webpackConfig.resolve,
          fallback: {
            ...webpackConfig.resolve?.fallback,
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            buffer: require.resolve("buffer"),
            "path": false,
          }
        },
        // plugins: webpackConfig.plugins?.filter(plugin => plugin instanceof HtmlWebpackPlugin
        //     ? new HtmlWebpackPlugin({...plugin.userOptions, chunks: ['renderer']})
        //     : plugin)
      }
    },
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: 'src',
        }),
      ],
      remove: [
          'WebpackManifestPlugin'
      ]
    }
  },
  devServer: {
    port: 3002
  }
};

export default config;
