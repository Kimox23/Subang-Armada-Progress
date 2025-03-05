# JS Challenge II

1. _Inventory Tracker_

| Logic or Variable | Input/Process                                   |
| ----------------- | ----------------------------------------------- |
| inventory         | ["apple","banana","cherry","date","elderberry"] |
| inventoryCount    | [10,15,28,7]                                    |
| loop Inventory    | for(let i = 0; inventory.length; i++)           |
| console.log       | `${inventory[i]}: ${inventoryCount[i]}`         |

    Output:
        apple: 10
        banana:15
        cherry: 5
        date: 20
        elderberry: 7

    The output of the inventory tracker prints the value of inventory and inventory count. Since they have the same length and indexes it outputs the same value.

2. _Alphabetical Sorting_

| Logic or Variable    | Input/Process                               |
| -------------------- | ------------------------------------------- |
| words                | ["zebra","apple","mango","cherry","banana"] |
| loopWords(row)       | for(let i = 0; i < words.length; i++)       |
| loopWords(column)    | for(let j = i + 1; j < words.length; j++)   |
| conditionalStatement | if(words[i] > words[j])                     |
| temp                 | words[i]                                    |
| word[i]              | words[j]                                    |
| word[j]              | temp                                        |
| console.log          | words                                       |

    Output: ["apple", "banana", "cherry", "mango", "zebra"]

    The output of alphabetical sorting sorts the value of the words using nested looping which compare the value of the first element and the second element. In comparing the element my thoughts of it use the ASCII values byt character i think because what i know in ASCII are character. After comparing their ASCII value of the word, the conditional statement will execute.

3. _Unique Array Builder_

| Logic or Variable     | Input/Process                                               |
| --------------------- | ----------------------------------------------------------- |
| uniqueNumbers         | []                                                          |
| whileLoop             | {uniqueNumbers.length < 10}                                 |
| randomNumber          | Math.floor(Math.random() \* 20) + 1                         |
| exists                | false                                                       |
| forLoop               | (let i = 0; i < uniqueNumbers.length; i++)                  |
| conditional Statement | if(uniqueNumbers[i] === randomNumber) exists = true; break; |
| conditional Statement | if not found, uniqueNumbers.push(randomNumber)              |
| console.log           | uniqueNumbers                                               |

    Output: [16, 10, 6, 15, 20, 1, 8, 3, 9, 13]

    The unique Array builder specifies the end of the while loop of 10. while the condition is true, this will loop until the 10. Inside of the loop, their is a variable random number between 1 to 20 use for it's later purposes. After that it is making an exists variable for conditional purpose if it exists in an array. The next line use the for loop statement using the length of uniqueNumbers as its end of looping for comparing the value of numnber if exist and if exist, the "exist" value change to true. that will terminate or break the for loop. After that there is a conditional statement which if not exist the uniqueNumber array will push the random numbers variable

4. _Triangle Checker_

| Logic or Variable        | Input/Process                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sideA                    | 7                                                                                                                                                               |
| sideB                    | 10                                                                                                                                                              |
| sideC                    | 5                                                                                                                                                               |
| if Statement equal sides | if(sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) { console.log('The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.')} |
| else                     | console.log('The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.')                                                                         |

    Output:
        The sides 7, 10, and 5 form a valid triangle.

    The triangle use a conditional statement which uses the 3 sides of its angle where the sum of 2 side is greater than the other side. If it is true. the code will execute to it's following.
