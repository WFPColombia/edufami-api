console.log("models-create-sample-data...");
var server = require("./server");
var mysqlDs = server.dataSources.mysqlDs;

const INITIAL_DATA = {
  AppUsers: {
    name: "AppUser",
    data: [
      {
        firstName: "User",
        lastName: "LastName",
        email: "user@dev.com",
        username: "user",
        password: "qwe123",
        terms: true,
      },
    ],
  },
  staffUsers: {
    name: "StaffUser",
    data: [
      {
        email: "admin@mail.com",
        username: "admin",
        password: "qwe123",
      },
    ],
  },
  trainings: {
    name: "Training",
    data: [
      {
        name: "Equfami para todos",
        image: "image4.png",
        app: "equfami",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend.",
        created: Date.now(),
        ownerId: 1,
      },
    ],
  },
  units: {
    name: "Unit",
    data: [
      {
        name: "Alimentación Saludable",
        name_audio: "",
        description:
          "En este m&oacute;dulo identificaremos qu&eacute; es la alimentaci&oacute;n y de qu&eacute; se componen los alimentos",
        description_audio: "string",
        image_id: "string",
        status: "string",
        trainingId: 1,
      },
      {
        name: "Combinaciones Saludables",
        name_audio: "",
        description:
          "En este m&oacute;dulo identificaremos y haremos uso de combinaciones alimentarias saludables",
        description_audio: "string",
        image_id: "string",
        status: "string",
        trainingId: 2,
      },
    ],
  },
};

async function createSampleData() {
  try {
    await addSampleDataToModel(
      INITIAL_DATA.staffUsers.name,
      INITIAL_DATA.staffUsers.data
    );
    await addSampleDataToModel(
      INITIAL_DATA.appUsers.name,
      INITIAL_DATA.appUsers.data
    );
    await addSampleDataToModel(
      INITIAL_DATA.trainings.name,
      INITIAL_DATA.trainings.data
    );
    await addSampleDataToModel(
      INITIAL_DATA.units.name,
      INITIAL_DATA.units.data
    );

    console.log("\nAll sample data created successfully!!");
  } catch (error) {
    console.log("\nError");
  }

  mysqlDs.disconnect();
}

const addSampleDataToModel = (modelName, data) => {
  return new Promise((resolve, reject) => {
    const model = server.models[modelName];
    model.create(data, (error) => {
      if (error) {
        console.log(error);
        reject();
      } else {
        console.log(`${modelName} Sample data created successfully`);
        resolve();
      }
    });
  });
};

createSampleData();
