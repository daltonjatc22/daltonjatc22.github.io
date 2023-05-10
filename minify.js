var minify = require('html-minifier').minify;
const fs = require('fs');
var Path = "index.html";

const path = require("path")

const getAllFiles = function(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  })

  return arrayOfFiles
}

/*
fs.readFile("./"+Path, {encoding: 'utf-8'}, (err, code) => {
  // console.log(code);
  var result = minify(code, {
    removeAttributeQuotes: true,
    removeComments: true,
    removeTagWhitespace: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    minifyJS: true,
    minifyCSS: true
  });
  
  fs.writeFile("./min/"+Path, result, "utf-8", () => {});
  console.log(result);
});*/

let files = ["C:\\dalton\\daltonjatc22.github.io\\index.html"]//getAllFiles("./js", []);

for (let i = 0; i < files.length; i++) {
  const filePath = files[i];
  const savePath = filePath.replace("daltonjatc22.github.io\\", "daltonjatc22.github.io\\min\\");

  fs.readFile(filePath, {encoding: 'utf-8'}, (err, code) => {
    // console.log(code);
    try{
      var result = minify(code, {
        removeAttributeQuotes: true,
        removeComments: true,
        removeTagWhitespace: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        minifyJS: true
      });
      
      fs.writeFile(savePath, result, "utf-8", () => {});
    }catch(e){}
  });

  console.log(filePath);
  console.log(savePath);

}