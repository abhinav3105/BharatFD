const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const faqRoutes = require("./routes/faqRoutes");
const connectDB = require("./config/db");
const { client } = require("./config/redis");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/faqs", faqRoutes);

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));