module.exports = {
  entry: "expose-loader?exposes=index!./index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          "thread-loader",
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true
            },
          },
        ],
      },
    ],
  },
}
