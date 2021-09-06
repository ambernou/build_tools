const { resolve } = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.mp3/,
                use: "file-loader"
            }
        ]
    }
}