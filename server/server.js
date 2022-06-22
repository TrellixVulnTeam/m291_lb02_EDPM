/*
Multipurpose Server
 */

let express = require("express");
let app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://nodejs.org/api/path.html
const path = require('path');

//Warning: Korrekt setzen!!
const staticPath = './data/';


//Handle CORS Requests
const cors = require("cors");
let corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/test', (req, res) => {
    let fileLoc = path.resolve(staticPath+'test.txt');
    fs.readFile(fileLoc, 'utf8',
        (err, text) => {
            res.send(text);
    });
});

app.get('/v1/products', (req, res) => {
    let fileLoc = path.resolve(staticPath+'products-1.json');
    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Fehler und hier die Fehlermeldung: ${error}`);
            res.send(`Ein Fehler ist passiert! Benachrichtigen Sie den Admin.`);
        } else {
            try {
                console.log(text);
                res.send(text);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});

app.get('/v1/marks/:id', (req, res) => {
    let fileLoc = path.resolve(staticPath+'marks-1.json');
    //student-ID
    let sid = req.params.id;

    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Error ${error}`);
        } else {
            try {
                const obj = JSON.parse(text);
                let studentData = {};
                studentData.sid = "DOES NOT EXIST!";
                for (let row in obj.marks_school){
                    if (obj.marks_school[row].sid === parseInt(sid)){
                        //set student ID
                        studentData.sid = obj.marks_school[row].sid;
                        //init moduleList (array) for storing module
                        studentData.moduleList = [];
                        let counter = 0;
                        let sum = 0;
                        for (let mod in obj.marks_school[row].modules){
                            let module = obj.marks_school[row].modules[mod];
                            //create specific module object
                            let marks = {
                                "mid": module.mid,
                                "title": module.title,
                                "mark": Number(module.mark).toFixed(2)
                            };
                            //save module object
                            studentData.moduleList.push(marks);
                            //compute sum of all marks in json-file
                            sum += parseFloat(module.mark); counter++;
                        }
                        //save computed average
                        studentData.average = (sum/counter).toFixed(2);
                        break;
                    }
                }
                //send complete object as json with sid, mid, title, mark and average to the client
                res.send(JSON.stringify(studentData, null, 4));
            } catch (e) {
                console.error(`Invalid JSON in file: ${e}`);
            }
        }
    });
});