import express from "express"
import cors from "cors"
import {ENV} from "./config/env"
import { clerkMiddleware } from "@clerk/express";
import userRoute from "./routes/userRoutes";
import productRoute from "./routes/productsRoutes";
import commentRoute from "./routes/commentsRoutes";

const app = express();

app.use(cors({origin: ENV.FRONTEND_URL,credentials: true}))
app.use(clerkMiddleware()); //auth object will be attached to the (req)
app.use(express.json()); //request bodies
app.use(express.urlencoded({extended: true})); //parses form data like html forms

app.get("/", (req,res) => {
    res.json({
        message: "welcome to online market",
        endpoints: {
            users: "/api/user",
            products: "/api/products",
            comments: "/api/comments",
        },
    })
});

app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
app.use("/api/comments",commentRoute)


app.listen(ENV.PORT, () => console.log("SERVER IS RUNNING ON PORT 3000")
)