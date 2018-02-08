self.addEventListener('install',function(){
	console.log("installing serviceworker");
});

self.addEventListener('activate',function () {
	console.log('activating serviceworker');
});

self.addEventListener('fetch',function(event){
	console.log("fetching some content:",event);
})

