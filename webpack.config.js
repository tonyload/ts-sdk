const path = require('path')

const HtmlWebPlugin = require('html-webpack-plugin') //自动生成 HTML末班
const {CleanWebpackPlugin} = require('clean-webpack-plugin')// 每次清空dist文件夹
module.exports ={
    entry:"./src/main.ts",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"main.js"
    },
    mode:"development",
    devServer:{
        contentBase:"/dist",
    },
    resolve:{
        "extensions":['.ts','.js','.json']
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
                exclude:[
                    path.resolve(__dirname,'src/components')
                ]
            },
            {
                test:/\.scss$/,
                use:['style-loader',{
                    loader:'css-loader',
                    options:{
                        modules:{
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                       
                    }
                },'sass-loader'],
                include:[
                    path.resolve(__dirname,'src/components')
                ]
            },
            {
                test:/\.(eot|svg|woff2|woff|ttf)$/,
                use:['file-loader']
            },
            {
                test:/\.ts$/,
                use:['ts-loader'],
                exclude:/node_modules/

            }
        ]
    },
    plugins:[
        new HtmlWebPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin()
    ]

}