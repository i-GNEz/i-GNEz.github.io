## This is Api Guide For Registeration Form (Non Group event)

The Api will accept the url encoded data only, Following is the list of parameters which are required during the api call along with the validations which are made on each parameter, if any parameter will not match the validation criteria then api will send the error message in response 

1. name :- It should match the following regex /^[a-zA-Z ]*$/ and will be of max 100 characters 
2. phone_no :- use google-libphonenumber for phone number validation and phone number should have exact 10 characters
3. email :- minimum 6 characters and a basic validation of email
4. gender :- Only 2 values will be accepted m or f in lowercase
5. college :- max of 100 characters
6. college_city :- max 100 characters
7. college_roll_no :- string with max 100 characters
8. event_name :- max 100 characters and should be exactly same as provided in list

The api on post request will return a json {'message':'corresponding message'}

1. If everything will be correct and the user was already not registered then the message returned in json will be 'registered successfully'

2. If the user was already registered in the particular event then the message returned will be 'already registered'
3. If somehow a wrong event name was sent then the message would be 'event does not exist'
4. All other messages will be validation errors , so to avoid these errors make the exact validations as mentioned above

