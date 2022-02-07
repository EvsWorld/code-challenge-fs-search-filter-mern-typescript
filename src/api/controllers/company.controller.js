import fs from "fs";

export const findAll = (req, res) => {
  const jsonData = fs.readFileSync(
    __dirname + "/../db/companiesWithArrays.json",
    "utf-8"
  );
  const companies = JSON.parse(jsonData);
  console.log("companies :>> ", companies);
  res.send(companies);
};
