orion.addEntity('news', {
    title: {
        type: String,
    },
    description: {
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
    sidebarName: 'News',
    pluralName: 'News',
    singularName: 'News Item',
    defaultIndexTableFields: [
        orion.adminIndexAttributeViews.image('image', 'Image'),
        { key: 'title', label: 'Title' },
    ]
});