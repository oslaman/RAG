import { PGlite } from '@electric-sql/pglite'
import { worker } from '@electric-sql/pglite/worker'
import { vector } from "@electric-sql/pglite/vector"
import { pg_trgm } from "@electric-sql/pglite/contrib/pg_trgm"

worker({
  async init(options) {
    console.log('worker init: options', options)
    const pglite = new PGlite({
      ...options,
      extensions: {
         vector,
         pg_trgm
      }
    })
    console.log('worker init: pglite', pglite)
    return pglite
  },
})