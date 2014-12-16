orion.dictionary.addDefinition('homeLogo', 'home', {
    type: orion.attributes.image,
    label: "Logo",
    optional: true
});

orion.dictionary.addDefinition('homeImages', 'home', {
    type: [orion.attributes.image],
    label: "Carousel Images",
    optional: true
});