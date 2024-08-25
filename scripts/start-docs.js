const { childProcess, filePathMap } 	= require('./shared/index.js');

// 启动 docs 文档，在启动前确保已经执行 pnpm watch:compo 命令
runStartDocs();

function runStartDocs() {
  // 启动docs文档
  childProcess.spawnSync('pnpm run docs:dev', {
    cwd: filePathMap.docs,
    stdio: 'inherit',
    shell: true,
  });
}
