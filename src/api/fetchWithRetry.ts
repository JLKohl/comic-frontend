//recursive function so that the site will retry the fetch
// multiple times before it throws the error
export async function fetchWithRetry(url: string, triesLeft: number){
    try {
        return await fetch(url);
    } catch (error) {
        if (triesLeft <= 1) throw error;
        await new Promise(r => setTimeout(r, 1000)); //waiting 1 second between page tries
        return fetchWithRetry(url, triesLeft - 1); //recalls itself until there are no tries left
    }

}

