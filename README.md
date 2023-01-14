# G-Game, a funny game

The game was developed to bring users some fun time while navigating on internet. Why not decompress playing a quick and funny game? Welcome to G-Game!  

## Features 

### Existing Features

- __Navigation Bar__

  - Featured on all pages, the full responsive navigation bar includes links to the Logo, Home page and reporting a bug page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](https://github.com/Guizemoreira/PortfolioProject2/blob/main/assets/img/sitecontent/topbar.png)

- __The landing page__

  - The landing will bring the player to the main page ready to be played.
  - This section was developed to an easy understanding of the mechanics of the game.

![Landing Page](https://github.com/Guizemoreira/PortfolioProject2/blob/main/assets/img/sitecontent/landing.png)

- __Player Section__

  - The player section will display the options for the player using radio buttons for each option.  

![Player section](https://github.com/Guizemoreira/PortfolioProject2/blob/main/assets/img/sitecontent/UserPlay.png)

- __AI player section__

  - This section will display the field were the computer will show its selection by random pick when triggered by the play button. 
  - This section will be updated automatically with the computer selection and the game result in case of AI win. 

![AI section](https://github.com/Guizemoreira/PortfolioProject2/blob/main/assets/img/sitecontent/AIPlay.png)

- __The Action buttons__ 

  - The Action buttons section includes both buttons to trigger the actions on the game. 
  - The play button will only be triggered by a previous choice done by the user. Otherwise it will display a message informing the player to select one of the options
  - The reset button will bring the screen to the initial status

![Action buttons](https://github.com/Guizemoreira/PortfolioProject2/blob/main/assets/img/sitecontent/Action.png)

- __The Report a bug Page__

  - This page will allow the user to get with the developers to report any bug that they might find during the game.
  - This form will befilled by the user and deliver an e-mail to the dev team 

![Report a bug](https://github.com/Guizemoreira/PortfolioProject2/blob/main/assets/img/sitecontent/report_a_bug.png)


### Features Left to Implement

- A score field is a future feature to be implemented
- A quick countdown will make the game more interesting

## Testing 

The game system is not complex and the tests done were all related to the player experience like below:
- If the user does not select an option the system needs to inform that is a mandatory option to play the game.
- The Computer will always select a valid and random option.
- The result of the match has to be displayed considering all options and do it correctly: Rock wins Scissors, Scissors wins Paper and Paper wins Rock.
- For each resolution the game will be displayed differently:
- Above 425px until 768px resolution - Either player and AI will be displayed in a smaller field.
- For 425px and below resolution - The fields will be shown in a column block and the character will not be displayed n the AI field.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/check?uri=https%3A%2F%2Fguizemoreira.github.io%2FPortfolioProject2%2F&charset=%28detect+automatically%29&doctype=Inline&group=0)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fguizemoreira.github.io%2FPortfolioProject2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://guizemoreira.github.io/PortfolioProject2/index.html

URI : https://guizemoreira.github.io/PortfolioProject2/assets/css/index.css
76		baseline is not a justify-content value : baseline

- The error found when validating was fixed and updated in the valid site stylesheet

### Content 

- The text font were improted from [Google Fonts] (https://fonts.googleapis.com/css2?family=Nabla&family=Stick+No+Bills:wght@400;500&family=Tourney:wght@300;400&display=swap)
- The Bowser picture was found online in a webpic page [Bowser pic](www.pngplay.com)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)