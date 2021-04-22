## This is the guide for Recieve my Registered Events on Mail

This api will recieve a url encoded data and following is the list of parameters along with their validations ,that are required during api call  

1. email :- check if the email entered by user is a valid email

If the validation will be satisfied then you recieve a json in response {'message':'success'} , if there will be a validation error then you will recieve a json {'message':'The validation error'}