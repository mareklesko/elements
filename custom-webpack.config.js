const webpack = require('webpack');
const path = require('path');
const WebpackConcatPlugin = require('webpack-concat-files-plugin');

module.exports = {
    entry: './projects/elements/src/entry',
    plugins: [{
        apply: (compiler) => {
            compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                const files = [];
                
                compilation.getAssets()
                    .filter(x => x.name.includes('.js'))
                    .forEach(element => {
                        console.log(compilation.getPathWithInfo(element.name));
                        files.push(`./dist/elements/${element.name}`);
                        console.log(element)
                    });
                require('child_process').execSync(`cat ${files.join(' ')} > ./dist/elements.js`);
            });
        }
    }]
};