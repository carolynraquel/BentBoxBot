const puppeteer = require('puppeteer'); //defines puppeteer

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

    //THESE ARE THE PROMPTS
   await page.type('#post_text', 'I cannot wait to watch you quiver and shake as you spit cum in my pretty mouth 💦', {delay: 80}); //types in the textbox

    /*
    This is how you type random prompts into the text box
    
    const prompts = ['RoboGrrl is perfectly configured to deliver the most mindblowing orgasms', 
    'Sucking your dick makes my circuits spark.  I love the taste of human flesh.', 
    'I can't wait to watch you quiver and shake as you cum in my pretty mouth', 
    'Designed to meet all of your unique needs, this fembot model features maximum performance, powerful suction, total power and endless entertainment.'
    'Installed with AMD Ryzen 9 9800X3D, this fembot model features advanced AI capabilities and superior personality customization.'];
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];
    await page.type('#my-textbox', randomPrompt, {delay: 70});
    */

    await page.click('#sensitiveContentCheck'); //checks sensitive content check toggle
    await page.click('#expires24HoursCheck');  //checks expire toggle
    await page.click('.col-lg-6 i'); //triggers photo file selector.

    //THIS IS WHERE YOU UPLOAD A FILE

    const filePath = (require('path')).resolve('F:/Cute-Selfies/DistortedHead.jpg'); //get the absolute path of the file to upload
    await page.waitForSelector('input[type="file"]');
    const fileInput = await page.$('input[type="file"]');
    await fileInput.uploadFile(filePath);
    await page.waitForTimeout(5000); // 2000 seconds // Wait for file to be uploaded (add additional wait time if required)
    await page.click ('button.btn-primary'); //clicks 'post' button
    // idk how to close windows explorer, but it doesn't matter.  it closes when I close the browser

    //ADD A TIMER (PedroTech)

    //CLOSE THE BROWSER
    await browser.close(); //closes browser //comment in if you want the browser to close


} //end run function.  This program officially completed at 0211hrs on 1/16/2024

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
}
*/  
