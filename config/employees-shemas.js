const base = (data) => ({
    title: 'req',
    type: 'object',
    data
});

const employeePOST = () => {
    const body = {
        properties: {
            name: {
                type: 'string',
                minLength: 1,
                maxLength: 100
            },
            surname: {
                type: 'string',
                minLength: 1,
                maxLength: 100
            },
            birthDate: {
                type: 'string',
                length: 10
            },
            position: {
                type: 'string',
                maxLength: 100
            },
            salary: {
                type: 'number',
                exclusiveMinimum: 0
            }
        },
        additionalProperties: false,
        required: ['name', 'surname', 'birthDate', 'position', 'salary']
    };
    return base({ body });
};

const employeeGET = () => {
    const params = {
        properties: {
            id: {
                type: 'string'
            }
        },
        additionalProperties: false,
        required: ['id']
    };
    return base({params});
}

const employeesGET = () => {
    const params = {
        properties: {
            id: {
                type: 'string'
            }
        },
        additionalProperties: false,
        required: ['id']
    };
    const query = {
        properties: {
            name: {
                type: 'string',
                minLength: 1,
                maxLength: 100
            },
            surname: {
                type: 'string',
                minLength: 1,
                maxLength: 100
            },
            pageNum: {
                type: 'number',
                exclusiveMinimum: 0
            }
        },
        additionalProperties: false,
        // required: ['name', 'surname', 'birthDate', 'position', 'salary']
    };
    return base({ query });
};

const employeePUT = () => {
    const params = {
        properties: {
            id: {
                type: 'string'
            }
        },
        additionalProperties: false,
        required: ['id']
    };
    const body = {
        properties: {
            name: {
                type: 'string',
                minLength: 1,
                maxLength: 100
            },
            surname: {
                type: 'string',
                minLength: 1,
                maxLength: 100
            },
            birthDate: {
                type: 'string',
                length: 10
            },
            position: {
                type: 'string',
                maxLength: 100
            },
            salary: {
                type: 'number',
                exclusiveMinimum: 0
            }
        },
        additionalProperties: false,
        // required: ['name', 'surname', 'birthDate', 'position', 'salary']
    };
    return base({ params, body });
};

const employeeDELETE = () => {
    const params = {
        properties: {
            id: {
                type: 'string'
            }
        },
        additionalProperties: false,
        required: ['id']
    };
    return base({params});
}



module.exports = {
    post: employeePOST(),
    getAll: employeesGET(),
    getOne: employeeGET(),
    put: employeePUT(),
    delete: employeeDELETE()
};