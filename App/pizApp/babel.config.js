module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ["module-resolver", {
                "root": ["./src"],
                extendsion: [".js", ".jsx", ".ts", ".tsx"],
                alias: {
                    "@": "./src/"
                }
            }]
        ]
    };
};
