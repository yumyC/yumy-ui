// Basic utils
/**
 * @desc Get the value of the corresponding key in the url.
 * @param {String} key The key of the value to be obtained
 * @return {String} The value corresponding to the key
 */
export const getUrlParam = (key) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
};
// Basic utils
/**
 * @desc Get the value of the corresponding key in the url.
 * @param {String} filterKey The key of the value to be obtained
 * @return {String} The value corresponding to the key
 */
export const getAllValuesOfkey = (filterKey) => {
  const params = new URLSearchParams(window.location.search);
  const valueArr = [];
  Array.from(params.keys())
    .filter((key) => filterKey.indexOf(key) > -1 || key.indexOf(filterKey) > -1)
    .forEach((key) => valueArr.push(params.get(key)));
  return valueArr;
};
/**
 * @desc Get the value of the corresponding key in the url.
 * @param {String} key The key of the value to be obtained
 * @param {String} val The key of the value to be obtained
 * @return {String} The value corresponding to the key
 */
export const setUrlParam = (key, val) => {
  const params = new URLSearchParams(window.location.search);
  params.set(key, val);
  return params;
};
/**
 * @desc Get the value of the corresponding key in the url.
 * @param {String} nowPathName window.location.pathname
 * @param {String} params url params
 */
export const updateAndReloadUrl = (
  // eslint-disable-next-line default-param-last
  nowPathName = window.location.pathname,
  params = '',
) => {
  window.history.pushState({}, '', nowPathName + params);
  window.location.reload();
};
/**
 * @desc Get the value of the filtered Url in the url.
 * @param {String} filterKey The key of the value to be obtained
 * @param {String} url url
 * @return {String} filtered Url para
 */
export const getFilteredUrl = (filterKey, url = window.location.search) => {
  const params = new URLSearchParams(url);
  Array.from(params.keys())
    .filter((key) => filterKey.indexOf(key) > -1 || key.indexOf(filterKey) > -1)
    .forEach((key) => params.delete(key));
  return params.toString();
};
/**
 * @desc Get the value of the filtered Url in the url.
 * @param {String} filterValue The key of the value to be obtained
 * @param {String} url url
 * @return {String} filtered Url para
 */
export const getFilteredUrlByValue = (
  filterValue,
  url = window.location.search,
) => {
  const params = new URLSearchParams(url);
  Array.from(params)
    .filter((item) => item[1] === filterValue)
    .forEach((item) => {
      params.delete(item[0]);
    });
  return params.toString();
};

/**
 * @desc Get the value of the host or url.
 * @param {String} url url
 * @param {String} para host or url
 * @return {String} The value
 */
export const getPartUrl = (url, para) => {
  const m = url.match(/^http(s)?:\/\/([^\\/?#]*)(.*$)/);
  if (para === 'host') {
    if (url) {
      return m ? m[2] : null;
    }
  } else if (url) {
    return m ? m[3] : null;
  }
};

// debounce
export const debounce = (func, threshold = 100, execAsap = true) => {
  let timeout;
  return () => {
    let obj = this;
    let args = arguments;
    const delay = () => {
      if (!execAsap) {
        func.apply(obj, args);
        timeout = null;
      }
    };
    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      func.apply(obj, args);
      timeout = setTimeout(delay, threshold || 100);
    }
  };
};

// ajax
export const ajaxWithPromise = (url, data = {}, type = 'GET') => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: type,
      url: url,
      data: data,
      dataType: 'json',
      success: () => {
        resolve(data);
      },
      error: (err) => {
        reject(err);
      },
    });
  });
};
