
# fastify-dayjs

Fastify plugin to add dayjs support


## Usage/Examples

```javascript
import path from 'path'
import fastify from 'fastify'
import fastifyDayjs from 'fastify-dayjs'

const app = fastify()
app.register(fastifyDayjs)

app.get('/', () => {
  return app.dayjs().format()
})

app.listen({ port: 8000 }, (err, address) => {
  if (err) throw err
  console.log(`server running on ${address}`)
})
```


## API Reference

Read more at [https://day.js.org/](https://day.js.org/)
