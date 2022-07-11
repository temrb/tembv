export default {
  name: 'editUser',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'socialsTitle',
      title: 'Socials Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'linksTitle',
      title: 'Links Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'productsTitle',
      title: 'Products Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'showProductsSection',
      title: 'Products Section',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'showLinksSection',
      title: 'Links Section',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'showSocialSection',
      title: 'Social Section',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'darkMode',
      title: 'Dark Mode',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'showFooterSection',
      title: 'Footer Text',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'image',
      media: 'image',
      title: 'name',
    },
  },
}
