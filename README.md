# @fanfix/nestjs-firebase

## Install

```
npm install @fanfix/nestjs-firebase
```

## Usage
## Please note that this version of nestjs-firebase uses the applicationDefault() credentials. If this is *not* what you want, you should consider using the original: 
https://github.com/g59/nestjs-plugins/tree/main/packages/nestjs-firebase


```typescript
@Module({
  imports: [
    FirebaseModule.forRoot(),
  ],
})
export class AppModule {}

// using in service class
export class Service {
  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {}
}
```

## Contributing

PRs accepted.

## License

[MIT](https://github.com/g59/nestjs-plugins/blob/main/LICENSE) © g59
