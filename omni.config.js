/* eslint-disable */
'use strict';

const path = require('path');
const gulpfile = require('./gulpfile');

module.exports = {
  type: 'component-react', // 项目类型，请勿任意变动 (project type, please don't modify)

  dev: {
    port: 6205, // 开发服务端口号 (dev-server port)
    host: 'localhost', // 开发服务端host (dev-server host)
    serverType: 'storybook' // 开发服务类型 (dev-server type)
  },

  build: {
    // 构建完成后是否自动发布 (auto release project after build success)
    autoRelease: false,

    // 输入路径 (the build source directory)
    // 务必使用绝对路径 (must be a absolute path)
    srcDir: path.resolve('src'),

    // 输出路径 (the directory for compiled project)
    // 务必使用绝对路径 (must be a absolute path)
    outDir: path.resolve('lib'),

    // es6 module输出路径 (es6 module compiled directory)
    // 务必使用绝对路径 (must be a absolute path)
    esmDir: path.resolve('es'),

    // 构建阶段的自定义配置回调 (The callback will be call in the build-process)
    // 返回自定义的配置 (You can return your custom build configuration)
    configuration: gulpfile,

    reserve: {
      assets: [
        path.resolve('./src/components/Loading/lottie-pure.json'),
        path.resolve('./src/components/Loading/lottie-pattern.json')
      ] // 构建结果保留其他资源的路径 (reserve other asset paths)
    },

    preflight: {
      typescript: true, // 构建时是否处理ts或tsx文件 (whether or not process the ts or tsx files)
      test: true, // 构建时是否进行单元测试 (whether or not process unit-test)
      eslint: true, // 构建时是否进行eslint检测 (whether or not process eslint fix and check)
      prettier: true, // 构建时是否进行prettier检测 (whether or not process prettier checking)
      stylelint: true, // 构建时是否进行stylelint检测 (whether or not process style lint check)
    }
  },

  release: {
    // 发布之前是否自动构建项目 (auto build project before release process)
    autoBuild: true,

    // 发布到npm仓库时，根据当前版本号自动设置 tag (auto set tag according to the current version)
    autoTag: false,

    // 发布的git仓库地址 (project git repo url)
    // git: 'https://github.com/1Money-Co/1money-react-ui.git',

    // 发布的npm仓库地址 (npm depository url)
    // npm: 'https://registry.npmjs.org/',

    preflight: {
      test: true, // 发布前是否进行单元测试 (whether or not process unit-test)
      eslint: true, // 发布前是否进行eslint检测 (whether or not process eslint fix and check)
      prettier: true, // 发布前是否进行prettier检测 (whether or not process prettier checking)
      stylelint: true, // 发布前是否进行stylelint检测 (whether or not process style lint check)
      commitlint: true, // 发布前是否进行commitlint检测 (whether or not process commit lint check)
      // branch: 'master' // 发布前进行分支检测，设置为空字符串则不会检测 (only can release in this branch, set empty string to ignore this check)
    }
  },

  template: {
    // 生成模板的根路径 (the root directory for generate template)
    // 务必使用绝对路径 (must be a absolute path)
    root: path.resolve('src/components/'),

    // 是否创建ts文件 (whether or not generate typescript)
    typescript: true,

    // 是否创建单元测试文件 (whether or not generate unit test frame)
    test: true,

    // 样式文件类型 (stylesheet type)
    stylesheet: 'scss',

    // [是否生成README文件, md 或 mdx 后缀] ([whether or not README generate file,  mdx or md suffix])
    readme: [true, 'md']
  },

  plugins: []
};
