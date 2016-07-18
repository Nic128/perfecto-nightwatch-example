# Perfecto Nightwatch example

This is an example setup of how to use [Perfecto](https://www.perfectomobile.com/) with [Nightwatch.js](http://nightwatchjs.org/).

#### Dependencies
``` sh
npm install
```

Once install has completed you can run the tests like this:

``` sh
# One liner
PERFECTO_BROWSER={Insert browser} PERFECTO_DEVICE={Insert device id} PERFECTO_USER={Insert user} PERFECTO_PW={Insert password} npm run test

# Or export each variable separately, then run
export PERFECTO_BROWSER={Insert browser}
export PERFECTO_DEVICE={Insert device id}
export PERFECTO_USER={Insert user}
export PERFECTO_PW={Insert password}
npm run test
```

### To do
- Improve report download workflow, at the moment it doesn't include failing assertions
- Figure out why setValue is inputting one letter only, not the whole string.