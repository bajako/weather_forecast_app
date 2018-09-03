module.exports = {
  entry: "./js/Index.jsx",
  output: { filename: "./js/out.js" },
  watch: true,
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: { presets: ["env", "stage-2", "react"] },
    },
    ],
  },
};

// module: {
//   rules: [
//     {
//       test: /\.(js|jsx)$/,
//       exclude: /node_modules/,
//       use: [{
//         loader: 'babel-loader',
//         options:	{	presets:	['env', 'stage-2', 'react']	},
//       }],
//
//     },
//     {
//       test: /\.js$/,
//       exclude: /node_modules/,
//       use: ['babel-loader', 'eslint-loader'],
//     },
//   ],
// },
// };
