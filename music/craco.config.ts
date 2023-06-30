import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';
import {BaseContext as WebpackContext, CracoConfig } from '@craco/types'
import {Configuration as WebpackConfig} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path, { dirname } from 'path';
import {overrideWebpackDevConfig} from "@craco/craco/dist/lib/cra";
import {WebpackConfigOverride} from "@craco/types/dist/plugins";

let options = {}
// @ts-ignore
const config: CracoConfig = {
  webpack: {
    configure: (webpackConfig: WebpackConfig, {env, paths}: WebpackContext) => {
      return {
        ...webpackConfig,
        entry:{
          renderer: path.join(__dirname, 'src/index.tsx'),
          // main: path.join(__dirname, 'src/main/index.ts'),
        },
        resolve:{
          ...webpackConfig.resolve,
          fallback: {
            ...webpackConfig.resolve?.fallback,
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            buffer: require.resolve("buffer"),
          }
        },
        // plugins: [
        //   new WindiCSSWebpackPlugin({
        //     virtualModulePath: 'src',
        //   }),
        // ]
      }
    },
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: 'src',
        }),
        // new HtmlWebpackPlugin(options)
      ],
    }
  },
  // plugins: [
  //   {
  //     plugin: {
  //       // @ts-ignore
  //       overrideWebpackConfig: (webpackConfigOverride: WebpackConfigOverride) => {
  //         let plugin = new HtmlWebpackPlugin(
  //             Object.assign(
  //                 {},
  //                 {
  //                   inject: true,
  //                   chunks: ['renderer'],
  //                   template: webpackConfigOverride.context.paths?.appHtml,
  //                 },
  //                 webpackConfigOverride.context.env === 'production'
  //                     ? {
  //                       minify: {
  //                         removeComments: true,
  //                         collapseWhitespace: true,
  //                         removeRedundantAttributes: true,
  //                         useShortDoctype: true,
  //                         removeEmptyAttributes: true,
  //                         removeStyleLinkTypeAttributes: true,
  //                         keepClosingSlash: true,
  //                         minifyJS: true,
  //                         minifyCSS: true,
  //                         minifyURLs: true,
  //                       },
  //                     }
  //                     : undefined
  //             )
  //         );
  //         return {
  //           ...webpackConfigOverride.webpackConfig,
  //           plugins: [
  //             plugin,
  //             ...(webpackConfigOverride.webpackConfig.plugins? webpackConfigOverride.webpackConfig.plugins : []),
  //             new WindiCSSWebpackPlugin({
  //               virtualModulePath: 'src',
  //             }),
  //           ]
  //         }
  //       },
  //     }
  //   }
  // ],
  devServer: {
    port: 3002
  }
};

export default config;
