const {getResponse, getResponse_get, getResponse_request} = require('../../utils/query_utils');

class auth_queries {


    


    //create a new member.
    static async createRegister(query) {
        const url = 'auth/register'
        try {
            const {result, resbody} = await getResponse(query, url);
            return {result, resbody};
        }catch(err){
            if (err) return console.log(error)
        }

    };

    static async loginRequest (query) {
        const url = 'auth/login';

        try {

            const {result, resbody} = await getResponse(query, url);
            return {result, resbody}
        } catch(err){
            if (err) console.log('login error', err)
        }
    }
};

module.exports = auth_queries