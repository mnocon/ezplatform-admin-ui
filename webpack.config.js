const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'ezBtnParagraph': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-paragraph.js',
        'ezBtnHeading': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-heading.js',
        'ezBtnMoveDown': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-movedown.js',
        'ezBtnMoveUp': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-moveup.js',
        'ezBtnBlockTextAlignCenter': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-blocktextaligncenter.js',
        'ezBtnBlockTextAlignJustify': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-blocktextalignjustify.js',
        'ezBtnBlockTextAlignLeft': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-blocktextalignleft.js',
        'ezBtnBlockTextAlignRight': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-blocktextalignright.js',
        'ezBtnRemoveBlock': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-removeblock.js',
        'ezBtnUnorderedList': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-unorderedlist.js',
        'ezBtnOrderedList': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-orderedlist.js',
        'ezBtnTable': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-table.js',
        'ezBtnTableCell': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-tablecell.js',
        'ezBtnTableRow': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-tablerow.js',
        'ezBtnTableColumn': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-tablecolumn.js',
        'ezBtnTableRemove': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-tableremove.js',
        'ezBtnBold': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-bold.js',
        'ezBtnItalic': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-italic.js',
        'ezBtnUnderline': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-underline.js',
        'ezBtnSubscript': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-subscript.js',
        'ezBtnSuperscript': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-superscript.js',
        'ezBtnQuote': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-quote.js',
        'ezBtnStrike': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-strike.js',
        'ezBtnLink': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-link.js',
        'ezBtnImage': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-image.js',
        'ezBtnImageUpdate': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-imageupdate.js',
        'ezBtnImageVariation': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-imagevariation.js',
        'ezBtnEmbed': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embed.js',
        'ezBtnEmbedUpdate': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedupdate.js',
        'ezBtnLinkEdit': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-linkedit.js',
        'ezBtnEmbedAlingCenter': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedaligncenter.js',
        'ezBtnEmbedAlingLeft': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedalignleft.js',
        'ezBtnEmbedAlingRight': './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedalignright.js',
        'ezToolbarAdd': './src/bundle/Resources/public/js/alloyeditor/src/toolbars/ez-add.js',
        'ezPluginAddContent': './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-add-content.js',
        'ezPluginMoveElement': './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-move-element.js',
        'ezPluginCaret': './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-caret.js',
        'ezPluginRemoveBlock': './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-remove-block.js',
        'ezPluginEmbed': './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-embed.js',
        'ezPluginFocusBlock': './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-focus-block.js',
        'ezParagraphConfig': './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-paragraph.js',
        'ezTextConfig': './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-text.js',
        'ezTableConfig': './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-table.js',
        'ezLinkConfig': './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-link.js',
        'ezHeadingConfig': './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-heading.js',
        'ezEmbedConfig': './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-embed.js',
        'ezEmbedImageConfig': './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-image.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src/bundle/Resources/public/js/alloyeditor/dist'),
        library: ['eZ', 'ezAlloyEditor', '[name]'],
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        'alloyeditor': {
            root: 'AlloyEditor',
            commonjs2: 'AlloyEditor',
            commonjs: 'AlloyEditor',
            amd: 'AlloyEditor'
        },
    },
    plugins: [
        new CleanWebpackPlugin(['src/bundle/Resources/public/js/alloyeditor/dist']),
        new UglifyJSPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma: 6
            }
        })
    ]
};
