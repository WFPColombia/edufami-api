console.log("models-create-sample-data...");
var server = require("./server");
var mysqlDs = server.dataSources.mysqlDs;
//create all models

async function createSampleData() {
  await createStaffUsers();
  await createUserAccounts();
  await createTrainings();
  await createUnits();
  console.log("\nAll sample data created successfully!!");
  mysqlDs.disconnect();
}

//create Staff Members
// Creating mock data for staff members
function createStaffUsers() {
  return new Promise((resolve, reject) => {
    var StaffUser = server.models.StaffUser;
    StaffUser.create(
      [
        {
          email: "admin@mail.com",
          username: "admin",
          password: "qwe123"
        }
      ],
      () => {
        console.log("StaffUser sample data created successfully.");
        resolve();
      }
    );
  });
}

//create App Users
// Creating mock data for createUserAccounts
function createUserAccounts() {
  return new Promise((resolve, reject) => {
    var UserAccount = server.models.UserAccount;
    UserAccount.create(
      [
        {
          email: "user@mail.com",
          username: "user",
          password: "qwe123"
        }
      ],
      () => {
        console.log("UserAccount sample data created successfully.");
        resolve();
      }
    );
  });
}

//create trainings
function createTrainings() {
  return new Promise((resolve, reject) => {
    var Training = server.models.Training;
    Training.create(
      [
        {
          id: 1,
          name: "Equfami para todos",
          image: "image4.png",
          app: "equfami",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend.",
          created: Date.now(),
          ownerId: 1
        }
        /*{
          id: 2,
          name: "Climafami para todos",
          image: "image5.png",
          app: "climafami",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend.",
          created: Date.now(),
          ownerId: 1
        },
        {
          id: 3,
          name: "Nutrifami para Todos",
          image: "image1.png",
          app: "nutrifami",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend.",
          created: Date.now(),
          ownerId: 1
        },
        {
          id: 4,
          name: "Nutrifami Pácifico",
          image: "image2.png",
          app: "nutrifami",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend.",
          created: Date.now(),
          ownerId: 1
        },
        {
          id: 5,
          name: "Nutrifami Senegal",
          image: "image3.png",
          app: "nutrifami",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend.",
          created: Date.now(),
          ownerId: 1
        }*/
      ],
      (err, trainings) => {
        console.log("Antes");
        //if (err) throw err;
        console.log("Training sample data created successfully." + trainings);
        resolve();
      }
    );
  });
}

// CreateUnits

function createUnits() {
  return new Promise((resolve, reject) => {
    var Unit = server.models.Unit;
    Unit.create(
      [
        {
          id: 1,
          name: "Alimentación Saludable",
          name_audio: "",
          description:
            "En este m&oacute;dulo identificaremos qu&eacute; es la alimentaci&oacute;n y de qu&eacute; se componen los alimentos",
          description_audio: "string",
          image_id: "string",
          status: "string",
          trainingId: 1
        },
        {
          id: 2,
          name: "Combinaciones Saludables",
          name_audio: "",
          description:
            "En este m&oacute;dulo identificaremos y haremos uso de combinaciones alimentarias saludables",
          description_audio: "string",
          image_id: "string",
          status: "string",
          trainingId: 2
        }
      ],
      () => {
        console.log("Unit sample data created successfully.");
        resolve();
      }
    );
  });
}

createSampleData();
