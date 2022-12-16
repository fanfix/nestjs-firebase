# nestjs-firebase

![Actions Status](https://github.com/g59/nestjs-plugins/workflows/Node%20CI/badge.svg)

## Install

```
npm install nestjs-firebase
```

## Usage

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
