function RandomBeerController (BreweryDBService) {
  
	var vm = this;

	//public variables
	vm.beer = {};
	vm.showDetails = false;
	vm.loading = true;

	// public functions
	vm.reloadPage = _reloadPage;

	_init();

	/**
	* Function _init()
	* Initialize the page
	*
	*/
	function _init(){
		BreweryDBService.getBeer().then(function(data){
			vm.beer = data;
			vm.loading = false;
		});
	}

	/**
	* Function _reloadPage()
	* Reload the page and load a new beer
	*
	*/
	function _reloadPage(){
		location.reload();
	}
}

angular
  .module('app', [])
  .controller('RandomBeerController', RandomBeerController);