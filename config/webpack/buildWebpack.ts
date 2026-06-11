import path from "path";
import { BuildOptions } from "./types/types";
import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";

export function buildWebpack(options: BuildOptions): Configuration {
  const isDev = options.mode === "development";
  return {
    mode: options.mode ?? "development",
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name][contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": options.paths.src,
      },
    },
    devServer: isDev
      ? {
          port: options.port ?? 3000,
          open: true,
          hot: true,
        }
      : undefined,
    devtool: isDev && "inline-source-map",
  };
}
