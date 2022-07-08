const { getResponse, getResponse_get, getResponse_request, putResponse, postResponse_request, getResponse_getT, getResponse_del } = require('../../utils/query_utils');

class admin_manage_queries {


    //Get list of the users that can approve members
    static async getUsers(token) {
        const url = 'users';
        try {
            const { result, resbody } = await getResponse_request(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    
    static async viewUser(id, token) {
        const url = `users/find/${id}`;
        console.log('url', url)
        try {
            const {result, resbody} = await getResponse_request(url, token)
            return {result, resbody};
            
        }catch(err){
            if (err) console.log('login error', err)
        }
    };

    static async addPost(query, token) {
        const url = 'posts';
        try {
            const { result, resbody } = await postResponse_request(query, url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('login error', err)
        }
    };

    static async addPostImage(query, token) {
        const url = 'posts/image';
        try {
            const { result, resbody } = await postResponse_request(query, url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('login error', err)
        }
    };

    static async getPosts(token) {
        const url = 'posts';
        try {
            const { result, resbody } = await getResponse_request(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    static async viewPost(id, token) {
        const url = `posts/find/${id}`;
        try {
            const { result, resbody } = await getResponse_request(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    static async deletePost(id, token) {
        const url = `posts/${id}`;
        try {
            const { result, resbody } = await getResponse_del(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    static async addService(query, token) {
        const url = 'services';
        try {
            const { result, resbody } = await postResponse_request(query, url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('login error', err)
        }
    };

    static async getServices(token) {
        const url = 'services';
        try {
            const { result, resbody } = await getResponse_request(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    static async viewService(id, token) {
        const url = `services/find/${id}`;
        try {
            const { result, resbody } = await getResponse_request(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    static async deleteService(id, token) {
        const url = `services/${id}`;
        try {
            const { result, resbody } = await getResponse_del(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    static async getMessages(token) {
        const url = 'subscribers';
        try {
            const { result, resbody } = await getResponse_request(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    static async viewSubscriber(id, token) {
        const url = `subscribers/find/${id}`;
        try {
            const { result, resbody } = await getResponse_request(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

    static async deleteSubscriber(id, token) {
        const url = `subscribers/${id}`;
        try {
            const { result, resbody } = await getResponse_del(url, token)
            return { result, resbody }

        } catch (err) {
            if (err) console.log('error', err)
        }
    };

}

module.exports = admin_manage_queries