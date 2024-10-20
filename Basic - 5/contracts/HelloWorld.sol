// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message;
    string[] public messageHistory;
    uint public messageChangeCount;

    constructor() {
        message = "Hello, World!";
        messageHistory.push(message);
        messageChangeCount = 0;
    }

    function setMessage(string memory _message) public {
        message = _message;
        messageHistory.push(_message);
        messageChangeCount++;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function getMessageHistory() public view returns (string[] memory) {
        return messageHistory;
    }
}

