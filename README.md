# Find-First-ff-
## Section 1 - Command Description

FindFirst is a command-line tool that combines the ideas of the `grep` and `head` commands. It searches for a pattern in the first specified number of lines of a file and prints the lines that contain that pattern. 

To run the command: 

`node ff.js PATTERN FILENAME NUMBER_OF_LINES`

Example:

`node ff.js error sample.log 10`

This searches the first 10 lines of `sample.log` and prints any lines that contain " error".

The commands it combines are:
- `head` - looks at the first specified number of lines in a file
- `grep` - searches for lines that contain a pattern

  ## Section 2 - AI-Assisted Programming

  I asked AI mainly when I needed help understanding how the two commands can work together. I asked what concepts for `head` and `grep` could be used to make FindFirst and asked for help in understanding what FindFirst was supposed to do.
  AI helped me comprehend that `grep` searches for a pattern in a file, while `head` limits the output to a certain number of lines. This helped me comprehend why FindFirst needs a filename, a pattern, and a number of lines.
  I still had to understand the code we worked on in class and how each part worked. For example, I had to understand how `process.argv` gets the information entered in the command line, how the file is read and split into lines, and how the loop checks the lines for the pattern.
  One thing I observed was that AI sometimes gave solutions or explanations that were more complicated than what we were doing in class. I had to use what we learned in class to make sure my answers and understanding matched the way our program was actually written. 
