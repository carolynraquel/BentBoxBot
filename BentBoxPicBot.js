
//In this version, you have a selection of random prompts and can upload a random pic from a folder you specify

const puppeteer = require('puppeteer'); //initliaze Puppeteer.  my dumb ass typed this in late AF
const fs = require('fs'); //this initializes the Node.js File System, which lets you to choose files from any folder
const path = require('path'); //initializes filepath
const executeCode = () => {
console.log(  
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
  
      //EMPUJA LOS BUTONES
      await page.click('#sensitiveContentCheck'); //checks sensitive content check toggle
      await page.click('#expires24HoursCheck');  //checks expire toggle
      await page.click('.col-lg-6 i'); //triggers photo file selector.

    //THIS IS WHERE YOU UPLOAD A RANDOM FILE
      const folderPath = 'F:/Cute-Selfies/'; //navigate to the specified folder
      const files = fs.readdirSync(folderPath); //get a list of all files within the folder
      const randomFile = path.join(folderPath, files[Math.floor(Math.random() * files.length)]); // Set the file input value to the path of the random file
      const fileInput = await page.$('input[type="file"]'); //Select file input element
      await fileInput.uploadFile(randomFile); //set the file input to the path of the randomly selected file
      await page.waitForTimeout(5000); // 2000 seconds // Wait for file to be uploaded (add additional wait time if required)
      await page.click ('button.btn-primary'); //clicks 'post' button
    // Press cancel to close Explorer.  Pressing "x" will kill the upload.  
    //When this random file feature ran for the first time, I felt like an evil genius BWAHAHAHAHAHAHAHAHAHA
    
    //THIS IS HOW YOU CLOSE THE BROWSER
      await new Promise(resolve => setTimeout (resolve, 30000)); // delay browser closing
      await browser.close(); // Close the browser
 
} //end run function.  This program officially completed at 0211hrs on 1/16/2024

); //end console.log
run(); //Function Call: This line tells the program to run. It must be outside of the async function, or Chromium will not load.
}; //end executeCode

const runCodeMultipleTimes = (executionCount, maxExecutions, intervalHours, startHour) => { //set parameters.  time is in 2400 format
  const executeAndSchedule = () =>
  {
      executeCode();

      executionCount++;
      if (executionCount >= maxExecutions) {

        clearInterval(intervalId); //Stop the interval after a certain number of times
      }
  };

  const scheduleNextExecution = () => {
    const now = new Date();
    const currentHour = now.getHours();

          if (currentHour >= startHour) {
              const timeToNextExecution = (intervalHours - (currentHour - startHour) % intervalHours) * 60 * 60 * 1000;
      setTimeout(() => {
        executeAndSchedule();
      }, timeToNextExecution);
    }
  };

  // Initial execution
  executeAndSchedule();

  // Schedule subsequent executions
  const intervalId = setInterval(scheduleNextExecution, intervalHours * 60 * 60 * 1000);
};



runCodeMultipleTimes(0, 5, 2, currentHour); //Function call: Run 5 times a day every 2 hours starting at 2 am
