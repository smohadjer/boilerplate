const copyNodeModules = require('copy-node-modules');
const srcDir = './';
const dstDir = './.tmp';

// Filter method that will ignore node_module folders in a node module
const filter = path => {
  const firstIndex = path.indexOf('node_modules');
  return v.indexOf('node_modules', firstIndex + 1) === -1;
}

copyNodeModules(srcDir, dstDir, { devDependencies: false, filter}, (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  Object.keys(results).forEach(name => {
    const version = results[name];
    console.log(`Package name: ${name}, version: ${version}`);
  });
});
