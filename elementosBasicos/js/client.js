export function client(){
    const client = new ClientJS(); // Create A New Client Object

	if( client.isMobile() ) { // Check For Mobile Device

		if( client.isMobileAndroid() ) { // Check For Android
			console.log('We Got Us Some Android!');

		}else if( client.isMobileIOS() ){ // Check For iOS
			console.log('We Got Us Some Apple iOS!');

		}else{
			console.log('Unknown Mobile Device...');
		}
	}else{
		if( client.isJava() ) { // Check If Java Is Installed
  			console.log('Java ' + client.getJavaVersion() ); // Get Java Version

		}else{
			console.log('No Java Installed...');
		}
	}
    
    let fingerprint = client.getFingerprint(); // Calculate Device/Browser Fingerprint

	console.log( fingerprint );
    
    let softwareVersion = client.getSoftwareVersion(); // Get ClientJS Software Version
	console.log( softwareVersion );

}