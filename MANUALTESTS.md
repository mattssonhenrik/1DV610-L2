> We only need to change the rules to test different aspects of the application.



| What was tested                                   | How it was tested                                                                                       | Test result                                                    |
|---------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Header display: lowerAndUpperLettersPlusNumbers   | Loaded the page with `lowerAndUpperLettersPlusNumbers = true`, checked header text                        | Worked as expected                                             |
| Header display: lowerLetters                      | Loaded the page with `lowerLetters = true`, checked header text                                           | Worked as expected                                             |
| Header display: upperLetters                      | Loaded the page with `upperLetters = true`, checked header text                                           | Worked as expected                                             |
| Header display: lowerAndUpperLetters              | Loaded the page with `lowerAndUpperLetters = true`, checked header text                                   | Worked as expected                                             |
| Header display: lowerLetterAndNumbers             | Loaded the page with `lowerLetterAndNumbers = true`, checked header text                                  | Worked as expected                                             |
| Header display: upperLetterAndNumbers             | Loaded the page with `upperLetterAndNumbers = true`, checked header text                                  | Worked as expected                                             |
| Header display: numbers                           | Loaded the page with `numbers = true`, checked header text                                                | Worked as expected                                             |
| Valid input: lowerAndUpperLettersPlusNumbers      | Entered "testTEST1234" with `lowerAndUpperLettersPlusNumbers = true`                                      | Worked as expected                                             |
| Invalid input: lowerAndUpperLettersPlusNumbers    | Entered "testTEST1234!\"#€" with `lowerAndUpperLettersPlusNumbers = true`                                 | Worked as expected                                             |
| Valid input: lowerLetters                        | Entered "test" with `lowerLetters = true`                                                                 | Worked as expected                                             |
| Invalid input: lowerLetters                      | Entered "testTEST" with `lowerLetters = true`                                                             | Worked as expected                                             |
| Valid input: upperLetters                        | Entered "TEST" with `upperLetters = true`                                                                 | Worked as expected                                             |
| Invalid input: upperLetters                      | Entered "TESTtest" with `upperLetters = true`                                                             | Worked as expected                                             |
| Valid input: lowerAndUpperLetters                | Entered "testTEST" with `lowerAndUpperLetters = true`                                                     | Worked as expected                                             |
| Invalid input: lowerAndUpperLetters              | Entered "testTEST1234" with `lowerAndUpperLetters = true`                                                 | Worked as expected                                             |
| Valid input: lowerLetterAndNumbers               | Entered "test1234" with `lowerLetterAndNumbers = true`                                                    | Worked as expected                                             |
| Invalid input: lowerLetterAndNumbers             | Entered "test1234TEST" with `lowerLetterAndNumbers = true`                                                | Worked as expected                                             |
| Valid input: upperLetterAndNumbers               | Entered "TEST1234" with `upperLetterAndNumbers = true`                                                    | Worked as expected                                             |
| Invalid input: upperLetterAndNumbers             | Entered "TEST1234test" with `upperLetterAndNumbers = true`                                                | Worked as expected                                             |
| Valid input: numbers                             | Entered "1234" with `numbers = true`                                                                      | Worked as expected                                             |
| Invalid input: numbers                           | Entered "1234test" with `numbers = true`                                                                  | Worked as expected                                             |
| Reset input field after removing all text        | Entered "testBeforeRemovingInput", removed all text using `Backspace`, checked if the field returned to white | Worked as expected                                             |
| Pasting invalid input: lowerAndUpperLettersPlusNumbers | Pasted "testTEST1234!\"#€" with `lowerAndUpperLettersPlusNumbers = true`                                   | **Did NOT work as expected** (field turned green instead of red) |




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
        this.lowerLetters = true
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
        this.upperLetters = true
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
        this.lowerAndUpperLetters = true
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
        this.lowerLetterAndNumbers = true
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
        this.upperLetterAndNumbers = true
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
        this.numbers = true
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



# 2. Valid and invalid input to each rule
## 2.1 lowerAndUpperLettersPlusNumbers 
### 2.1.1 Valid input
### Preconditions
Load the page with the following rule:  
this.lowerAndUpperLettersPlusNumbers = true  
### Expected Output
The input field should turn green
### Input
Enter testTEST1234
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.1/validLowerAndUpperLettersPlusNumbers.png)

