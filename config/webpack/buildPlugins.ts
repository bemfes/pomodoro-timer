import { Configuration } from "webpack";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "node:path";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isDev = options.mode === "development";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.public, "tomato-favicon.svg"),
    }),
  ];

  if (options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }
  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:8].css",
      }),
    );
  }
  return plugins;
}
