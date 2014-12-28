orion.dictionary.addDefinition('homeLogo', 'home',  
	orion.attribute('file', {
        label: "Logo",
    	optional: true
    })
);

orion.dictionary.addDefinition('homeImages', 'home',
    orion.arrayOfAttribute('file', {
        label: "Carousel Images",
    	optional: true
    })
);