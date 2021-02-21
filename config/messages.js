const employeeMsg = {
    NOT_FOUND: id => `The employee with ID = ${id} was not found in the database 'Employees'.`,
    NO_COLLECTION: "The 'Employees' collection was not found in the database 'Employees'. "
};

const userMsg = {
    NOT_FOUND: username => `The user ${username} does not exist.`
};

const authMsg = {
    INVALID_TOKEN: 'This is invalid token in service.',
    INVALID_DATA: 'This is invalid data',
    BAD_DATA: 'Login or password is incorrect, try again please.'
};

const validMsg = {
    BAD_DATA: 'Validation failed.'
}

module.exports = {
    employeeMsg,
    userMsg,
    authMsg,
    validMsg
};