# ProductAuthentication

Minimal React Native CLI app with a Node.js Express server.

## Mobile

```bash
cd mobile
npm install
npm start
```

Run on Android:

```bash
cd mobile
npm run android
```

Run on iOS:

```bash
cd mobile/ios
bundle install
bundle exec pod install
cd ..
npm run ios
```

## Server

```bash
cd server
npm install
npm start
```

Server runs on `http://localhost:3000` and returns:

```json
{
  "project": "ProductAuthentication",
  "message": "Hello World"
}
```
