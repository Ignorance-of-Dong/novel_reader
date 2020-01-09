import fetch from '../utils/fetch'

function apidetail() {
    return fetch.get('/bookchaptercontent?id=247465&cid=p2.html')
}

export {
    apidetail
}