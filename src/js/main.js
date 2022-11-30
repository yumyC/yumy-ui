import { getModules, handleExecer } from '@/js/utils/moduleUtils';

// Get automation import module
const files = require.context('@/js/modules', true, /\.js$/);
const gModules = getModules(files);
/*  Automatically execute if the module is a function
 * For functions that require parameters, please configure them
 * in @/js/config/modulesConfig.js
 */
handleExecer(gModules);
