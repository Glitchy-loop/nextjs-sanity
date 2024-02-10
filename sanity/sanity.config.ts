import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Zyle',

  projectId: '7yzcbu3a',
  dataset: 'product-dataset',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
