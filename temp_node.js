#! /usr/bin/env node


var fs = require('fs'),
     xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile('D:/newval/vineeth2/O365 Manager Plus/conf/o365/management/O365OperationVsInputAttribs.xml', function (err, data) {
     parser.parseString(data, function (err, result) {
          console.log(JSON.stringify(result));
     });
});