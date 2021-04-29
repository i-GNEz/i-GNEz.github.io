The process for group event will be somewhat similar to the solo event 

Steps To Follow 
1. Give the user a create button on pressing that button a new form will be created on each click ,the form created will  be the clone of Solo Event Registeration Form. If the user have submitted the form n number of times and n is the maximum limit for that event then display a message to user no more particpants can be added.
2. Each Form Will be exactly same as Solo event Registeration Form but the twist is for each form team_name value will be the email id of 1 st particpant .
3. You can send all the forms together (Please note that for n forms you have to make n calls to solo user Registeration Api) though it is not prefered to do so . Send each form side by side as the user click the button for new form.
4. If the particpant details(email id) entered by the user already exist for that event then Api will  return 'already registered'  , handle this error carefully , ask user if he want to add some another member in his teams