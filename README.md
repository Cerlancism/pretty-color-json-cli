# pretty-color-json-cli

A NodeJS command line utility to pretty print JSON string like an object literal with color to the terminal using the native `console.log` and `inspect` from NodeJS.

### Similar tools:  

- [prettyjson](https://www.npmjs.com/package/prettyjson): pretty color prints JSON as YAML
- [prettier](https://www.npmjs.com/package/prettier) [pretty-js](https://www.npmjs.com/package/pretty-js) [json-format-cli](https://www.npmjs.com/package/json-format-cli): Has options to pretty print JSON but without color

## Installation
`$ npm install -g https://github.com/Cerlancism/pretty-color-json-cli`

## Examples

### Piping
`$ curl -sL https://ipinfo.io/1.1.1.1/json | pretty-color-json`

```js
{
  ip: '1.1.1.1',
  hostname: 'one.one.one.one',
  city: 'The Rocks',
  region: 'New South Wales',
  country: 'AU',
  loc: '-33.8592,151.2081',
  org: 'AS13335 Cloudflare, Inc.',
  postal: '2000',
  timezone: 'Australia/Sydney',
  readme: 'https://ipinfo.io/missingauth'
}
```

### Read from file
`$ curl -sL https://api.chucknorris.io/jokes/random > joke.json` 

`joke.json`: 
```json
{"category":null,"icon_url":"https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png","id":"zvno1ZJIQfetnTX5ye8TwQ","url":"https:\/\/api.chucknorris.io\/jokes\/zvno1ZJIQfetnTX5ye8TwQ","value":"The Old Spice Man aspires to smell like Chuck Norris"}
```  

`$ pretty-color-json < joke.json`

```js
{
  categories: [],
  created_at: '2020-01-05 13:42:26.991637',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'A7jUZR5wTZGvV-jtyIphOw',
  updated_at: '2020-01-05 13:42:26.991637',
  url: 'https://api.chucknorris.io/jokes/A7jUZR5wTZGvV-jtyIphOw',
  value: 'Chuck Norris once ran a quarter mile in 3.7 seconds, while pulling an 18-wheeler in wet cement.'
}
```

### Output as a formatted JSON file
`$ pretty-color-json < joke.json > joke_formatted.json`

```json
{
  "categories": [],
  "created_at": "2020-01-05 13:42:26.991637",
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "A7jUZR5wTZGvV-jtyIphOw",
  "updated_at": "2020-01-05 13:42:26.991637",
  "url": "https://api.chucknorris.io/jokes/A7jUZR5wTZGvV-jtyIphOw",
  "value": "Chuck Norris once ran a quarter mile in 3.7 seconds, while pulling an 18-wheeler in wet cement."
}
```

## Note
This by default prints JSON like a JavaScript object literal which the keys are no longer wrapped with quotes, therefore the output will no longer be a valid JSON. Use [json-format-cli](https://www.npmjs.com/package/json-format-cli) or output to a file instead for formatted valid JSON.
