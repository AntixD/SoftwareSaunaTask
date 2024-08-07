Software Sauna Code Challenge Solution
This repository contains a solution to the Software Sauna Code Challenge, implemented using Node.js, TypeScript, and Jest.

Getting Started
Installation

To install the necessary dependencies and run the tests, execute the following commands:
- npm install |
- npm test |

Implementation Details
Core Modules
FollowPath (src/core/followPath):

This module contains the main logic for navigating the grid, starting at @ and stopping at x. It coordinates the traversal process and handles the collection of letters along the path.
Traversal (src/core/traversal):

This module provides the underlying traversal algorithm, managing movement through the grid based on direction and handling different types of nodes, including intersections.
Helper Modules
File Utilities (src/helpers/file):

These utilities handle reading the grid input from text files and converting it into a format suitable for processing.
String Utilities (src/helpers/string):

This module contains functions for string manipulation, such as checking for valid characters and counting occurrences.
Validation (src/helpers/validation):

Validation logic ensures that the grid input is valid before processing begins, including checks for the correct number of start and end characters.
Testing
This project is fully tested using Jest, with tests organized by module. Both unit tests for individual components and high-level acceptance tests are included.

Running Tests
To run all tests:

- npm test | 
Test Structure
Unit Tests: Located alongside their respective modules, testing isolated pieces of logic.
Acceptance Tests: Located in tests/, ensuring the overall program behaves as expected with various example grids.
Notes and Considerations
File Handling: Example grids are read synchronously from text files into arrays of strings. Given the challenge's scope, no further optimization was implemented for file loading.
Validation: Start and end value validation is performed before the traversal algorithm starts. Additional validation during traversal would require more specific behavior details.
Recursion: The traversal logic uses recursion. While this is sufficient for the provided examples, a different approach may be needed for handling very large grids to avoid potential stack overflow issues.
Conclusion
This project demonstrates a modular and test-driven approach to solving the Software Sauna Code Challenge. The structure is designed to be maintainable and scalable, with clear separation between core logic, utility functions, and type definitions.
