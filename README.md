# WebTechLab

Web Technology coursework (SNU Chennai, B.Tech CSE-IoT) — one folder per weekly lab, covering static HTML/CSS, vanilla JavaScript, Angular, React, and Node.js/Express backends (one with MongoDB).

## Labs

| Lab | Topic | Stack |
|---|---|---|
| `Lab1` | Static HTML: a personal CV page, and an image gallery ("Trial") | HTML |
| `Lab2` | HTML/CSS styling: a styled CV, a contact form, a trial layout | HTML, CSS |
| `Lab3` | JavaScript fundamentals: Armstrong-number checker, form validation, palindrome checker | JavaScript |
| `Lab4` | Angular tutorial app: a housing-listings app with home/details components, routing, and a data service | Angular |
| `Lab5` | Todo-list app | React, Vite |
| `Lab6` | Static file server built on the raw `http`/`fs` modules, with manual content-type resolution | Node.js |
| `Lab7` | Routed server (home/about/image routes) | Node.js, Express |
| `Lab8` | REST API for student records (CRUD) backed by MongoDB via Mongoose | Node.js, Express, MongoDB |
| `Lab10` | Multi-step sign-in UI (X/Twitter login clone) | React |

`Lab9` isn't present in this repo.

## Running a lab

- **Lab1-3** (HTML/CSS/vanilla JS): open the `main.html` file directly, or serve the folder with any static file server.
- **Lab4** (Angular): `cd Lab4/AngularApp && npm install && ng serve`
- **Lab5** (Vite/React): `cd Lab5 && npm install && npm run dev`
- **Lab6-7** (Node.js): `cd Lab6` (or `Lab7`) `&& npm install && node server.js`
- **Lab8** (Node.js + MongoDB): requires a local MongoDB instance at `mongodb://localhost:27017` — `cd Lab8 && npm install && node server.js`
- **Lab10** (React): `cd Lab10 && npm install && npm start`
