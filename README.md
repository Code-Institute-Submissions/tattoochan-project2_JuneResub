# Project Name: Express Currency Converter

The project link is at https://tattoochan.github.io/project2/

## Description:

This application of mine will allow users to be able to convert 50 major currencies from at least 70 countries across the globe to their preferred choices of output. It will take a base currency (USD) and convert immediately upon the user's input and selection of the currency that he/she wants converted. The users will also be able to view live exchange rates of the 7 currencies (USD, SGD, EUR, GBP, INR & AUD & PHP) even before they do any conversion. They will be able to view first of one unit of the selected currency of the afore-mentioned currencies.  
  
Users will also be able to toggle between any two currencies when they are using the application and this will allow them to know in an instance how much they are looking to get back when they return from their trips. Exchange rates data are updated at least once every 24 hours with data collected from a number of central banks across the world. Last but not least, this converter also uses the standard abbreviations for all the currencies making it super user-friendly for users!

## UX:

As a user, 

  * they will be able to get immediate conversion to and from the currencies they selected
  * they will be able to get the most recent conversion rate 
  * they will be able choose conversion from their desired currency to selected currency to convert to
  
As a platform,
  * we will benefit by reaching to more user and potential link to local money changers to direct the leads
  * we will attract advertisers who wish to reach out to the users
  
As a sponsor,
  * they will be able to reach out to more users to market their product
  * they will be able to get their contact listed on the website

## Features:

  Feature 1: This will be the main feature of the currency converter where the user will need to input value to be converted (C) and choose the corresponding currencies (A) & (B).

  Feature 2: The user will be able to select the different currencies from (A) & (B). The list of avaiable currencies will be shown once the user clicks on the drop down button.

  Feature 3: The user will be able to see the daily live exchange rates for the 7 selected countries.

## Technologies Used:

  - Javascript
  - HTML
  - CSS

## Testing:

I have done simple testing on both columns to ensure that the currencies selected in both (A) & (B) are working and the amount that I have input has been correctly reflected.

The 7 selected live currencies to show are also updated when I went in to check on a daily basis.

Testing - This is being tested with chrome , safari and internet edge. 
Mobile responsiveness is tested for screen size 1440px , 768px , 425px  

Manual Testing is done to ensure that the all functions are functional.
Test Results as follows :

*No* | *Steps* | *Expected Results* | *Observations*
--- | --- | --- | ---
1 | `Click on the input box below 'Amount' `| `Able to enter the amount that you want to calculate for conversion, results of conversion are immediately updated`| **Pass** 
2 | `Click on the input box below 'From' `| `Select the currency you like to covert from, results of conversion are immediately updated`| **Pass** 
3 | `Click on the input box below 'To' `| `Select the currency you like to covert to, results of conversion are immediately updated`| **Pass** 
4 | `Click on the navbar 'Contact Us' `| `Able to link to call direct to a number [non-existing number set up for testing and not real number]`| **Pass** 
5 | `Changes to the inputs' `| `Manual calculation is calculated to check if the results are correct`| **Pass** 

## Deployment:

The website is deployed on Github 
Regular commits are made and once finalised.
Below are the commands to initalise and make regular commits, enter the commands in bash terminal in AWS

  * git init .
  * git add . 
  * git commit -m "Commit Message"
  * git remote add origin https://github.com/tattoochan/project2.git
  * git push -u origin master   
  
  In github.com > login to the page
  To deploy the page, go to the settings>Github pages and set the source to "Main Branch"

## Credits:

Coding: https://www.w3schools.com/

API: https://github.com/public-apis/public-apis#currency-exchange

Images: Taken from Google search.

## Media

The photos used are all used from www.pexel.com

