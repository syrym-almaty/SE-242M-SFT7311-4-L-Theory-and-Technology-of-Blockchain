pragma solidity >=0.8.2 <0.9.0;

// pragma solidity ^0.8.0;

contract HelloWorld {
    // Define an event
    event Hello(string message);

    // Function to emit the hello world message
    function sayHello() public {
        emit Hello("Hello, World!");
    }
}
