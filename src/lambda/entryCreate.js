// productCreate.js
import mongoose from 'mongoose'
// Load the server
import db from './server'
// Load the Product Model
import entry from './models/entry';
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {

    await entry.create({
      _id: mongoose.Types.ObjectId(),
      description: "test12345"
    });
    return {
      statusCode: 201,
      body: JSON.stringify({ "success": true })
    }
  } catch (err) {
    console.log('product.create', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}