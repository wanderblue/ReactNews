const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/apiRoutes");
//const apiRoutes1 = require("./api1");
// API Routes
router.use("/api", apiRoutes);
//router.use("/api1", apiRoutes1);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;