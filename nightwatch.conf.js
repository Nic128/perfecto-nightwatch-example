var env = require('getenv');

module.exports = (function(){
  return {
    "src_folders" : ["tests"],
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "globals_path" : "",

    "selenium" : {
      "start_process" : false
    },

    "test_settings" : {

      "default" : {
        "use_ssl": true,
        "default_path_prefix": "/nexperience/perfectomobile/wd/hub",
        "selenium_port"  : 443,
        "selenium_host"  : "mobilecloud.perfectomobile.com",
        "end_session_on_fail": false,
        "desiredCapabilities": {
          "browserName": env('PERFECTO_BROWSER'),
          "deviceName": env('PERFECTO_DEVICE'),
          "user": env('PERFECTO_USER'),
          "password": env('PERFECTO_PW')
        }
      }

    }
  }
})();