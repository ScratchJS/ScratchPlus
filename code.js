new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ','Display banner %s','gbanner'],
      			[' ','Display alert %s','gshout'],
      			[' ','Console log %s','glog'],
      			['h','Start automatically','gauto'],
		],
		url : '' // This is the URL for when someone clicks "learn more"
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'}; // Returning status defines the colour of the light beside the blocks.
	};
	
	// Scratch++ Functions
  	ext.gbanner = function(Banner) {    
    		ScratchExtensions.notify(Banner);
  	};
  	ext.gshout = function(Shout) {    
    		alert(Shout);
  	};
  	ext.glog = function(Log) {    
    		console.log(Log)
  	};
  	ext.gauto = function() {    
    		return true;
  	};

	ScratchExtensions.register('Scratch++', descriptor, ext); // Name of the extension.
  	
	console.log("Scratch++ Successfully installed")
})();
new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
      			['r','%s ^ %s','getpow',false],
      			['r','Pi','getpi',false],
      			['r','E','gete',false],
      			['b','%s != %s','getnotequal',false,false]
		],
		url : '' // This is the URL for when someone clicks "learn more"
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'}; // Returning status defines the colour of the light beside the blocks.
	};
	
	// Scratch++ (Math/Logic) Functions
  	ext.getpi = function() {
    		return 3.141592653589793238462643389;
  	};
  	ext.gete = function() {
    		return 2.718281828459045235360287471;
  	};
   	ext.getnotequal = function(n1,n2) {
    		return n1 != n2;
  	};
   	ext.getpow = function(n1,n2) {
    		return Math.pow(n1,n2);
  	};

	ScratchExtensions.register('Scratch++ (Math/Logic)', descriptor, ext); // Name of the extension.
	console.log("Scratch++ (Math/Logic) Successfully installed")
})();

ScratchExtensions.notify('Scratch++ Successfully installed');
