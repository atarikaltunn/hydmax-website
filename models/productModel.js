const mongoose = require('mongoose');

const excelTableModel = mongoose.model('ExcelTable', {
  columnName1: String,
  columnName2: String,
  // Add more columns as needed
});

module.exports = excelTableModel;
