import { Pet } from './pet.js';
export const PETS = [
    new Pet('Garfunkel', 'dog', 'Pepe', true),
    new Pet('El Pollo Loco', 'bird', 'Paco', true),
    new Pet('Rey Tortugo', 'turtle', 'Manolo', true),
];
PETS[0].isAdopted = true;
