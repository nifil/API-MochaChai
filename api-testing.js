const { resourceLimits } = require("worker_threads");

const request_url = require("supertest")("https://restful-booker.herokuapp.com");
const assert = require("chai").expect;

describe("Booking Functionality", function(){
    it("Success Create Booking", async function(){

        const response = await request_url
            .post("/booking")
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .send({
                "firstname" : "Nifil",
                "lastname" : "Afrisma",
                "totalprice" : 100000,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2023-04-16",
                    "checkout" : "2023-04-17"
                },
                "additionalneeds" : "Lunch"
            });
        
        assert(response.statusCode).to.eql(200);
    });
    it("Get Single Booking", async function(){

        const response = await request_url
            .get("/booking/3")
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .send();

        assert(response.statusCode).to.eql(200);
    });
    it("Get Booking IDs", async function(){

        const response = await request_url
            .get("/booking")
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .send();

        assert(response.statusCode).to.eql(200);
    });
});

// Install Package
// npm install mocha -g
// npm install chai
// npm install mocha chai supertest --save-dev

// run file: npx mocha <nama_file.js> (npx mocha api-testing.js)

// Expect result:
//      Booking Functionality
//          ✔ Success Create Booking (....ms)
//          ✔ Get Single Booking (....ms)
//          ✔ Get Booking IDs (....ms)


//        3 passing (3s)