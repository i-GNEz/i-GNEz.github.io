## This is Api Guide for Feedback Form

This api will accept the url encoded data only , following is the list of parameters which will are rquired during the api call along with validations 

1. email :-  Please validate that this field should be email only
2. feedback :- Please validate it is a strring and its length should not be greater then 300

if everything will be ok then youu will recieve a json {'message':'success'},
if the fields fail to match the validations you will recieve a json {'message':The validation error}
if the connectivity failed with database then you will recieve a json {'message':'Something went wrong'}