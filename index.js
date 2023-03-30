const xlsx = require('node-xlsx');
const fs = require('fs');
const excelFiles = require('./config');

// 對Config檔中每個Excel做處理
excelFiles.forEach((filename) => {
  console.log(`Handle ${filename} begin!`);

  processExcelFile(filename);

  console.log(`Handle ${filename} done!`);
});

// 處理excel檔案
function processExcelFile(filename) {
  // 讀取excel
  const excelSheets = xlsx.parse(`${__dirname}/${filename}`);
  // 對每個sheet做處理
  excelSheets.forEach((sheet) => {
    console.log(`Read sheet ${sheet.name}`);

    const rowCount = sheet['data'].length;
    // 儲存第二列的Key
    const jsonFiels = sheet['data'][1];
    const jsonOutput = [];

    //從第三列開始讀取內容(第一列是說明，第二列是Key)
    for (var rowIndex = 2; rowIndex < rowCount; rowIndex++) {
      const row = sheet['data'][rowIndex];
      //組合 json
      jsonOutput.push(
        row.reduce((acc, cur, curIndex) => {
          // 遇到字串型態的陣列就parse成陣列型態
          if (typeof cur === 'string' && cur.startsWith('[') && cur.endsWith(']')) {
            cur = JSON.parse(cur);
          }
          // 存入Key與內容
          acc[jsonFiels[curIndex]] = cur;
          return acc;
        }, {})
      );
    }

    //輸出JSON
    const jsonFilename = `${__dirname}/${sheet.name}.json`;
    fs.writeFileSync(jsonFilename, JSON.stringify(jsonOutput, null, 2));

    console.log(`Write sheet to json ${jsonFilename}`);
  });
}
