> We only need to change the rules to test different aspects of the application.

# 1. Displayed text header above input field depending on the chosen rule
## 1.1 lowerAndUpperLettersPlusNumbers 
### Preconditions
Load the page with the following rule:  
this.lowerAndUpperLettersPlusNumbers = true
### Expected Output
An an empty inputfield and a header text that is: Upper- and lowercase letters and numbers are valid
### Input
        this.lowerAndUpperLettersPlusNumbers = true
        this.lowerLetters = false
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = false
        this.numbers = false
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%201/lowerAndUpperLettersPlusNumbers.png)

## 1.2 lowerLetters 
### Preconditions
Load the page with the following rule:
### Expected Output
An an empty inputfield and a header text that is: Only lowercase letters
### Input
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = true
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = false
        this.numbers = false
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%201/lowerLetters.png)

## 1.3 upperLetters 
### Preconditions
Load the page with the following rule:
### Expected Output
An an empty inputfield and a header text that is: Only uppercase letters
### Input
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = false
        this.upperLetters = true
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = false
        this.numbers = false
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%201/upperLetters.png)


## 1.4 lowerAndUpperLetters 
### Preconditions
Load the page with the following rule:
### Expected Output
An an empty inputfield and a header text that is: Only lower- and uppercase letters
### Input
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = false
        this.upperLetters = false
        this.lowerAndUpperLetters = true
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = false
        this.numbers = false
### Output

## 1.5 lowerletterAndNumbers 
### Preconditions
Load the page with the following rule:
### Expected Output
An an empty inputfield and a header text that is: Only lowercase letters and numbers
### Input
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = false
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = true
        this.upperLetterAndNumbers = false
        this.numbers = false
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%201/lowerAndUpperLetters.png)

## 1.6 upperletterAndNumbers 
### Preconditions
Load the page with the following rule:
### Expected Output
An an empty inputfield and a header text that is: Only uppercase letters and numbers
### Input
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = false
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = true
        this.numbers = false
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%201/upperLettersAndNumbers.png)

## 1.7 numbers 
### Preconditions
Load the page with the following rule:
### Expected Output
An an empty inputfield and a header text that is: Only numbers (0-9)'
### Input
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = false
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = false
        this.numbers = true
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%201/numbers.png)







# 1. Displayed rules depending on the chosen rule
## 1.1 lowerAndUpperLettersPlusNumbers 
### Preconditions
### Expected Output
### Input
### Output

## 1.2 lowerLetters 
### Preconditions
### Expected Output
### Input
### Output

## 1.3 upperLetters 
### Preconditions
### Expected Output
### Input
### Output

## 1.4 lowerAndUpperLetters 
### Preconditions
### Expected Output
### Input
### Output

## 1.5 lowerletterAndNumbers 
### Preconditions
### Expected Output
### Input
### Output

## 1.6 upperletterAndNumbers 
### Preconditions
### Expected Output
### Input
### Output

## 1.7 numbers 
### Preconditions
### Expected Output
### Input
### Output