let password = require ('../src/password_checker'); 

describe ("function checks the password_Is_Ok", function(){
    it("returns false if password does not match", function(){
        expect(password.passwordIsOk("sdHH12*#")).toBe(false)
    })

    it("returns true if password match", function(){
        expect(password.passwordIsOk("9999dHH12*#")).toBe(true)
    })
})