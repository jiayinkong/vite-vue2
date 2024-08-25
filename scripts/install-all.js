const { filePathMap, childProcess } 	= require('./shared/index.js');

// 安装所有依赖
installAll();

function installAll() {
  // 安装根目录依赖
  childProcess.spawnSync('rm -rf node_modules && pnpm i', { stdio: 'inherit', shell: true });

  // 安装组件库依赖
  childProcess.spawnSync('rm -rf node_modules && pnpm i', {
    cwd: filePathMap.compoents,
    stdio: 'inherit',
    shell: true,
  });

  // 安装docs文档依赖
  childProcess.spawnSync('rm -rf node_modules && pnpm i', {
    cwd: filePathMap.docs,
    stdio: 'inherit',
    shell: true,
  });
}

