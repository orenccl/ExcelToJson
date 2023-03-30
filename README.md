1. 用vscode，開始轉檔工具專案

2. 安裝套件
控制台，執行npm install

3. 改啟用的程式檔
編輯.vscode/launch.json
```
"name": "index.js",
"program": "${workspaceFolder}\\index.js"
```

4. 準備excel
編輯excel並copy到 ExcelToJsonTool 目錄

5. 在vscode按f5執行轉檔
console出現以下log，就是成功
```
Read sheet Demo
Write sheet to json ${workspaceFolder}/Demo.json
```

6. 確認輸出檔案
在 ExcelToJsonTool 目錄，會產生 Demo.json

ps:
若在json中出現空行{}，表示excel有空白行，請將無資料的儲存檔刪除

![image](https://github.com/orenccl/ExcelToJson/blob/main/README.PNG)
