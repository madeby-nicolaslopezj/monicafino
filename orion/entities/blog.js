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
    text: orion.attribute('froala'),
    image: orion.attribute('file')
}, {
    sidebarName: 'Blog',
    pluralName: 'Posts',
    singularName: 'Post',
    tableColumns: [
        orion.attributeColumn('file', 'image', 'Image'),
        { data:'title', title: 'Title' },
    ]
});