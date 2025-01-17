  
const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// secret key from firebase
const stripe = require("stripe")(
    'pk_test_51HXBCAKEKbO0XTXL43fWaVdtAI54G3PvJkMOmxPqiYxguYy6MgBRTC2n1wN8dS6ZJcm7VCc36A0DOlm3ktIFr5oj008emRuSJX'
    // your private api key here
);

// API

// - App Config
const app = express()

// - Middleware
app.use(cors({ origin: true }))
app.use(express.json())

// - API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log("PAyment request received for -> " + total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    })

    // ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen
exports.api = functions.https.onRequest(app)

// URL: http://localhost:5001/clone-36782/us-central1/api