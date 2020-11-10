import {sqrt} from "./sqrt"

describe('Sqrt unit tests',()=> {

    it('Should compute sqrt (25) = 5', () => {
     //Arrangin
     let result =0;
     //Act
     result = sqrt(25);
     //Assert
     expect(result).toBe(5);
    })

    it('Should compute sqrt (16) = 4', () => {
     //Arrangin
     let result =0;
     //Act
     result = sqrt(16);
     //Assert
     expect(result).toBe(4);
    })

    it('Should compute sqrt (9) = 3', () => {
        //Arrangin
        let result =0;
        //Act
        result = sqrt(9);
        //Assert
        expect(result).toBe(3);
       })

       it('Should compute sqrt (4) = 2', () => {
        //Arrangin
        let result =0;
        //Act
        result = sqrt(4);
        //Assert
        expect(result).toBe(2);
       })


})