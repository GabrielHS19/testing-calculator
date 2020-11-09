import {addition} from "./addition"

describe('addition unit tests',()=> {

    it('Should add 2 +2 = 4', () => {
     //Arrangin
     let result =0;
     //Act
     result = addition(2,2);
     //Assert
     expect(result).toBe(4);
    })

    it('Should add 0 + -2 = -2', () => {
     //Arrangin
     let result =0;
     //Act
     result = addition(0,-2);
     //Assert
     expect(result).toBe(-2);
    })

    it('Should add 3 + 0.123 = 3.123', () => {
        //Arrangin
        let result =0;
        //Act
        result = addition(3,0.123);
        //Assert
        expect(result).toBe(3.123);
       })

       it('Should add 2 + 0.4 = 2.4', () => {
        //Arrangin
        let result =0;
        //Act
        result = addition(2,0.4);
        //Assert
        expect(result).toBe(2.4);
       })

})