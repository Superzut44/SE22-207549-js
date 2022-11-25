// --> https://code-garage.fr/blog/qu-est-ce-qu-un-web-worker-et-comment-s-en-servir/


// Checks if Web Worker feature is not available
if (!window.Worker) 
{
    console.warn("Web Worker not available");
}
else
{
    const options = {
        name: 'My new worker'
    };

    // Create a new worker
    const myWorker = new Worker('worker.js', options);

    // The worker listener
    myWorker.onmessage = event => console.log(`Message received from worker: ${event.data}`);

    // Send data to the worker
    myWorker.postMessage("do_something");

    // Close the work
    // myWorker.terminate();
    setTimeout(() => {myWorker.terminate()}, 5000);

}