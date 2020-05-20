let passwordIsValid = require ('../src/password_checker');
var password = "Um#xh8dgr"
describe("function checks the password_Is_Valid", function(){
   it("password should exist", function() {
       expect(password.passwordIsValid).not.toBeNull("")
      });
    
   it("password should be longer than than 8 characters", function() {
        expect(password.length).toBeGreaterThan(8)
      });
      
   it("password should have at least one lowercase lette", function() {
       expect(password).toMatch(/[a-z]/);
       }); 

   it("password should have at least one upperrcase letter", function() {
        expect(password).toMatch(/[A-Z]/);
     }); 
           
   it("password should at least have one digit", function() {
       expect(password).toMatch(/[0-9]/);
   })
   it("password should have at least one special character", function() {
           expect(password).toMatch(/[{!@#$%^&*.\*}]/);  
   });        
})