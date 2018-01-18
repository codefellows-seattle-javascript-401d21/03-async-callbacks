'use strict';

require('jest');
const reader = require('../lib/reader');

describe('reader', () => {
    it('should take in an array of three file paths and create an array with the data inside each file, in the same order as file path data', () => {
        return reader.read([`${__dirname}/../assets/tacos.html`, `${__dirname}/../assets/burritos.html`, `${__dirname}/../assets/quesadillas.html`], (err, data) => {
            if (err) console.error(err);
            expect(data).toBe(['tacos', 'burritos', 'quesadillas']);
        });
    });

    it('should take in an array of more than three file paths and create an array with the data inside each file, in the same order as file path data', () => {
        return reader.read([`${__dirname}/../assets/tacos.html`, `${__dirname}/../assets/tacos.html`, `${__dirname}/../assets/quesadillas.html`, `${__dirname}/../assets/burritos.html`, `${__dirname}/../assets/quesadillas.html`], (err, data) => {
            if (err) console.error(err);
            expect(data).toBe(['tacos', 'tacos', 'quesadilla', 'burrito', 'quesadilla']);
        });
    });

    it('should take in an array of one file path and return an array containing the file path data', () => {
        return reader.read([`${__dirname}/../assets/tacos.html`], (err, data) => {
            if (err) console.error(err);
            expect(data).toBe(['tacos']);
        });
    });

    it('should reject invalid file paths', () => {
        return reader.read([`${__dirname}/../assets/cats.html`, `${__dirname}/../assets/burritos.html`, `${__dirname}/../assets/quesadillas.html`], (err, data) => {
            if (err) console.error(err);
            expect(err).not.toBeNull();
            expect(data).toBeUndefined();
        });
    });

    it('should reject non array paths', () => {
        return reader.read(`${__dirname}/../assets/tacos.html`, (err, data) => {
            if (err) console.error(err);
            expect(err).toBe('ERROR: Paths argument is not an array');
            expect(data).toBeUndefined();
        });
    });

    it('should reject empty arrays', () => {
        return reader.read([], (err, data) => {
            if (err) console.error(err);
            expect(err).toBe('ERROR: Paths argument is an empty array');
            expect(data).toBeUndefined();
        });
    });

    it('should reject an array with just an empty string', () => {
        return reader.read([''], (err, data) => {
            if (err) console.error(err);
            expect(err).toBe('ERROR: Paths argument is an empty array');
            expect(data).toBeUndefined();
        });
    });
});