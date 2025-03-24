

async function requester(method, url, data, options = {}) {
    //const options = {};
    //const token = localStorage.getItem('token');   

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        // options.headers = {
        //     ...options.headers,
        //     'Content-Type': 'application/json'
        // };

        // options.body = JSON.stringify(data)
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        }
    }

    
    const response = await fetch(url, options);

    // if (response.status === 204) {
    //     return;
    // }
    const responseContentType = response.headers.get('Content-Type');
    if (!responseContentType) {
        return;
    }

    const result = await response.json();

    // if (!response.ok) {
    //     throw result;
    // }

    return result;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

/*export default {
    get,
    post,
    put,
    del
};
*/