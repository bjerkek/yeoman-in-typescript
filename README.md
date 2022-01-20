# A Yeoman generator in Typescript
A bare bone Yeoman generator written in typescript

## How to test locally
```console
cd yeoman-in-typescript
npm i
npm link
yo foo
```

## Tips'n trix
If you publish this library to npm you could run this generator with installing either yo or the generator like this...
```console
npx --package yo --package @bjerkek/generator-foo -- yo @bjerkek/foo
```