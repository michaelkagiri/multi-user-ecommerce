import express from "express"
import cors from "cors"
import {ENV} from "./config/env"
import { clerkMiddleware } from "@clerk/express";
import userRoute from "./routes/userRoutes";
import productRoute from "./routes/productsRoutes";
import commentRoute from "./routes/commentsRoutes";
import path from "path"

const app = express();

app.use(cors({origin: ENV.FRONTEND_URL,credentials: true}))
app.use(clerkMiddleware()); //auth object will be attached to the (req)
app.use(express.json()); //request bodies
app.use(express.urlencoded({extended: true})); //parses form data like html forms

if(ENV.NODE_ENV === "production"){
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
app.use("/api/comments",commentRoute)


app.listen(ENV.PORT, () => console.log("SERVER IS RUNNING ON PORT 3000")
)