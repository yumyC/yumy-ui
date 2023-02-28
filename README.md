# yumyUI
- install nodejs >= 16
```
 $ cd yumyUI
 $ npm install
```
- run `npm start` to develop locally
- run `npm run build` to genarate dist files
## Code deployment
1. We have three branches dev ,stage, master which correspond to the DEV, STAGE, PROD env.
2. For commit message, please use `git commit -m "xxxx-1234: This is demo message."`
3. For branch, please use `git branch feature/xxxx-2` which is response to jire ticket number.
## The directory structure

    dist (Automatically generated, example:)
    | yumyUI.css
    | yumyUI.js
    | ...
    lib (external dependencies)
    | ...
    node_modules
    | ...
    src
    | assets (Static resource)
    | | fonts
    | | images
    | js
    | | config (config)
    | | modules (Automatic import)
    | | pages (Manual import via main.js)
    | | utils (Public method)
    | | | index.js (Basic utils)
    | | | ...  (Other utils)
    | | main.js
    | scss
    | | public (Public style)
    | | | index.scss (Basic overall import)
    | | base (Basic style)
    | | | index.scss (Basic overall import)
    | | | ...
    | | ckeditor
    | | | ckeditor-only.scss
    | | | ...
    | | components (Moudle style)
    | | | index.scss (components overall import)
    | | | ...
    | | customs (customs style)
    | | | index.scss (Layout overall import)
    | | | ...
    | | layout (Layout style)
    | | | index.scss (Layout overall import)
    | | | ...
    | | mixins  (Reusable style)
    | | | index.scss (Reusable overall import)
    | | | ...
    | | page (Page style)
    | | | index.scss (Page overall import)
    | | | ...
    | | style.scss
    | | ckeditor.scss
    | | ...
    | index.js
    template (Twig template)
    | | ...
    .babelrc.json
    .eslintcache
    .eslintrc.json
    .gitignore
    .prettierrc.json
    .stylelintrc.json
    yumyUI.info.yml
    yumyUI.libraries.yml
    yumyUI.theme
    favicon.ico
    logo.png
    package-lock.json
    package.json
    postcss.config.js
    README.md
    webpack.common.js
    webpack.dev.js
    webpack.prod.js
