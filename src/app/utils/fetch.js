import HttpResponseStatusError from './errors/HttpResponseStatusError';


/**
 * Validates response http code. If the code is not 2xx (success),
 * throws an error. Otherwise returns Response itself.
 * @see https://fetch.spec.whatwg.org/#response-class
 * @param   {Response} response Response to validate.
 * @returns {Response} Successfull response.
 * @throws  {HttpResponseStatusError} if http code is not 2xx (success).
 */
export const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new HttpResponseStatusError(response);
};

/**
 * Converts Fetch API Response intance into JSON.
 * @see https://fetch.spec.whatwg.org/#response-class
 * @param   {Response} response Response instance to convert.
 * @returns {Object} JSON representation of Response.
 * @throws  {Error} if Response is not JSON-formatted.
 */
export const responseToJson = response => response.json();

/**
 * Converts Fetch API Response intance into string.
 * @see https://fetch.spec.whatwg.org/#response-class
 * @param   {Response} response Response instance to convert.
 * @returns {string} String representation of Response.
 */
export const responseToString = response => response.text();

/**
 * Executes request using Fetch API, validates response http code.
 * @see https://fetch.spec.whatwg.org/#fetch-api
 * @see https://fetch.spec.whatwg.org/#request-class
 * @see https://fetch.spec.whatwg.org/#response-class
 * @param   {string|Request} resource the resource that you wish to fetch.
 * @param   {Object} [options={}] Additional request options.
 * @returns {Promise<Response>} Promise with Response instance.
 */
export const execFetch = (resource, options = {}) =>
    fetch(resource, { credentials: 'include', ...options }).then(checkStatus);

/**
 * Executes request using Fetch API, returns response in JSON.
 * Also validates response http code.
 * @see https://fetch.spec.whatwg.org/#fetch-api
 * @param   {...*} fetchArgs whatwg-fetch arguments.
 * @returns {Promise<Object>} Promised with request response in JSON.
 */
export const fetchJson = (...fetchArgs) =>
    execFetch(...fetchArgs).then(responseToJson);

/**
 * Executes POST request using Fetch API, accepts JSON as request payload.
 * Also validates response http code.
 * @see https://fetch.spec.whatwg.org/#fetch-api
 * @see https://fetch.spec.whatwg.org/#response-class
 * @param   {string} url Request URL.
 * @param   {Object} [payload={}] Request payload.
 * @param   {Object} [options={}] Additional request options.
 * @returns {Promise<Response>} Promise with Response instance.
 */
export const postJson = (url, payload = {}, options = {}) =>
    execFetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        ...options
    });

/**
 * Executes POST request using Fetch API, accepts JSON as request payload
 * and returns response in JSON. Also validates response http code.
 * @see https://fetch.spec.whatwg.org/#fetch-api
 * @see https://fetch.spec.whatwg.org/#response-class
 * @param   {string} url Request URL.
 * @param   {Object} [payload={}] Request payload.
 * @param   {Object} [options={}] Additional request options.
 * @returns {Promise<Object>} Promise with request response in JSON.
 */
export const postFetchJson = (url, payload = {}, options = {}) =>
    postJson(url, payload, options).then(responseToJson);
