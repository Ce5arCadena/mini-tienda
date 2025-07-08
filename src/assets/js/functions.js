const fetchApi = async (URL, method = 'GET', body = null) => {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (method !== 'GET' && body !== null) {
            options.body = JSON.stringify(body);
        }
        
        const response = await fetch(URL, options);
        return await response.json();
    } catch (error) {
        console.log(error);
        return false;
    };
};

export const getProduct = async (id) => {
    try {
        const result = await fetchApi('./src/api/Products/getProduct.php?id='+id);

        if (result.data <= 0) return;

        return result.data;

        console.log('✖️✖️✖️', result);
    } catch (error) {
        
    };
};
