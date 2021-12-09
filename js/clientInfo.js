export let clientInfo = () => {
    const client = new ClientJS(); // Create A New Client Object

	let CPU = client.getCPU(); // Get CPU Architecture
	let fingerprint = client.getFingerprint();
	let screenPrint = client.getScreenPrint(); // Get Screen Print
	let userAgent = client.getUserAgent(); // Get User Agent String
	let browser = client.getBrowser(); // Get Browser
	let engine = client.getEngine(); // Get Engine
	let OS = client.getOS(); // Get OS Version
	let isMobile = client.isMobile(); // Check For Mobile

	let arrayClient = [CPU, fingerprint, screenPrint, userAgent, browser, engine, OS, isMobile];

	console.log(arrayClient);
}
