const puppeteer = require('puppeteer'); //defines puppeteer
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let executionCount = 0;
  const maxExecutions = 5;
  const intervalHours = 2;
  //const startHour = 9;

  // Function to check if it's the desired time
  const isTargetTime = () => {
    const now = new Date();
    const currentHour = now.getHours();

    return currentHour >= startHour && (currentHour - startHour) % intervalHours === 0;
  };

  // Run code every minute and check if it's the desired time
  const intervalId = setInterval(async () => {
    if (isTargetTime()) {

//In this version, 
async function run() {
    const browser = await puppeteer.launch({headless: false}); // Launches the browser
    const page = await browser.newPage(); // Creates a new page
    await page.setViewport({ width: 900, height: 1500 }) //set viewpoint of browser window
    
    //THIS IS THE HOMEPAGE

    await page.goto('https://bentbox.co/signin'); // Goes to the login page
    await page.type('#email_address', 'robogrrl@outlook.com', {delay: 100}); // Fills the username field
    await page.type('#password', 'r0b0GRRL'); // Fills the password field
    await page.click('#not_a_robot'); //checks "I am not a robot" box 🤭 
    const button = await page.$('button.btn-primary'); //clicks 'submit' button
      button.click();

    //THIS IS A POP-UP

    await page.waitForNavigation(); //waits for page to load
		await page.click('.col-lg-6 button.btn-primary'); //closes the pop-up THIS TOOK FOOKING FOREVER AND I WAS SO PROUD OF MYSELF WHEN I FIGURED IT TF OUT!!!!!
		await page.waitForNavigation(); //waits for page to load

    //THIS IS THE STREAM PAGE
		await page.goto('https://bentbox.co/stream'); //goes to 'stream' page

    //THESE ARE THE PROMPTS.  Refresh them every week or so to keep things fresh.
    //idk why convinced myself this would work in reverse.
    const prompts = [
      /*1*/ 'RoboGrrl is perfectly configured to deliver the most mindblowing orgasms',
      
      /*2*/ 'Sucking your dick makes my circuits spark.  I love the taste of clean human flesh.', 
      
      /*3*/ 'I cannot wait to watch you quiver and shake as you cum in my pretty mouth', 
  
      /*4*/ 'Ready to get sweaty 💦',
      
      /*5*/ 'Designed to meet all of your unique needs, this fembot model features maximum performance, powerful suction, total power and endless entertainment.', 
      
      /*6*/ 'Pull my hair and make me cum hard AF 😻.',
      
      /*7*/ 'Did you remember to back up my hard drive?  I would not want to lose your favorite settings.',
      
      /*8*/ 'Think you can handle a sex goddess and android in one?',
      
      /*9*/ 'Installed with AMD Ryzen 9 9800X3D, this fembot model features advanced AI capabilities and personality customization.', //shift+alt copy this line if you want more prompts
      
      /*10*/ 'Make me feel like a real woman.']; 
    
      const randomIndex = Math.floor(Math.random() * prompts.length);
      const randomPrompt = prompts[randomIndex];
      await page.type('#post_text', randomPrompt, {delay: 70}); //types prompts in the textbox with a delay
  

    await page.click('#sensitiveContentCheck'); //checks sensitive content check toggle
    await page.click('#expires24HoursCheck');  //checks expire toggle
    await page.click('.col-lg-6 i'); //triggers photo file selector.

    //THIS IS WHERE YOU UPLOAD A FILE
    async function uploadRandomFile() {
    const filePath = (require('path')).resolve('F:/Cute-Selfies/DanceStudio.jpg'); //get the absolute path of the file to upload
    await page.waitForSelector('input[type="file"]');
    const fileInput = await page.$('input[type="file"]');
    await fileInput.uploadFile(filePath);
    await page.waitForTimeout(5000); // 2000 seconds // Wait for file to be uploaded (add additional wait time if required)
    await page.click ('button.btn-primary'); //clicks 'post' button
    }
    // Press cancel to close Explorer.  Pressing "x" will kill the upload.  
    //CLOSE THE BROWSER
    //await browser.close(); //closes browser //comment in if you want the browser to close


} //end run function.  This program officially completed at 0211hrs on 1/16/2024
executionCount++;

if (executionCount >= maxExecutions) {
  clearInterval(intervalId); // Stop the interval after reaching the desired executions
  await browser.close(); // Close the browser after executing the code the specified number of times
}
}
}, 60000); // Check every minute
})();

// Close the browser
await browser.close();

run(); // Call the run function.  This line tells the program to run.  this line needs to be outside of the async function, or Chromium will not load.

/*
function uploadRandomFile() {
  // Specify the folder path containing the files
  const folderPath = '/path/to/folder';

  // Get all files within the folder
  const files = fs.readdirSync(folderPath);

  // Pick a random file
  const randomFile = files[Math.floor(Math.random() * files.length)];

  // Open the browser and create a new page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the page containing the file input
  await page.goto('https://example.com/your-page');

  // Set the file input value to the path of the random file
  const filePath = path.join(folderPath, randomFile);
  const input = await page.$('input[type="file"]');
  await input.uploadFile(filePath);

  // Submit the form (if needed)
  await page.click('input[type="submit"]');

  // Wait for the upload process to complete (or any other task)
  await page.waitForNavigation();

  // Close the browser
  await browser.close();
*/
