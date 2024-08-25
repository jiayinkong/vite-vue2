const { filePathMap, childProcess } = require('./shared/index.js');
const componentsDir = filePathMap.compoents;

// 打包组件库，产出 output 到根目录
runBuildComp();

function runBuildComp() {
  childProcess.spawnSync(
    'pnpm run build', {
    cwd: componentsDir,
    stdio: 'inherit',
    shell: true,
  });
}

// childProcess.exec(`cd ${componentsDir} && rm -rf node_modules && npm i && npm run build`, (error, stdout) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
// });