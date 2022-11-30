import setSizes from '@/js/utils/setSizes';
import { debounce } from '@/js/utils/index';

const exeSetSize = () => {
  const onResizing = () => {
    setSizes();
  };
  window.onresize = window.onload = onResizing;
  debounce(onResizing);
};

export default exeSetSize;
