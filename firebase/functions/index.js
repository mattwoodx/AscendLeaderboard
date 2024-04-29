const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));

// Database
const db = admin.firestore();

app.get("/api/getAllAceMale", (request, res) => {
  (async () => {
    try {
      const query = db.collection("ACE_MALE");
      const response = [];

      await query.get().then((data) => {
        const docs = data.docs;
        docs.map((doc) => {
          const selectedItem = {
            teamName: doc.data().teamName,
            minutes: doc.data().minutes,
            seconds: doc.data().seconds,
          };

          response.push(selectedItem);
        });
        response.sort(GetSortOrder('minutes', 'seconds'));
        let pos = 0;
        for (let i = 0; i < response.length; i++) {
          if (i > 0 && response[i].minutes != -1) {
            if (response[i].minutes == response[i-1].minutes && response[i].seconds == response[i-1].seconds) {
              response[i].position = pos;
            } else {
              response[i].position = ++pos;
            }
          } else {
            response[i].position = ++pos;
          }
        }
        return response;
      });
      return res.status(200).send({status: "Success", data: response});
    } catch (error) {
      console.log(error);
      return res.status(500).send({status: "Unable to fetch scores"});
    }
  })();
});

app.get("/api/getAllAceFemale", (request, res) => {
  (async () => {
    try {
      const query = db.collection("ACE_FEMALE");
      const response = [];

      await query.get().then((data) => {
        const docs = data.docs;
        docs.map((doc) => {
          const selectedItem = {
            teamName: doc.data().teamName,
            minutes: doc.data().minutes,
            seconds: doc.data().seconds,
          };

          response.push(selectedItem);
        });
        response.sort(GetSortOrder('minutes', 'seconds'));
        let pos = 0;
        for (let i = 0; i < response.length; i++) {
          if (i > 0 && response[i].minutes != -1) {
            if (response[i].minutes == response[i-1].minutes && response[i].seconds == response[i-1].seconds) {
              response[i].position = pos;
            } else {
              response[i].position = ++pos;
            }
          } else {
            response[i].position = ++pos;
          }
        }
        return response;
      });
      return res.status(200).send({status: "Success", data: response});
    } catch (error) {
      console.log(error);
      return res.status(500).send({status: "Unable to fetch scores"});
    }
  })();
});

app.get("/api/getAllRookieMale", (request, res) => {
  (async () => {
    try {
      const query = db.collection("ROOKIE_MALE");
      const response = [];

      await query.get().then((data) => {
        const docs = data.docs;
        docs.map((doc) => {
          const selectedItem = {
            teamName: doc.data().teamName,
            minutes: doc.data().minutes,
            seconds: doc.data().seconds,
          };

          response.push(selectedItem);
        });
        response.sort(GetSortOrder('minutes', 'seconds'));
        let pos = 0;
        for (let i = 0; i < response.length; i++) {
          if (i > 0 && response[i].minutes != -1) {
            if (response[i].minutes == response[i-1].minutes && response[i].seconds == response[i-1].seconds) {
              response[i].position = pos;
            } else {
              response[i].position = ++pos;
            }
          } else {
            response[i].position = ++pos;
          }
        }
        return response;
      });
      return res.status(200).send({status: "Success", data: response});
    } catch (error) {
      console.log(error);
      return res.status(500).send({status: "Unable to fetch scores"});
    }
  })();
});

app.get("/api/getAllRookieFemale", (request, res) => {
  (async () => {
    try {
      const query = db.collection("ROOKIE_FEMALE");
      const response = [];

      await query.get().then((data) => {
        const docs = data.docs;
        docs.map((doc) => {
          const selectedItem = {
            teamName: doc.data().teamName,
            minutes: doc.data().minutes,
            seconds: doc.data().seconds,
          };

          response.push(selectedItem);
        });
        response.sort(GetSortOrder('minutes', 'seconds'));
        let pos = 0;
        for (let i = 0; i < response.length; i++) {
          if (i > 0 && response[i].minutes != -1) {
            if (response[i].minutes == response[i-1].minutes && response[i].seconds == response[i-1].seconds) {
              response[i].position = pos;
            } else {
              response[i].position = ++pos;
            }
          } else {
            response[i].position = ++pos;
          }
        }
        return response;
      });
      return res.status(200).send({status: "Success", data: response});
    } catch (error) {
      console.log(error);
      return res.status(500).send({status: "Unable to fetch scores"});
    }
  })();
});


//  sort teams
function GetSortOrder(minutes, seconds) {    
  return function(a, b) {
    if (a[minutes] < 0) {
      return 1;
    }

    if (b[minutes] < 0) {
      return -1;
    }
    if (a[minutes] == b[minutes]) {
      if (a[seconds] > b[seconds]) {    
        return 1;    
      } else if (a[seconds] < b[seconds]) { 
          return -1;    
      }    
      return 0;    
    } else {
      if (a[minutes] > b[minutes]) {    
        return 1;    
      } else if (a[minutes] < b[minutes]){
        return -1;
      } else {
        return 0;
      }
    }
  }    
}   

// ACE MALE
app.post("/api/createTeam", (request, response) => {
  (async () => {
    try {
      const newDoc = db.collection(request.body.division).doc(request.body.teamName);
      const data = {
        teamName: request.body.teamName,
        minutes: -1,
        seconds: -1,
      };
      await newDoc.set(data);
      response.status(200).send({status: "Team created successfully"});
    } catch (error) {
      console.log(error);
      return response.status(500).send({status: "Team Creation Failed"});
    }
  })();
});

// app.put("/api/addTime", (request, response) => {
//   (async () => {
//     try {
//       const newDoc = db.collection(request.body.division).doc(request.body.teamName);
//       const data = {
//         teamName: request.body.teamName,
//         minutes: request.body.minutes,
//         seconds: request.body.seconds,
//       };
//       await newDoc.update(data);
//       response.status(200).send({status: "Team "+request.body.teamName+
//           " time added successfully"});
//     } catch (error) {
//       console.log(error);
//       return response.status(500).send({status: "Team Creation Failed"});
//     }
//   })();
// });

// Export
exports.app = functions.region("europe-west1").https.onRequest(app);
