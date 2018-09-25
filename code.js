// Scratch++ by @Raytracing





// Create by block
new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ','By @Raytracing','null']
		],
		url : '' // This is the URL for when someone clicks "learn more"
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'}; // Returning status defines the colour of the light beside the blocks.
	};
	
	// Scratch++ Functions
  	ext.null = function() {    
  	};

	ScratchExtensions.register('Scratch++', descriptor, ext); // Name of the extension.
  	
	console.log("Scratch++ Successfully installed")
})();

// Math Lib

new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
      			['r','%n ^ %n','getpow',10,10,false],
      			['r','Pi','getpi',false],
      			['r','E','gete',false]
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
   	ext.getpow = function(n1,n2) {
    		return Math.pow(n1,n2);
  	};

	ScratchExtensions.register('Scratch++ (Math)', descriptor, ext); // Name of the extension.
	console.log("Scratch++ (Math) Successfully installed")
})();

// Logic Lib

new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
      			['b','%s != %s','getnotequal',false,false],
			['b','True','True',false],
			['b','False','False',false]
		],
		url : '' // This is the URL for when someone clicks "learn more"
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'}; // Returning status defines the colour of the light beside the blocks.
	};
	
	// Scratch++ (Logic) Functions
   	ext.getnotequal = function(n1,n2) {
    		return n1 != n2;
	};
	ext.True = function() {
    		return true;
	};
	ext.False = function() {
    		return false;
	};

	ScratchExtensions.register('Scratch++ (Logic)', descriptor, ext); // Name of the extension.
	console.log("Scratch++ (Logic) Successfully installed")
})();

// Userstats Lib

new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
      			['b','Is Student','isstudent'],
			['b','Is Teacher','isteacher'],
			['b','Is Admin','isadmin'],
			['r','User ID','userid']
		],
		url : '' // This is the URL for when someone clicks "learn more"
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'}; // Returning status defines the colour of the light beside the blocks.
	};
	
	// Scratch++ (Userstats) Functions
  	ext.isadmin = function() {
		return Scratch.INIT_DATA.ADMIN;
	};
	ext.isteacher = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.is_educator;
	};
	ext.isstudent = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.is_student;
	};
	ext.userid = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.id;
	};

	ScratchExtensions.register('Scratch++ (Userstats)', descriptor, ext); // Name of the extension.
	console.log("Scratch++ (Userstats) Successfully installed")
})();

// Interaction Lib

new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ','Display banner %s','gbanner'],
      			[' ','Display alert %s','gshout'],
      			[' ','Console log %s','glog'],
			[' ','Set Fullscreen','full'],
			[' ','New Remix','remix'],
			[' ','Prompt Join Scratch','join'],
			[' ','Prompt Login Scratch','login'],
			[' ','Logout Scratch User','logout']
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
	ext.full = function() {    
    		JSsetPresentationMode("false");
  	};
	ext.remix = function() {    
    		JSremixProject();
  	};
	ext.join = function() {    
    		JSjoinScratch()
  	};
	ext.login = function() {    
    		JSlogin()
  	};
	ext.logout = function() {
		JSlogout()
	};

	ScratchExtensions.register('Scratch++ (Interaction)', descriptor, ext); // Name of the extension.
  	
	console.log("Scratch++ (Interaction) Successfully installed")
})();

ScratchExtensions.notify('Scratch++ Successfully installed');
