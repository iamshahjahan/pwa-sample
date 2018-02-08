document.getElementById("install").addEventListener('click',function () {
	console.log("inside documen");
	if ( deferredPrompt )
	{
		// console.log("In deferredPrompt");
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then(function (choiceResult) {
			console.log(choiceResult);
		})
		deferredPrompt = null;
	}
})