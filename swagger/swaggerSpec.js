const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Buy A Bob Paypal API",
    version: "1.0.0",
    description: "The paypal API for the Buy A Bob application.",
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [{
      bearerAuth: []
  }],
  servers: [
    {
      url: process.env.BASE_URL || "http://localhost:3000",
    },
  ],
  tags: [
    {
      name: "Buy A Bob",
      description: "API for Paypal processing",
    },
  ],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

const options = {
  definition: swaggerDocument,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

exports.default = swaggerSpec;
