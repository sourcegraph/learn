export const fetchEndpoint = async (url: string, token: string, query: string): Promise<any> => {
    const data = '"query": "query { currentUser { username } }"'
    const defaultOptions = {
        method: 'POST',
        headers: { 
            Authorization: `token-sudo user="SUDO_TO_USERNAME",token=${token}`,
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XmlHttpRequest',
            'Access-Control-Allow-Origin': '*',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "Sourcegraph",
            "x-sourcegraph-client": "http://192.168.1.206:7080",
            "x-sourcegraph-should-trace": "false"
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
        console.error(response.statusText);
        console.error(response.status)
        throw new Error(`Failed to fetch API: ${url}`);
    }

    return response;
};
  
export const fetchResults = async (url: string, token: string, query: string): Promise<any> => {
    const response = await fetchEndpoint(url, token, query);
    console.log(response)
    const results = await JSON.parse(JSON.stringify(response));
    console.log(results)

    /*if (results.errors) {
        console.error(results.errors);
        throw new Error(`Failed to fetch API: ${url}`);
    } */

    return {};
};

  