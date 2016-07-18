var fs = require('fs');
var mkdirp = require('mkdirp');
var date = new Date().toString();

module.exports = function(client) {

  // Here's the logic to download a perfecto report:
  // You have to close the current window
  // Then, the report gets created and we download it
  // Only after that you can end the session
  // If you don't close the window, the report is not created
  // If you end the session before, there's no session to fetch the report
  // Also, there's no need for ending the session after downloading the report
  // It ends automatically

  client.closeWindow();
  client.execute('mobile:report:download', [{ 'type': 'pdf' }], function(result) {

    console.log('Saving Perfecto Mobile report as PDF for session ' + result.sessionId);

    try {

      var buffer = new Buffer(result.value, 'base64');
      var path = './reports/' + date + '/';
      var filename = path + result.sessionId + '-report.pdf';

      // Create directory if needed
      mkdirp(path, function (err) {
        if (err) {
          console.error(err);
          client.end();
        } else {
          fs.writeFileSync(filename, buffer);
          client.end();
        }
      });

    } catch (err) {
      console.error(err);
      client.end();
    }

  });
};