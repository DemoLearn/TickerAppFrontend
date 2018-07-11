
/**
 * Checks whether passed URL is absolute.
 * @param   {string}  url URL to test.
 * @returns {boolean} `true` if passed URL is absolute, `false` otherwise.
 */
const isAbsoluteUrl = url => {
    const regex = new RegExp('^(?:[a-z]+:)?//', 'i');
    return regex.test(url);
};

/**
 * Creates URL class instance from string with query parameters,
 * passed as mapping. If URL already contains any parameters,
 * they will not be overriden.
 * @param   {string} url String representation of URL.
 *     Can be either relative or absolute.
 * @param   {Object<string, string>} [queryParams={}] Query params mapping.
 * @param   {string} [base=window.location] URL base.
 * @returns {URL} Instance of URL class.
 */
export const createURL = (url, queryParams = {}, base = null) => {
    let urlBase = base || '';
    if (base === null && !isAbsoluteUrl(url)) {
        urlBase = window.location.origin;
    }
    const urlInstance = new URL(url, urlBase);
    Object.keys(queryParams || {}).forEach(name => {
        urlInstance.searchParams.append(name, queryParams[name]);
    });
    return urlInstance;
};
