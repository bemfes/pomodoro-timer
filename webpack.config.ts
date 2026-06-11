import type { Configuration } from "webpack";
import { buildWebpack } from "./config/webpack/buildWebpack";
import path from "path";

type Mode = "development" | "production";

interface EnvVariables {
  mode: Mode;
  port: number;
  analyzer?: boolean;
}

export default (env: EnvVariables) => {
  const paths = {
    entry: path.resolve(__dirname, "src", "app", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    public: path.resolve(__dirname, "public"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: Configuration = buildWebpack({
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    paths: paths,
    analyzer: env.analyzer,
  });
  return config;
};
