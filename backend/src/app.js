import express from "express";
import aiRoutes from "./routes/ai.route.js"
const app = express();
import cors from "cors"
app.use(cors({
  origin: "https://codemind-rho.vercel.app", // frontend URL
}));
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Homepage");
})

app.use("/ai",aiRoutes)

export default app;
