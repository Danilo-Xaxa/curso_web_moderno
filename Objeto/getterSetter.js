const ipado = {
    _foo: 1,
    modo: 'MESMO',
    get foo() { 
        if (this.modo == 'MESMO') {
            return this._foo
        } else if (this.modo == 'INCREMENTADO') {
            return ++this._foo // tem diferença sendo ++this._foo, this._foo++ e this._foo + 1
        }
    },
    set foo(foo) {
        if (foo >= this._foo) {
            this._foo = foo
        }
    }
}

console.log(ipado.foo, ipado.foo, ipado.foo)
ipado.modo = 'INCREMENTADO'
console.log(ipado.foo, ipado.foo, ipado.foo)
ipado.modo = 'MESMO'
console.log(ipado.foo, ipado.foo, ipado.foo)
