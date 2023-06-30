import {BaseContext as WebpackContext, CracoConfig } from '@craco/types'
import {Configuration as WebpackConfig} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path';

const target = 'preload';

const config: CracoConfig = {
  webpack: {
    configure: (webpackConfig: WebpackConfig, {env, paths}: WebpackContext) => {
      return {
        ...webpackConfig,
        entry: path.join(__dirname, `src/${target}/index.ts`),
        output:{
          ...webpackConfig.output,
          path: paths?.appPublic,
          filename:  `${target}.js`,
        },
        target: `electron-${target}`,
      }
    },
    plugins: {
      add: [
      ],
      remove: [
          'WebpackManifestPlugin', 'HtmlWebpackPlugin', 'InlineChunkHtmlPlugin', 'InterpolateHtmlPlugin'
      ]
    }
  },
};

export default config;
