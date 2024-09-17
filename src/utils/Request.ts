const get = async (url: string) => {
    const response = await fetch(url);
    return response.json();
};

const post = async (url: string, headers: any, body: any) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    });
    return response.json();
}

class ApiCall {
    static get = get;
    static post = post;
    
}



export interface AboutMe {
    full_name: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number_ext: string;
    phone_number: string;
    address: string;
    about: {
        title: string;
        description: string;
    }[];
    image: string | null;
    resume: string | null;
    projects: string[];
}


export default ApiCall;