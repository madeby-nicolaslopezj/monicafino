orion.addEntity('aboutGalleryImages', {
    title: {
        type: String,
        label: "Title"
    },
    description: {
        type: String,
        label: "Description"
    },
    image: {
        type: orion.attributes.image,
        label: "Image"
    },
    aboutIndex: {
        type: Number,
        label: "Attached to which about image",
        allowedValues: [1, 2, 3, 4]
    }
}, {
    sidebarName: 'About Gallery',
    pluralName: 'Images',
    singularName: 'Image',
    defaultIndexTableFields: [
        orion.adminIndexAttributeViews.image('image', 'Image'),
        { key: 'title', label: 'Title' },
        { key: 'aboutIndex', label: 'About Image' },
    ]
});