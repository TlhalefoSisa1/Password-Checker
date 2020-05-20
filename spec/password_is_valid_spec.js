let passwordIsValid = require ('../src/password_checker');
var password = "Um#xh8dgr"
describe("function checks the password_Is_Valid", function(){
   it("should provide outcome for password checker", function() {
       expect(password.passwordIsValid).not.toBeNull("")
      });
    
   it("should provide outcome for password checker", function() {
        expect(password.length).toBeGreaterThan(8)
      });
      
   it("should provide outcome for password checker", function() {
       expect(password).toMatch(/[a-z]/);
       }); 

   it("should provide outcome for password checker", function() {
        expect(password).toMatch(/[A-Z]/);
     }); 
           
   it("should provide outcome for password checker", function() {
       expect(password).toMatch(/[0-9]/);
   })
   it("should provide outcome for password checker", function() {
           expect(password).toMatch(/[{!@#$%^&*.\*}]/);  
   });        
})