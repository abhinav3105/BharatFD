const request = require("supertest");
const app = require("../server");
describe("GET /api/faqs", () => {
  it("should return a list of FAQs", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.statusCode).toBe(200);
  });
});
