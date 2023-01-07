import { formula } from "./app.y=aX+b";
//Should return y = [1, 3, 5, 7], if X=[0.0, 1.0, 2.0, 3.0], a=2 y b=1
describe('formula unit tests', () => {
    
    it('Should return y = [7], if X=[3.0], a=2 y b=1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result: number[]=[];
        
        // Act
        result = formula([3.0],2,1);

        // Assert
        expect(result).toEqual([7]);
    })
    
    it('Should return y = [8], if X=[3.5], a=2 y b=1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result: number[]=[];
        
        // Act
        result = formula([3.5],20,15);

        // Assert
        expect(result).toEqual([85]);
    })
    
    it('Should return y = [1, 3, 5, 7], if X=[0.0, 1.0, 2.0, 3.0], a=2 y b=1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result: number[]=[];
        
        // Act
        result = formula([0.0, 1.0, 2.0, 3.0],2,1);

        // Assert
        expect(result).toEqual([1,3,5,7]);
    })

    it('Should return y = [7,6,81], if X=[3.0,2.5,40.0], a=2 y b=1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result: number[]=[];
        
        // Act
        result = formula([3.0,2.5,40.0],2,1);

        // Assert
        expect(result).toEqual([7,6,81]);
    })

    it('Should return y = [629,193,453], if X=[78.0,23.5,56.0], a=8 y b=5', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result: number[]=[];
        
        // Act
        result = formula([78.0,23.5,56.0],8,5);

        // Assert
        expect(result).toEqual([629,193,453]);
    })

})