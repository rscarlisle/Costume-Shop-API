const fs = require('fs')
const path = require('path')
const costumeShop = '../../costume-shop/'
const uuid = require('uuid/v4')

getAll = (limit) => {
    const costumeArray = JSON.parse(fs.readFileSync(path.join(__dirname, costumeShop, 'costumes.json'), 'utf-8'));
    const displayHowMany = (!limit) ? costumeArray : (limit > costumeArray.length) ? { status: 400, message: `Cannot list costumes of value ${limit}`, error: 'Bad request' } : costumeArray.slice(0, limit);  
    return displayHowMany
  }

module.exports = { 
    getAll
    // create, getById, update, deleteById 
};