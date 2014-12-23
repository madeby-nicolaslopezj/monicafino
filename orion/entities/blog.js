orion.addEntity('blog', {
    title: {
        type: String,
    },
    preview: {
        type: String,
        autoform: {
            type: 'textarea'
        }
    },
    text: {
        type: orion.attributes.summernote,
    },
    image: {
        type: orion.attributes.image,
    }
}, {
    sidebarName: 'Blog',
    pluralName: 'Posts',
    singularName: 'Post',
    defaultIndexTableFields: [
        orion.adminIndexAttributeViews.image('image', 'Image'),
        { key: 'title', label: 'Title' },
    ]
});