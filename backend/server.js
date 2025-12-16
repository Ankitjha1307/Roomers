import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/index.js";
import userRoutes from "./routes/user.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";
import preferenceRoutes from "./routes/preference.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors()); 
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/preferences", preferenceRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
