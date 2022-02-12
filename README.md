# A Yeoman generator in Typescript
A Yeoman generator written in typescript.

## How to test run the generator locally
```console
cd yeoman-in-typescript
npm i
npm link
yo foo
```

## Tips'n trix
If you publish this library to npm you could run this generator without installing either yo or the generator using npx like this...
```console
npx --package yo --package @bjerkek/generator-foo@latest -- yo @bjerkek/foo
```

--no 

npx 