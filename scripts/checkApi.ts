//side note about folder placement. The scripts folder belongs 
//at the node level because it prints to the terminal which
// means it is interacting with node directly.
// Anything that is going to interact with the page goes inside of 
// the src folder. 

//recursice function so that the site will retry the fetch
// multiple times before it throws the error
async function fetchWithRetry(url: string, triesLeft: number){
    try {
        return await fetch(url);
    } catch (error) {
        if (triesLeft <= 1) throw error;
        console.log(`Retrying... ${triesLeft - 1} left`);
        return fetchWithRetry(url, triesLeft - 1); //recalls itself until there are no tries left
    }

}

//run this check function by running 'npm run check'
async function checkDataBase(){

//added a try catch block so that the 
// error message would be more user friendly

 try {

    const response =  await fetchWithRetry("http://localhost:5147/comics", 3)

    if (response.ok) {
    const comics = await response.json();
    console.log(`API has been reached! Found ${comics.length} comics.`);
    } else {
        console.log(`API error: ${response.status}`)
    }

 } catch { 

    console.log("Could not reach the Api. Is it running?")

 }

} 

checkDataBase();

