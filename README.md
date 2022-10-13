# Github to Slack

Transforms PR data from github to a formatted message for slack group within:
- cli
- slack bot
```
/pr 8080 => <https://github.com/Sixt/com.sixt.web.public/pull/8080|[WET-2003] make dealslider item box clickable> | +19 / -10 | @mysixt, @wet
```

### Start working

Create an .env file
```
cp .env.sample .env
````

Create a github token and add it to .env

```
GITHUB_SECRET=[YOUR-GITHUB-SECRET]
```

### Usage:
- cli
```bash
node cli.js 8080
```
or
```bash
yarn cli 8080
```
- slack bot
```
/pr 8080
```
