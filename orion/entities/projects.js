orion.addEntity('projects', {
    title: {
        type: String,
        label: "Title"
    },
    text: orion.attribute('froala', {
        label: "Description",
        optional: true
    }),
    image: orion.attribute('file', {
        label: "Image",
    }),
    gallery: {
        type: [Object],
        optional: true
    },
    "gallery.$.image": orion.attribute('file'),
}, {
    sidebarName: 'Projects',
    pluralName: 'Projects',
    singularName: 'Project',
    tableColumns: [
        orion.attributeColumn('file', 'image', 'Image'),
        { data:'title', title: 'Title' },
    ]
});