### 2.1.2 Invalid input
### Preconditions
Load the page with the following rule:  
this.lowerAndUpperLettersPlusNumbers = true  
### Expected Output
The input field and the header text should turn red
### Input
Enter testTEST1234!"#€
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.1/invalidLowerAndUpperLettersPlusNumbers.png)

## 2.2 lowerLetters 
### 2.2.1 Valid input
### Preconditions
Load the page with the following rule:  
        this.lowerLetters = true
### Expected Output
The input field should turn green
### Input
test
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.2/validLowerLetters.png)

### 2.2.2 Invalid input
### Preconditions
Load the page with the following rule:  
        this.lowerLetters = true
### Expected Output
The input field and the header text should turn red
### Input
testTEST
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.2/invalidLowerLetters.png)

## 2.3 upperLetters 
### 2.3.1 Valid input
Load the page with the following rule:  
        this.upperLetters = true
### Preconditions
### Expected Output
The input field should turn green
### Input
TEST
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.3/validUpperLetters.png)

### 2.3.2 Invalid input
### Preconditions
Load the page with the following rule:  
        this.upperLetters = true
### Expected Output
The input field and the header text should turn red
### Input
TESTtest
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.3/invalidUpperLetters.png)

## 2.4 lowerAndUpperLetters 
### 2.4.1 Valid input
### Preconditions
Load the page with the following rule:  
        this.lowerAndUpperLetters = true
### Expected Output
The input field should turn green
### Input
testTEST
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.4/validLowerAndUpperLetters.png)

### 2.4.2 Invalid input
### Preconditions
Load the page with the following rule:  
        this.lowerAndUpperLetters = true
### Expected Output
The input field and the header text should turn red
### Input
testTEST1234
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.4/invalidLowerAndUpperLetters.png)

## 2.5 lowerletterAndNumbers 
### 2.5.1 Valid input
### Preconditions
Load the page with the following rule:  
        this.lowerLetterAndNumbers = true
### Expected Output
The input field should turn green
### Input
test1234
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.5/validLowerLetterAndNumbers.png)

### 2.5.2 Invalid input
### Preconditions
Load the page with the following rule:  
        this.lowerLetterAndNumbers = true
### Expected Output
The input field and the header text should turn red
### Input
test1234TEST
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.5/invalidLowerLetterAndNumbers.png)

## 2.6 upperletterAndNumbers 
### 2.6.1 Valid input
### Preconditions
Load the page with the following rule:  
        this.upperLetterAndNumbers = true
### Expected Output
The input field should turn green
### Input
TEST1234
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.6/validLowerLetterAndNumbers.png)

### 2.6.2 Invalid input
### Preconditions
Load the page with the following rule:  
        this.upperLetterAndNumbers = true
### Expected Output
The input field and the header text should turn red
### Input
TEST1234test
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.6/invalidLowerLetterAndNumbers.png)

## 2.7 numbers 
### 2.7.1 Valid input
### Preconditions
Load the page with the following rule:  
        this.numbers = true
### Expected Output
The input field should turn green
### Input
1234
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.7/validNumbers.png)

### 2.7.2 Invalid input
### Preconditions
Load the page with the following rule:  
        this.numbers = true
### Expected Output
The input field and the header text should turn red
### Input
1234test
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/Testcases%202/2.7/invalidNumbers.png)

# 3. Test if the input field is restored to default if all text is removed
### 3.1 Valid input
### Preconditions
Load the page with the following rule:  
this.lowerAndUpperLettersPlusNumbers = true  
### Expected Output
The input field should turn green
### Input
testBeforeRemovingInput
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%203/testBeforeRemovingInput.png)

### 3.2 Remove input
### Preconditions
Load the page with the following rule:  
this.lowerAndUpperLettersPlusNumbers = true  
  
  Add the following to the input field:  
  testBeforeRemovingInput
### Expected Output
The input field should turn white
### Input
Remove all values from the input field
### Output
Works as expected
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%203/testAfterRemovingInput.png)

# 4. Add input through copying and pasting instead of typing
### 4.1 Pasting input
### Preconditions
Load the page with the following rule:  
this.lowerAndUpperLettersPlusNumbers = true  
### Expected Output
The input field and the header text should turn red
### Input
testTEST1234!"#€ (through copy + paste)
### Output
Did NOT work as expected, the input field turns green.
![Image over tested rule](/ASSETS/TESTPICTURES/TestCases%204/copyAndPasteInput.png)

I suspect the application register the v instead of the actual word.