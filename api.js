const express = require("express");
const app = express();
const uuidAPIKey = require("uuid-apikey");

const server = app.listen(3001, () => {
  console.log("Start Server:");
});

console.log(uuidAPIKey.create());

const key = {
  apiKey: "N38Z247-6HRMJ60-HRJTY64-P4TWF3F",
  uuid: "a8d1f110-3471-4918-8e25-af18b135c78d",
};

app.get("/api/users/:apikey/:type", async (req, res) => {
  let { 
    apikey,
    type 
  } = req.params;

  if(uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    res.send('apikey is not valid.')
  } else {
    if (type == "seoul") {
      let data = [
        { name: "홍길동", city: "seoul" },
        { name: "김진환", city: "seoul" },
      ];
      res.send(data);
    } else if (type == "jeju") {
      let data = [{ name: "제주도", city: "jeju" }];
      res.send(data);
    }
  };
  //console.log(type);
});
