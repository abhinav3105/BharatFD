const FAQ = require("../models/faqModel");
const { client } = require("../config/redis");
exports.getFAQs = async (req, res) => {
  const lang = req.query.lang || "en";
  client.get(`faqs-${lang}`, async (err, cachedData) => {
    if (cachedData) return res.json(JSON.parse(cachedData));
    const faqs = await FAQ.find({});
    client.setex(`faqs-${lang}`, 3600, JSON.stringify(faqs));
    res.json(faqs);
  });
};
exports.createFAQ = async (req, res) => {
  const { question, answer } = req.body;
  const newFAQ = new FAQ({ question, answer });
  await newFAQ.save();
  res.status(201).json({ message: "FAQ added" });
};