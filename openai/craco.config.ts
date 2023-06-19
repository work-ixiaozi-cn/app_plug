import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';
import {BaseContext as WebpackContext, CracoConfig} from '@craco/types'
import {Configuration as WebpackConfig} from 'webpack'

const config: CracoConfig = {
  webpack: {
    configure: (webpackConfig: WebpackConfig, {env, paths}: WebpackContext) => {
      return {
        ...webpackConfig,
      }
    },
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: 'src',
        }),
      ],
    }
  },
  devServer: {
    port: 3001
  }
}

export default config;
