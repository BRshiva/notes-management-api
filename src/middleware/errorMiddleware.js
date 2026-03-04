const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
    success: false,
    message: err.message,
    error: process.env.NODE_ENV === "development" ? err : {}, // Show stack trace in development
    status: err.status
     || "Internal Server Error",
});
};

module.exports = errorHandler;