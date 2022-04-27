import { delta } from './calculadora'

// const soma = require('./soma')
// const sub = require('./sub')
// const multi = require('./multi')
// const div = require('./div')

it('Delta', () => {
    expect(delta(10,10,10)).toBe(-300)
})

// it('Soma de dois positivos', () => {
//     expect(soma(2,4)).toBe(6)
// })

// it('Soma positivo e negativo', () => {
//     expect(soma(-2,4)).toBe(2)
// })

// it('Subtração de dois mnumeros', () => {
//     expect(multi(2,4)).toBe(2)
// }) 

// it('Multiplica', () => {
//     expect(multi(2,4)).toBe(8)
// })

// it('Divide um numero por outro', () => {
//     expect(div(4,2)).toBe(2)
// })
