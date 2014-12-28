orion.dictionary.addDefinition('contactAdress', 'contact', {
	type: String,
	label: "Adress",
	optional: true,
});

orion.dictionary.addDefinition('contactPhone', 'contact', {
	type: String,
	label: "Phone",
	optional: true,
});

orion.dictionary.addDefinition('contactEmail', 'contact', {
	type: String,
	label: "Email",
	optional: true,
});

orion.dictionary.addDefinition('contactImage', 'contact',  
	orion.attribute('file', {
        label: "Image",
    	optional: true
    })
);

orion.dictionary.addDefinition('contactRights', 'contact', {
	type: String,
	label: "Rights",
	optional: true,
});

orion.dictionary.addDefinition('contactRegistered', 'contact', {
	type: String,
	label: "Registration",
	optional: true,
});