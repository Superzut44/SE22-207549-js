
onmessage = event => {
    console.log(`Message received from main script: ${event.data}`);
}
onmessageerror = event => {
    event.preventDefault();
    console.log('Error received from main script:', event);
}
  
/* Following message will be sent as soon as the worker is started */
postMessage("worker_initialized");


console.log( self );
// console.log( window );