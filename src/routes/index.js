import app from "../app.js";

const router = (app)=>{
    app.route('/').get((req,res)=>{
        try {
            return res.status(200).json({message:"ta funcionando"});
        } catch (error) {
            return res.status(500).json(`fudeeoooo de vezzz ${error.message}`);
        }
        
    })

    
}


export default router;