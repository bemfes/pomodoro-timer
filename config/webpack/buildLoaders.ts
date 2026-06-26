import { BuildOptions } from "./types/types";
import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
//import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif|mp3)$/i,
    type: "asset/resource",
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
        },
      },
    ],
  };

  const babelLoader = {
    test: /\.tsx?$/,
    use: "babel-loader",
    exclude: /node_modules/,
  };

  const cssModulesLoader = {
    test: /\.module\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,

      {
        loader: "css-loader",

        options: {
          esModule: false,
          modules: {
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
    ],
  };

  const cssLoader = {
    test: /\.css$/i,
    exclude: /\.module\.css$/i,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
  };
  return [
    assetLoader,
    fontsLoader,
    cssLoader,
    cssModulesLoader,
    babelLoader,
    svgrLoader,
  ];
}
