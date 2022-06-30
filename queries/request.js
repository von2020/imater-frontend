const {getResponse, getResponse_request, postResponse_request, putResponse, postResponse, getResponse_get, getResponse_req}  = require('../utils/query_utils');

class request_queries {

    static async allServices(token) {
        const url = 'services';
        try {
            const {result, resbody} = await getResponse_get(url)
            return {result, resbody};
            
        }catch(err){
            if (err) console.log('login error', err)
        }
    };

    static async allPosts() {
        const url = `posts`;
        console.log('url', url)
        try {
            const {result, resbody} = await getResponse_get(url)
            return {result, resbody};
            
        }catch(err){
            if (err) console.log('login error', err)
        }
    };

    static async allPostsPag(page, limit) {
        const url = `posts/pag/?page=${page}&limit=${limit}`;
        console.log('url', url)
        try {
            const {result, resbody} = await getResponse_get(url)
            return {result, resbody};
            
        }catch(err){
            if (err) console.log('login error', err)
        }
    };

    static async viewPosts(id) {
        const url = `posts/find/${id}`;
        console.log('url', url)
        try {
            const {result, resbody} = await getResponse_req(url)
            return {result, resbody};
            
        }catch(err){
            if (err) console.log('login error', err)
        }
    };

    static async handleContact(query) {
        const url = 'subscribers';
        console.log('contact', query)
        try {
            const {result, resbody} = await postResponse(query, url)
            return {result, resbody}
            
        }catch(err){
            if (err) console.log('login error', err)
        }
    };
}

module.exports =  request_queries;