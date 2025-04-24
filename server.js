const express = require("express");
const app = express();

app.use(express.json());
const PORT = 3000;

app.post('/login', (req, res) => {
    const{email, password} = req.body;

    if(!email || email.trim() === ""){
        return res.status(400).json({error: "Email can not be empty"});
    }

    if(!password || password.trim() === ""){
        return res.status(400).json({error: "Password can not be empty"});
    }

    res.status(201).json({message: "Login Successful"});
});

app.get('/', (req, res) => {
    res.json("Backend is deployed");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});