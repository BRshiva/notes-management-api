const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");
const errorMiddleware = require("./middleware/errorMiddleware"); // ✅ lowercase

const app = express();

const helmet = require("helmet");
app.use(helmet());

const cors = require("cors");

app.use(
cors({
    origin: "*", // later restrict to frontend domain
    credentials: true,
})
);

const morgan = require("morgan");

if (process.env.NODE_ENV === "development") {
     app.use(morgan("dev"));
}

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Notes API is running",
  });
});
app.use(limiter);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorMiddleware);


module.exports = app;