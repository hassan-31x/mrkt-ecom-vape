export const home = {
        name: "home", 
        title: "Misc - Home Page",
        type: "document",
        fields: [
            {
                name: "hero",
                title: "Hero Slider Content",
                type: "array",
                of: [
                    {
                        type: "object",
                        fields: [
                            {
                                name: "photo",
                                title: "Photo",
                                type: "image",
                            },
                            {
                                name: "tagline",
                                title: "Tagline",
                                type: "string",
                            },
                            {
                                name: "heading",
                                title: "Heading",
                                type: "string",
                            },
                            {
                                name: "subtext",
                                title: "Subtext",
                                type: "string",
                            },
                        ],
                    },
                ],
            },
            {
                name: 'benefits',
                title: 'Benefits Logos',
                type: 'array',
                of: [
                    {
                        type: 'object',
                        fields: [
                            {
                                name: 'logo',
                                title: 'Logo',
                                type: 'image',
                            },
                        ],
                    },
                ],
            }
        ],
  };
  