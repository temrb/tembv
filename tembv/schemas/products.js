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
            name: 'logo',
            title: 'Product Logo (Text Emojis)',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'price',
            title: 'Original Product Price',
            type: 'number',
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
