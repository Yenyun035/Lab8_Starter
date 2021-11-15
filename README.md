# Lab 8 - Starter

Yen-Yun Wu

1. In your own words: Where would you fit your automated tests in your Recipe project development pipeline?
    - Whenever code is pushed to the repo, it will be executed through GitHub Action
    - Before pushing code to the repo, it can be run locally first

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
    - No. This should be done by Unit Testing

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    - It might be able to test by checking if a message is sent successfully by a user and checking if the user is able to input a message because there might be specific functions handling them and returning a HTTP response.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    - This could be tested by checking if the max length is reached, by inputing more text, does the message have more text or remain the same as the text reached the max length. I think this can be tested since the level of interaction of this feature is relatively simple.
