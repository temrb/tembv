export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number',
            validation: Rule => Rule.required(),
        },
        {
            name: 'discount',
            title: 'Product Discount (x / 100%)',
            type: 'number',
        },
        {
            name: 'link',
            title: 'Product Link',
            type: 'string',
            validation: Rule => Rule.required(),
        },
    ],
}
