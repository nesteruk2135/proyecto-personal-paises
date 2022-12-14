const { expect, assert } = require("chai");
var should = require("chai").should();
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);

const countryTest = {
  name: "Neverland",
  idName: "NVL",
  flag: "dasdasdasd.png",
  continent: "America",
  capital: "Neverland",
  subregion: "North America",
  population: 10,
  area: 2,
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() => Country.create(countryTest))
  );
  describe("GET /countries", () => {
    it("Should return with status 200", () =>
      agent.get("/countries").expect(200));
    it("Should return with all the country information", async () => {
      let res = await agent.get("/countries?name=Neverland");
      let pais = await Country.findOne({
        where: {
          name: "Neverland",
        },
      });
      let neverland = pais.dataValues;
      expect(res.body[0].name).to.equal(neverland.name);
      expect(res.body[0].idName).to.equal(neverland.idName);
      expect(res.body[0].flag).to.equal(neverland.flag);
      expect(res.body[0].continent).to.equal(neverland.continent);
      expect(res.body[0].capital).to.equal(neverland.capital);
      expect(res.body[0].subregion).to.equal(neverland.subregion);
      expect(res.body[0].population).to.equal(neverland.population);
      expect(res.body[0].area).to.equal(neverland.area);
    });
    it("should get 404 if Country no exist", async () => {
      let res = await agent.get("/countries?name=dasdasda");
      expect(res.statusCode).to.equal(404);
    });
    it("should get error code 'COUNTRY_NOT_FOUND' and the description 'The entered country does not exist.' if Country no exist", async () => {
      let res = await agent.get("/countries?name=dasdasda");
      expect(res.text).to.equal(
        '{"error":"COUNTRY_NOT_FOUND","description":"the entered country does not exist."}'
      );
    });
  });
});
