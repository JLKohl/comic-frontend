//side note about folder placement. The scripts folder belongs 
//at the node level because it prints to the terminal which
// means it is interacting with node directly.
// Anything that is going to interact with the page goes inside of 
// the src folder. 

//run this check function by running 'npm run check'
async function checkDataBase(){

    const response = await fetch("http://localhost:5147/comics")

if (response.ok) {
    const comics = await response.json();
    console.log(`API has been reached! Found ${comics.length} comics.`);
} else {
    console.log(`API error: ${response.status}`)
}

} 

checkDataBase();

