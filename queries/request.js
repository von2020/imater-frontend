const {getResponse, getResponse_request, postResponse_request, putResponse, postResponse, getResponse_get}  = require('../utils/query_utils');

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
}

module.exports =  request_queries;