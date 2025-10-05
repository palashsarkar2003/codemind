import express from "express";
import aiRoutes from "./routes/ai.route.js"
const app = express();
import cors from "cors"
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
}));
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Homepage");
})

app.use("/ai",aiRoutes)

export default app;
