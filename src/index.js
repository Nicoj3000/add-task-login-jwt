import app from "./app.js";
import { connectDB } from "./db.js";
//Conectamos server backend al puerto 3000
app.listen(3000);
connectDB();

console.log("server on port", 3000);
