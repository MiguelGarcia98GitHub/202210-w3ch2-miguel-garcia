import { Component } from './component';

describe('Given the class Component', () => {
    test('when we call the render method without a valid selector, it should return false, ', () => {
        // Arrange + Act
        const newComponent = new Component();
        const result = newComponent.render('', '');
        const expectedResult = false;
        // Assert
        expect(result).toBe(expectedResult);
    });
});
