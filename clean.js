#! /usr/bin/env node

switch (process.argv[2]) {
     case "cvs":
          cleanCVS(process.cwd())
          break;

}


function cleanCVS(dir) {
     const fs = require('fs');
     fs.readdirSync(dir).forEach(file => {
          var name = dir + '/' + file;
          if (fs.statSync(name).isDirectory()) {
               if (file == 'CVS') {
                    console.log("cleaning " + dir);
                    var rimraf = require('rimraf');
                    rimraf(name, function () { console.log('deleting ::' + name); });
               } else {
                    cleanCVS(name);
               }
          }
     });
}