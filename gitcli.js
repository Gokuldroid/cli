#! /usr/bin/env node


const clipboardy = require('clipboardy');

switch (process.argv[2]) {
     case "psh":
     case "push":
          if (!process.argv[3]) {
               console.error("Please give commit message");
          } else {
               executeCmd("git add .")
               executeCmd("git commit -m \"" + process.argv[3] + "\"")
               executeCmd("git push -u");
          }
          break;
     case "cln":
     case "clone":
          if (process.argv[3]) {
               executeCmd("git clone " + process.argv[3]);
          } else {
               executeCmd("git clone " + clipboardy.readSync());
          }
          break;

}


function executeCmd(cmd) {
     var exec = require('child_process').exec;
     exec(cmd, {
          cwd: process.cwd()
     }, function (error, stdout, stderr) {
          if (error) {
               console.log(error)
          }
          if (stderr) {
               console.log(stderr)
          }
          if (stdout) {
               console.log(stdout);
          }
     });
}