/**
 * webpack 打包配置文件
 * @author ilex
 */

const simpleConfig = require('amos-build/lib/simpleConfig');
const HtmlInlineCodePlugin = require('html-inline-code-plugin');
const __ENV__ = require('amos-build/lib/tools/__ENV__');

const isProd = __ENV__ === 'production';

const entry = {
  app: './src/entry/index.js'
};

const alias = {
};

const config = {
  tpl: './tpl.html',
  toFile: 'index.html',
  port: 3998,
  entry,
  alias,
  enableWorker: true,
  opened: true,
  sourceMap: !isProd
};

const defaultConfig = simpleConfig(config);

defaultConfig.name = 'ray-site';

if (isProd){
  defaultConfig.output.publicPath = '.';
}

defaultConfig.externals = {
  'monaco-editor': 'monaco'
};

const monacoPrefix = isProd ? 'https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.15.6/min/vs' : './node_modules/monaco-editor/min/vs';

defaultConfig.plugins.push(
  new HtmlInlineCodePlugin([
    {
      inject: 'head',
      tag: 'script',
      code: `var require = { paths: { 'vs': '${monacoPrefix}' } };`
    },
    { inject: 'body', tag: 'script', attr: { src: monacoPrefix + '/editor/editor.main.js' } }, // order 3
    { inject: 'body', tag: 'script', attr: { src: monacoPrefix + '/editor/editor.main.nls.js' } }, // order 2
    { inject: 'body', tag: 'script', attr: { src: monacoPrefix + '/loader.js' } }, // order 1
  ])
);

module.exports = defaultConfig;
