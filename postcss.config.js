module.exports = {
    plugins: {
        "postcss-modules-values":{},
        "autoprefixer":{},
        "postcss-pxtorem":{
            propList:[
                'font', 'font-size',
                'height','width',
                'line-height',
                'letter-spacing',
                'padding','padding-left','padding-right','padding-top','padding-bottom',
                'margin','margin-right','margin-left','margin-top','margin-bottom',
                'left','right','top','bottom',
                'border-radius'
            ],
            rootValue:18,
            minPixelValue:1.01,
            selectorBlackList:['html'],
            mediaQuery:false,
            unitPrecision:5
        }
    }
}