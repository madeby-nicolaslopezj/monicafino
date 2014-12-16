orion.addEntity('projects', {
    title: {
        type: String,
        label: "Title"
    },
    text: {
        type: orion.attributes.summernote,
        label: "Description"
    },
    image: {
        type: orion.attributes.image,
        label: "Image"
    },
    gallery: {
        type: [Object],
        optional: true
    },
    "gallery.$.title": {
        type: String,
    },
    "gallery.$.description": {
        type: String
    },
    "gallery.$.image": {
        type: orion.attributes.image
    },
    
}, {
    sidebarName: 'Projects',
    pluralName: 'Projects',
    singularName: 'Project',
    defaultIndexTableFields: [
        orion.adminIndexAttributeViews.image('image', 'Image'),
        { key: 'title', label: 'Title' },
    ]
});