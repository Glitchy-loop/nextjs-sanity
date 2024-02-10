export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'Name of the category',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug for the category',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
}
