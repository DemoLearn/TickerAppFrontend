
export default class extends Error {
    constructor (response) {
        super(response.statusText);
        this.response = response;
    }
}
