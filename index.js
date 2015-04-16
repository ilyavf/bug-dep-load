System.import('components/page1/')
    .then(function(results) {
      console.log('Successfully loaded: page1');
    })
    .catch(function(ex) {
      console.error('Invalid page linked!');
      throw ex;
    });

