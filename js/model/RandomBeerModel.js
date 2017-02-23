function BreweryDBService($http) {

	var _apiKey = '09d781b90a0b6c7e8a4314f33ae1eee9';
	// using cors-anywhere because crossorigin.me is super slow now.
	var _crossorigin = 'https://cors-anywhere.herokuapp.com/';  // https://crossorigin.me/
	var _url = _crossorigin+'http://api.brewerydb.com/v2/beer/random?key='+_apiKey;

	this.getBeer = function getBeer() {
    	return $http({
			method: 'GET',
			params: {withBreweries: 'Y', hasLabels: 'Y'},
			url: _url
		}).then(function successCallback(response) {
            return response.data.data;
		}).catch();
  };
}
angular
  .module('app')
  .service('BreweryDBService', BreweryDBService);