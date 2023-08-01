// start App
function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a*b 
}


describe('test app', () => {
    context('math', () => {
        it('should add numbers', () => {
            expect(add(1, 2)).to.equal(3)
        })
    })
    context('math', () => {
        it ('shpould multiply numbers', () => {
            expect(multiply(2, 3)).to.equal(6)
        })
    })
})