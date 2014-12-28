orion.addEntity('aboutGalleryImages', {
    title: {
        type: String,
        label: "Title"
    },
    description: {
        type: String,
        label: "Description"
    },
    image: orion.attribute('file', {
        label: "Image",
        optional: true
    }),
    aboutIndex: {
        type: Number,
        label: "Attached to which about image",
        allowedValues: [1, 2, 3, 4]
    }
}, {
    sidebarName: 'About Gallery',
    pluralName: 'Images',
    singularName: 'Image',
    tableColumns: [
        orion.attributeColumn('file', 'image', 'Image'),
        { data:'title', title: 'Title' },
        { data:'aboutIndex', title: 'About Image' },
    ]
});