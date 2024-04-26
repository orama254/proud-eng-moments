/** 
 * This helper function helps you generate unique file names for your files.
 * It generates a random string and appends the current timestamp to it
 */


function generateUniqueFileName(): string {
    const randomString = Math.random().toString(36).substring(2, 10).toLocaleUpperCase();
    const currentTimestamp = new Date().getTime();
    return `${randomString}_${currentTimestamp}`;
}


const uniqueFileName = generateUniqueFileName();

console.log(uniqueFileName); // Output: "XZQYQY_1632090956728"