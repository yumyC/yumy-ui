// File utils
import modulesConfig from '@/js/config/modulesConfig';

/*
 * Get local dir
 * @param files
 */
export const getModules = (files) => {
  const modules = files.keys().reduce((module, path) => {
    const name = path.replace(/^\.\/|.js$/g, '');
    module[name] = files(path).default;
    return module;
  }, {});
  return modules;
};
/*
 * Inital functions execer handler
 * @param modules
 */
export const handleExecer = (modules) => {
  Object.keys(modules).forEach((item) => {
    const f = modules[item];
    if (typeof f === 'function') {
      let isHasPara = false;
      Object.keys(modulesConfig).forEach((configItem) => {
        if (configItem === item) {
          isHasPara = true;
          f(modulesConfig[configItem].parameter);
        }
      });
      if (!isHasPara) {
        f();
      }
    }
  });
};
