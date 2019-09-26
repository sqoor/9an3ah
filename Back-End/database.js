// Import Mongoose Files
const mongoose = require('mongoose');
// Store 'mongoose.connection' in Variable Called "db".
const db = mongoose.connection;
// Connect This File To My DataBase.
mongoose.connect('mongodb://localhost/9an3ah-users', { useNewUrlParser: true })
  .then(() => {
    console.log('Mongoose Connected Successfully *.*');
    console.log('__________________________________________________')
  })
  .catch(error => { console.log(`${error} -_-`) });


// Create New Mongo Scheme To Store Our Data Inside It.
let workersSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    require: true
  },
  experience: {
    type: Number,
    required: true
  },
  field: {
    type: String,
    require: true
  },
  hourlyFare: {
    type: Number,
    require: true
  }
})

// Store The Scheme In Variable To Deal With This Variable.
let Workers = mongoose.model('Workers', workersSchema);

// @METHOD 'getWorkers'
// Return All Workers.
let getWorkers = (callBack) => {
  console.log(callBack);
  Workers.find({}, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      callBack(response);
    }
  })
}

// @METHOD 'findWorkers'
// Return Specific Workers.
let findWorkers = (searchObject, callBack) => {
  console.log(callBack);
  Workers.find(searchObject, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      callBack(response);
    }
  })
}

// @METHOD 'findOneWorker'
// Return One Worker By His ID.
let findOneWorker = (workerID, callBack) => {
  console.log(callBack);
  Workers.find({ _id: workerID }, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      callBack(response);
    }
  })
}


// @METHOD
// Add Specific Worker.
let addNewWorker = (newWorker, callBack) => {
  Workers.create(newWorker, (error, response) => {
    if (error) {
      callBack(error)
    } else {
      getWorkers(callBack)
    }
  })
}

// @ METHOD
// Update Worker Information.
let updateWorkerInfo = (workerID, newWorkerInfo, callBack) => {
  console.log('Workers', Workers)
  Workers.updateMany({ _id: workerID }, {
    $set: {
      fullName: newWorkerInfo.fullName,
      email: newWorkerInfo.email,
      password: newWorkerInfo.password,
      phoneNumber: newWorkerInfo.phoneNumber,
      location: newWorkerInfo.location,
      experience: newWorkerInfo.experience,
      field: newWorkerInfo.field,
      hourlyFare: newWorkerInfo.hourlyFare
    }
  }, (error, response) => {
    if (error) {
      callBack(error)
    } else {
      getWorkers(callBack)
    }
  })
}

// @ METHOD
// Delete Specific Worker.
let deleteWorkerAccount = (workerID, callBack) => {
  Workers.findOneAndDelete({ _id: workerID }, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      getWorkers(callBack);
    }
  })
}

// Export Our "Database Methods" To Deal With It In Our "Express Server".
module.exports = {
  getWorkers,
  addNewWorker,
  updateWorkerInfo,
  deleteWorkerAccount,
  findWorkers,
  findOneWorker
}