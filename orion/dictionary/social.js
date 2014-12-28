orion.dictionary.addDefinition('socialFacebook', 'social', {
    type: String,
    label: "Facebook URL",
    optional: true
});

orion.dictionary.addDefinition('socialFacebookImage', 'social',  
    orion.attribute('file', {
        label: "Facebook Icon",
        optional: true
    })
);

orion.dictionary.addDefinition('socialHouzz', 'social', {
    type: String,
    label: "Houzz URL",
    optional: true
});

orion.dictionary.addDefinition('socialHouzzImage', 'social',  
    orion.attribute('file', {
        label: "Houzz Icon",
        optional: true
    })
);

orion.dictionary.addDefinition('socialPinterest', 'social', {
    type: String,
    label: "Pinterest URL",
    optional: true
});

orion.dictionary.addDefinition('socialPinterestImage', 'social',  
    orion.attribute('file', {
        label: "Pinterest Icon",
        optional: true
    })
);