----- Kurulum ------

https://www.npmjs.com/package/@quick-start/create-electron

Buradaki link üzerinden electron paketinin kurulum işlemlerini yaptık.

√ Select a framework: » react
√ Add TypeScript? ...  Yes
√ Add Electron updater plugin? ... No 
√ Enable Electron download mirror proxy? ... No 

Kurulum tercihlerimiz bu şekilde.

----- Vs.code settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
    "source.organizeImports": "always"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.wordWrap": "on",
  "markdownlint.config": {
    "MD041": false
  }
}

----- eslintrc.cjs

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}

----- updated sandbox false to true and added contextIsolation:true for more safety

const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true
    }
  })
