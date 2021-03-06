import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";

const __dirname = path.resolve();


const PORT = process.env.PORT || 5000
const app = express()


app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true
}))


app.use(express.json())
// app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'frontend/build')))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"))
})

mongoose.connect("mongodb+srv://admin:admin@cluster0.ohcal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const Score = mongoose.model('Score', {
    format: String,
    runs: Number,
    overs: Number,
    teamA: String,
    teamB: String,
    battingteam: String,
    wicket: Number,
    batsmanA: String,
    batsmanB: String,
    batsmanAruns: Number,
    batsmanBruns: Number,
    bowlerA: String,
    bowlerB: String,
    batsmanAballs: Number,
    batsmanBballs: Number,
    bowlerAruns: Number,
    bowlerBruns: Number,
    bowlerAover: Number,
    bowlerBover: Number,
    target: Number,
    runrate: Number,
    bowlerAwickets: Number,
    bowlerBwickets: Number,
    created: { type: Date, default: Date.now },

});








app.post("/api/v1/post", (req, res) => {
    const newScore = new Score({
        format: req.body.format,
        runs: req.body.runs,
        overs: req.body.overs,
        teamA: req.body.teamA,
        teamB: req.body.teamB,
        battingteam: req.body.battingteam,
        wicket: req.body.wicket,
        batsmanA: req.body.batsmanA,
        batsmanB: req.body.batsmanB,
        batsmanAruns: req.body.batsmanAruns,
        batsmanBruns: req.body.batsmanBruns,
        batsmanAballs: req.body.batsmanAballs,
        batsmanBballs: req.body.batsmanBballs,
        bowlerA: req.body.bowlerA,
        bowlerB: req.body.bowlerB,
        bowlerAruns: req.body.bowlerAruns,
        bowlerBruns: req.body.bowlerBruns,
        bowlerAover: req.body.bowlerAover,
        bowlerBover: req.body.bowlerBover,
        bowlerAwickets: req.body.bowlerAwickets,
        bowlerBwickets: req.body.bowlerBwickets,
        target: req.body.target,
        runrate: req.body.runrate,
    });
    newScore.save().then(() => {
        console.log("Score created");

        io.emit("POSTS", {
            format: req.body.format,
            runs: req.body.runs,
            overs: req.body.overs,
            teamA: req.body.teamA,
            teamB: req.body.teamB,
            battingteam: req.body.battingteam,
            wicket: req.body.wicket,
            batsmanA: req.body.batsmanA,
            batsmanB: req.body.batsmanB,
            batsmanAruns: req.body.batsmanAruns,
            batsmanBruns: req.body.batsmanBruns,
            batsmanAballs: req.body.batsmanAballs,
            batsmanBballs: req.body.batsmanBballs,
            bowlerA: req.body.bowlerA,
            bowlerB: req.body.bowlerB,
            bowlerAruns: req.body.bowlerAruns,
            bowlerBruns: req.body.bowlerBruns,
            bowlerAover: req.body.bowlerAover,
            bowlerBover: req.body.bowlerBover,
            bowlerAwickets: req.body.bowlerAwickets,
            bowlerBwickets: req.body.bowlerBwickets,
            target: req.body.target,
            runrate: req.body.runrate,
        });


        res.send("Score created");
    });
})


app.get("/api/v1/post", (req, res) => {

    Score.find()
        .sort({ created: "desc" })
        .limit(1)
        .then(admdata => res.json(admdata))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get("/api/v1/score", (req, res) => {
    // const page = Number(req.query.page);

    Score.findOne({})
        .sort({ _id: "desc" })
        .exec(function (err, data) {
            res.send(data);
        });
});



app.get("/**", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"))
    // res.redirect("/")
})


// app.listen(PORT, () => {
//     console.log(`Example app listening at http://localhost:${PORT}`)
// })
























const server = createServer(app);

const io = new Server(server, { cors: { origin: "*", methods: "*", } });

io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);

    // to emit data to a certain client
    socket.emit("topic 1", "some data")

    // collecting connected users in a array
    // connectedUsers.push(socket)

    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});

setInterval(() => {

    // to emit data to all connected client
    // first param is topic name and second is json data
    io.emit("Test topic", { event: "ADDED_ITEM", data: "some data" });
    console.log("emiting data to all client");

}, 2000)


server.listen(PORT, function () {
    console.log("server is running on", PORT);
})