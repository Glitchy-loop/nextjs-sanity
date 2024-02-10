export default {
  name: 'product',
  type: 'document',
  title: 'Product',

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images of Product',
      of: [{type: 'image'}],
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price in EUR(€)',
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug for the product URL',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    },
  ],
}
