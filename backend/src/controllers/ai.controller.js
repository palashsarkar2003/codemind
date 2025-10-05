// import aiService from "../services/ai.service.js"

// const getReview = async(req,res)=>{
//     const code = req.body.code;
//     if(!code){
//         return res.status(400).send("code is required");
//     }
//     const response = await aiService(code);

//     res.send(response);
// }

// export default getReview;

import aiService from "../services/ai.service.js";

const getReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const response = await aiService(code);
    res.json({ result: response });
  } catch (error) {
    console.error("❌ Review error:", error.message);
    res.status(500).json({ error: "Failed to generate review" });
  }
};

export default getReview;
