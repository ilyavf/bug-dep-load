import appstate from 'components/appstate';

console.log('index.js loaded. appstate: ' + typeof appstate, appstate);

System.import('components/page1')
    .then(function(results) {
      console.log('Successfully loaded: page1');
    })
    .catch(function(ex) {
      console.error('Invalid page linked!');
      throw ex;
    });

