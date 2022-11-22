const request = require("supertest");
const app = require("./routes/User");
const mongoose = require("mongoose");
const { connect } = require("superagent");
const { config } = require("dotenv");

describe("Test The Root Path", () => {
  test("It should response the POST method", () => {
    const response = request(app).post("http://localhost:8000/User/add").send({
      Name: "Obaid",
      Email: "obaid",
      Age: 12,
      Contact: 123,
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("post");
  });
});

describe("Test The Delete By ID", () => {
  test("It should response the DELETE method", () => {
    const response = request(app).delete("http://localhost:8000/User/:id");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test The Root Path", () => {
  test("It should response the POST method", () => {
    const response = request(app).post("http://localhost:8000/User/add").send({
      Name: "Usman",
    });
    expect(response.body.toEqual("Usman").statusCode).toBe(200);
  });
});
