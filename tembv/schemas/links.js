export default {
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'linkText',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Mentioned Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
  ],
}
