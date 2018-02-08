var deferredPrompt;
if ( 'serviceWorker' in navigator )
{
	navigator.serviceWorker
	.register('/sw.js')
	.then(function(){
		console.log("serviceWorker is installed.");
	})
}

window.addEventListener('beforeinstallprompt',function(event){
	console.log("before deferredPrompt");
	
	event.preventDefault();
	deferredPrompt = event;
	return false;	
});
