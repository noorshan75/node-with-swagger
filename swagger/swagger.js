module.exports = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Backend", // Title (required)
            version: '1.0.0', // Version (required)
            description: '1.0.0' 
        }
    },
    apis: ['./swagger/*.js'],
    servers: [
        "http://localhost:3306"
    ]
}