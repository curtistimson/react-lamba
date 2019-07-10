// import mongoose from 'mongoose';
// import entry from './models/entry';

// const DB_URI = process.env.DB_URI;

// const options = { 
//   keepAlive: true, 
//   keepAliveInitialDelay: 300000,
//   useNewUrlParser: true
// };


// function connectToDatabase () {
//   console.log('=> connect to database', DB_URI);

//   return new Promise((resolve, reject) => {
//     mongoose.connect(DB_URI, options)

//     mongoose.connection.on('connected', (r) => {
//       console.log('DB connected');
//       resolve();
//     });
//   });
// }


// export function handler(event, context, callback) {

//   connectToDatabase()
//     .then(() => {
//       entry.findOne({}, (err, result) => {
//         console.log('result', result);
//         mongoose.disconnect();
//         callback(null, {
//           statusCode: 200,
//           body: JSON.stringify(result)
//         });
//       });
//     });
// }


// productRead.js
import mongoose from 'mongoose'
// Load the server
import db from './server'
// Load the Product Model
import entry from './models/entry'
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {

    console.log('entry', entry);
    // Use Product.Model to find all products
    const entries = await entry.find(),
          response = {
            msg: "Entries successfully found",
            data: entries
          }
    
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
    
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}