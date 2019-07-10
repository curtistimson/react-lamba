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