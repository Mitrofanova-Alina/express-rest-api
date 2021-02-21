const base = (data) => ({
    title: 'req',
    type: 'object',
    data
});

const authGET = () => {
    const query = {
        properties: {
            username: {
                type: 'string',
                minLength: 6,
                maxLength: 40
            },
            password: {
                type: 'string',
                minLength: 8,
                maxLength: 40
            }
        },
        additionalProperties: false,
        required: ['username', 'password'],
    };
    return base({ query });
}

const authPOST = () => {
    const body = {
        properties: {
            username: {
                type: 'string',
                minLength: 6,
                maxLength: 40
            },
            password: {
                type: 'string',
                minLength: 8,
                maxLength: 40
            }
        },
        additionalProperties: false,
        required: ['username', 'password'],
    };
    return base({ body });
}

module.exports = {
    post: authPOST(),
    get: authGET()
};