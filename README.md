1. 用 vscode，開始轉檔工具專案

2. 安裝套件
   控制台，執行 npm install

3. 改啟用的程式檔
   編輯.vscode/launch.json

```
"name": "index.js",
"program": "${workspaceFolder}\\index.js"
```

4. 準備 excel
   編輯 excel 並 copy 到 ExcelToBeConverted 目錄

5. 在 vscode 按 f5 執行轉檔
   console 出現以下 log，就是成功

```
Read sheet Demo
Write sheet to json ${workspaceFolder}/Demo.json
```

6. 確認輸出檔案
   在 ConvertedJSON 目錄，會產生 json

ps:
若在 json 中出現空行{}，表示 excel 有空白行，請將無資料的儲存檔刪除

![image](https://github.com/orenccl/ExcelToJson/blob/main/README.PNG)
