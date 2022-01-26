class Request {
  constructor(url, method) {
    this.url = url
    this.method = method
    this.response = null
    fetch(url, {method: method}).then( response => response.json() ).then( response => {
        this.response = response
    } );
  }
}
