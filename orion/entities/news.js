orion.addEntity('news', {
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
    sidebarName: 'News',
    pluralName: 'Posts',
    singularName: 'Post',
    tableColumns: [
        orion.attributeColumn('file', 'image', 'Image'),
        { data:'title', title: 'Title' },
    ]
});