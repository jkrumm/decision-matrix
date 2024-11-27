import { Hono } from 'hono'
import { serveStatic } from "hono/deno"

const app = new Hono()

app.get('/api', (c) => {
  return c.text('Hello Hono!')
})

app.get("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));


Deno.serve(app.fetch)
