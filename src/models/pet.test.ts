import { Pet } from './pet';

describe('Given the class Pet', () => {
    test('when we instantiate the class, then we do have an object, we check for property values', () => {
        // Arrange + Act
        const petname = 'petname1';
        const breed = 'breed1';
        const owner = 'owner1';
        const isAdopted = false;
        const character = new Pet(petname, breed, owner);
        const id = character.id;
        const expectedResult = {
            petname,
            breed,
            owner,
            isAdopted,
            id,
        };

        // Assert
        expect(character).toEqual(expectedResult);
    });
});
