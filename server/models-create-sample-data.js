console.log("models-create-sample-data...");
var server = require("./server");
var mysqlDs = server.dataSources.mysqlDs;

const INITIAL_DATA = require("./sampleData.json");

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
