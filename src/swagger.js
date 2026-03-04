const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notes Management API",
      version: "1.0.0",
      description:
        "API for managing notes with authentication and role-based access.",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [path.join(__dirname, "routes", "*.js")], // ✅ absolute path
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;