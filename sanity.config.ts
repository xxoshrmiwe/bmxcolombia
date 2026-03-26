import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'bmxcolombia',
  title: 'BMX Colombia — Admin',
  basePath: '/studio',
  projectId: '0oez72ce',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
