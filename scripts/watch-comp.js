const { childProcess, filePathMap } 	= require('./shared/index.js');

// 这个命令在开发组件库时是必须的，且需要在启动 docs 文档前执行
runWatchComp();

function runWatchComp() {

  // 以监听的方式打包组件库，这里为了能够实现实时 npm link 到 docs 文档
  childProcess.spawnSync('pnpm run build:watch', {
    cwd: filePathMap.compoents,
    stdio: 'inherit',
    shell: true,
  });
}
