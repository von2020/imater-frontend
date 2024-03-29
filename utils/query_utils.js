// loading the baseUrl
const { baseUrl } = require('../baseUrl')

// require the request module
const request = require('request');


// request(baseUrl, function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

class Consumers {
  static getResponse(query, url) {
    return new Promise ( (resolve, reject) => {
    
        const body = JSON.stringify(query);
        const options = {
          headers: {
            'content-Type': 'application/json',
          },
          url: `${baseUrl}${url}`,
          body,
        };
        console.log('options', options)
        request.post(options, (error, result, resBody) => {
          if (error) reject(error);
          console.log('resbody', resbody)
          var resbody = JSON.parse(result.body);
          resolve({result, resbody})
        });
 });
};

static getResponse_get(url) {
  return new Promise ( (resolve, reject) => {

      const options = {
        headers: {
          'content-Type': 'application/json',
        },
        url: `${baseUrl}${url}`
      };
      request.get(options, (error, result, resBody) => {
        if (error) reject(error);
        console.log('result', result)
        if (result.statusCode == '500') {
          throw new Error('ERROR 500: Internal server error')
        } else {
          var resbody = JSON.parse(result.body);
          resolve({result, resbody})
        }
      });
});
};

static getResponse_del(url, token) {
  return new Promise ( (resolve, reject) => {

      const options = {
        headers: {
          'content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        url: `${baseUrl}${url}`
      };
      request.delete(options, (error, result, resBody) => {
        if (error) reject(error);
        if (result.statusCode == '500') {
          throw new Error('ERROR 500: Internal server error')
        } else {
        console.log(typeof(result.body))
         if(typeof(result.body) == 'object'){
          var resbody = result.body;
         }
         else{
           console.log(result.body);
             var resbody = JSON.parse(result.body);
         }
        
          resolve({result, resbody})
        }
      });
});
};

static getResponse_getT(url, token) {
  return new Promise ( (resolve, reject) => {

      const options = {
        headers: {
          'content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        url: `${baseUrl}${url}`
      };
      request.get(options, (error, result, resBody) => {
        if (error) reject(error);
        if (result.statusCode == '500') {
          throw new Error('ERROR 500: Internal server error')
        } else {
        console.log(typeof(result.body))
         if(typeof(result.body) == 'object'){
          var resbody = result.body;
         }
         else{
           console.log(result.body);
             var resbody = JSON.parse(result.body);
         }
        
          resolve({result, resbody})
        }
      });
});
};
    static postResponse_request(query, url, token) {
      return new Promise ( (resolve, reject) => {
    
        const body = JSON.stringify(query);
        const options = {
          headers: {
            'content-Type': 'application/json',
            'Authorization': `Token ${token}`

          },
          url: `${baseUrl}${url}`,
          body,
        };

        request.post(options, (error, result, resBody) => {
          console.log('error:',error);
          
          console.log('statusCode:', result.statusCode);
          if (error) reject(error);
          if (result.statusCode == '500') {
            throw new Error('ERROR 500: Internal server error')
          } else {
            var resbody = JSON.parse(result.body);
            resolve({result, resbody})
          }
        });
 });
}

static getResponse_request(url, token) {
  return new Promise ( (resolve, reject) => {

    const options = {
      headers: {
        'content-Type': 'application/json',
        'Authorization': `Token ${token}`

      },
      url: `${baseUrl}${url}`
    };
    request.get(options, (error, result, resBody) => {
      if (error) reject(error);
      var resbody = JSON.parse(result.body);
      resolve({result, resbody})
    });
});
};

static getResponse_req(url) {
  return new Promise ( (resolve, reject) => {

    const options = {
      headers: {
        'content-Type': 'application/json',
      },
      url: `${baseUrl}${url}`,
    };
    
    request.get(options, (error, result, resBody) => {
      if (error) reject(error);
      var resbody = JSON.parse(result.body);
      console.log('resbody', resbody)
      
      resolve({result, resbody})
    });
});
};

static putResponse(query, url, token) {
  return new Promise ( (resolve, reject) => {
  
      const body = JSON.stringify(query);
      const options = {
        headers: {
          'content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        url: `${baseUrl}${url}`,
        body,
      };
      
      request.put(options, (error, result, resBody) => {
        if (error) reject(error);
        console.log(result.body)
        var resbody = JSON.parse(result.body);
        resolve({result, resbody})
      });
});
};

static putResponse_image(query, url) {
  return new Promise ( (resolve, reject) => {
  
      const body = JSON.stringify(query);
      const options = {
        headers: {
          'content-Type': 'form-data',
          'Authorization': `Token ${token}`
        },
        url: `${baseUrl}${url}`,
        body,
      };
      request.put(options, (error, result, resBody) => {
        if (error) reject(error);
        var resbody = JSON.parse(result.body);
        resolve({result, resbody})
      });
});
};

static putResponseparam(query, url) {
  return new Promise ( (resolve, reject) => {
  
      const body = JSON.stringify(query);
      const options = {
        headers: {
          'content-Type': 'application/json'
        },
        url: `${baseUrl}${url}`,
        body,
      };
      request.put(options, (error, result, resBody) => {
        if (error) reject(error);
        var resbody = JSON.parse(result.body);
        resolve({result, resbody})
      });
});
};

static postResponse(query, url) {
  return new Promise ( (resolve, reject) => {
  
      const body = JSON.stringify(query);
      const options = {
        headers: {
          'content-Type': 'application/json',
        },
        url: `${baseUrl}${url}`,
        body,
      };
      request.post(options, (error, result, resBody) => {
        if (error) reject(error);
        var resbody = JSON.parse(result.body);
        resolve({result, resbody})
      });
});
};

static postResponse_reset(query, url) {
  return new Promise ( (resolve, reject) => {
  
      const body = JSON.stringify(query);
      const options = {
        headers: {
          'content-Type': 'application/json',
        },
        url: `${url}`,
        body,
      };
      request.post(options, (error, result, resBody) => {
        if (error) reject(error);
        var resbody = JSON.parse(result.body);
        resolve({result, resbody})
      });
});
};

}

module.exports = Consumers
