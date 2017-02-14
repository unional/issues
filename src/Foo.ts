import 'reflect-metadata'

@Reflect.metadata('somekey', 123)
export class Foo {
}

console.log('inside Foo.js', Reflect.getMetadata('somekey', Foo))
