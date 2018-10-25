const fs = require('fs');
const path = require('path');
const express  = require('express');
const csp = require('csp-header');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const readDirAsync = util.promisify(fs.readdir);

const CSP_HEADER_NAME = 'Content-Security-Policy';
const app = express();

app.get('/', async (req, res, next) => {
    try {
        const pages = await readDirAsync(path.join(__dirname, 'public', 'pages'));
        let response = '<ul>';
        pages.forEach((page) => {
            response += '<li><a href="/' + page + '">' + page + "</a></li>" 
        })
        response += '</ul>';
        res.set('Content-Type', 'text/html');
        res.send(response);
    } catch(e) {
        res.send('Error ' + e);
    }
})

app.get('*', async (req, res, next) => {
    const requestedPage = req.path.slice(1);
    try {
        const pages = await readDirAsync(path.join(__dirname, 'public', 'pages'));
        const page = pages.filter((file) => requestedPage === file)[0];
        if (!page) {
            return next();
        }
        const cspData = await readFileAsync(path.join(__dirname, 'public', 'pages', page, 'csp.json'));
        res.setHeader(CSP_HEADER_NAME, csp(JSON.parse(cspData.toString())));
        res.sendfile('index.html', {root: path.join(__dirname, 'public', 'pages', page)}, (err) => {res.end(); if (err) throw(err);});
    } catch(e) {
        res.send('Error ' + e);
    }
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 3000);

console.log('server started on port: ', process.env.PORT || 3000);