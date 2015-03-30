orion.dictionary.addDefinition('homeLogo', 'home',  
	orion.attribute('file', {
        label: "Logo",
    	autoform: {
			skipLabel: true
		}
    })
);

orion.dictionary.addDefinition('homeImages', 'home',
    orion.arrayOfAttribute('file', {
        label: "Carousel Images"
    })
);

orion.dictionary.addDefinition('homeText', 'home',
    orion.attribute('froala', {
        label: "Text"
    })
);