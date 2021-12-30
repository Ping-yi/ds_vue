const path = require("path")

console.log("================", process.env)
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("config", resolve("src/config"))
            .set("mixins", resolve("src/mixins"))
            .set("utils", resolve("src/utils"))
            .set("api", resolve("src/api"))
            .set("plugins", resolve("src/plugins"))
            .set("core", resolve("src/core"))
            .set("views", resolve("src/views"))
    },
}
