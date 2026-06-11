interface BuildPaths {
  entry: string;
  output: string;
  public: string;
  html: string;
  src: string;
}

type Mode = "development" | "production";

export interface BuildOptions {
  mode: Mode;
  port: number;
  paths: BuildPaths;
  analyzer?: boolean;
}
