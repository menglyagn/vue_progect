/**
 *  postcss-px-to-viewport移动端适配方案配置
 */ 
const postcssPxToViewport = require('postcss-px-to-viewport');

module.exports = {
    plugins: [
        postcssPxToViewport({
            unitToConvert: "px",
            viewportWidth: 750,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: ["van"],
            minPixelValue: 1,
            mediaQuery: true,
            replace: true,
            exclude: [/node_modules/],
            landscape: false
        })
    ]
}