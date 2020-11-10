import {sqr} from "./sqr"

describe('Sqr unit test',()=> {

    it('Should compute 2 ^ 2 = 4', () => {
     //Arrangin
     let result =0;
     //Act
     result = sqr(2);
     //Assert
     expect(result).toBe(4);
    })

    it('Should compute 3 ^ 2 = 9', () => {
     //Arrangin
     let result =0;
     //Act
     result = sqr(3);
     //Assert
     expect(result).toBe(9);
    })

    it('Should compute 4 ^2 = 16', () => {
        //Arrangin
        let result =0;
        //Act
        result = sqr(4);
        //Assert
        expect(result).toBe(16);
       })

       it('Should compute 5 ^2 = 25', () => {
        //Arrangin
        let result =0;
        //Act
        result = sqr(5);
        //Assert
        expect(result).toBe(25);
       })

})