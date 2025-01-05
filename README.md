# electron-robot
本项目基于vite-react-electron，用于机器人虚拟形象展示。主要功能为加载3D模型与大模型语音交互。

- [x] 3D模型引入
- [x] 标签导航模块
- [ ] 语音交互模块

[![Required Node.JS 20.18.1](https://img.shields.io/static/v1?label=node&message=20.18.1&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

## 快速开始

```sh
# install dependency
npm install

# develop
npm run dev
```

## 目录

*🚨 默认情况下, `electron` 文件夹下的文件将会被构建到 `dist-electron`*

```tree
├── electron                                 Electron 源码文件夹
│   ├── main                                 Main-process 源码
│   └── preload                              Preload-scripts 源码
│
├── release                                  构建后生成程序目录
│   └── {version}
│       ├── {os}-{os_arch}                   未打包的程序(绿色运行版)
│       └── {app_name}_{version}.{ext}       应用安装文件
│
├── public                                   同 Vite 模板的 public
└── src                                      渲染进程源码、React代码
```

<!--
## 🚨 这需要留神

默认情况下，该模板在渲染进程中集成了 Node.js，如果你不需要它，你只需要删除下面的选项. [因为它会修改 Vite 默认的配置](https://github.com/electron-vite/vite-plugin-electron-renderer#config-presets-opinionated).

```diff
# vite.config.ts

export default {
  plugins: [
    ...
-   // Use Node.js API in the Renderer-process
-   renderer({
-     nodeIntegration: true,
-   }),
    ...
  ],
}
```
-->

## gltf文件处理
[gltfjsx](https://github.com/pmndrs/gltfjsx) 可以帮助生成gltf文件对应的jsx文件

