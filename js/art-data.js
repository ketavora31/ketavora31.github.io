// Art Portfolio Data
const artData = [
    {
        id: "sketch-1",
        title: "Portrait Study",
        category: "Sketches",
        medium: "Graphite on paper",
        dimensions: "9 × 12 inches",
        year: "2022",
        status: "Available",
        image: "images/art/sketch-1.jpg",
        description: "This portrait study explores the human face through light and shadow. I focused on capturing the subtle nuances of expression and the interplay of light across facial features. The piece demonstrates my approach to realistic portraiture using graphite techniques."
    },
    {
        id: "sketch-2",
        title: "Urban Landscape",
        category: "Sketches",
        medium: "Ink on paper",
        dimensions: "8 × 10 inches",
        year: "2021",
        status: "Sold",
        image: "images/art/sketch-2.jpg",
        description: "This urban landscape sketch captures the energy and architecture of city life. Using ink techniques, I explored the contrast between organic and geometric forms found in urban environments. The piece reflects my interest in architectural details and urban textures."
    },
    {
        id: "sketch-3",
        title: "Figure Drawing",
        category: "Sketches",
        medium: "Charcoal on paper",
        dimensions: "18 × 24 inches",
        year: "2022",
        status: "Available",
        image: "images/art/sketch-3.jpg",
        description: "This figure drawing study explores human form and movement. Using charcoal, I focused on capturing the dynamic pose and anatomical structure. The piece demonstrates my approach to figure drawing, emphasizing gesture, proportion, and the expressive quality of line."
    },
    {
        id: "sketch-4",
        title: "Still Life",
        category: "Sketches",
        medium: "Pencil on paper",
        dimensions: "11 × 14 inches",
        year: "2021",
        status: "Available",
        image: "images/art/sketch-4.jpg",
        description: "This still life drawing explores the relationship between everyday objects and their interaction with light. Through careful observation, I captured the subtle textures and tonal variations. The composition demonstrates my interest in finding beauty in ordinary subjects."
    },
    {
        id: "sketch-5",
        title: "Nature Study",
        category: "Sketches",
        medium: "Graphite on paper",
        dimensions: "9 × 12 inches",
        year: "2023",
        status: "Available",
        image: "images/art/sketch-5.jpg",
        description: "This nature study focuses on botanical elements, exploring the intricate details of plant structures. Through careful observation and rendering, I captured the organic forms and delicate textures. The piece reflects my fascination with natural patterns and forms."
    },
    {
        id: "sketch-6",
        title: "Abstract Composition",
        category: "Sketches",
        medium: "Ink and graphite",
        dimensions: "12 × 16 inches",
        year: "2022",
        status: "Available",
        image: "images/art/sketch-6.jpg",
        description: "This abstract composition explores the relationship between line, form, and space. Combining ink and graphite, I created a dynamic interplay of elements that invites the viewer to find their own meaning. The piece represents my exploration of non-representational drawing."
    },
    {
        id: "painting-1",
        title: "Abstract Landscape",
        category: "Paintings",
        medium: "Acrylic on canvas",
        dimensions: "24 × 36 inches",
        year: "2022",
        status: "Available",
        image: "images/art/painting-1.jpg",
        description: "This abstract landscape painting explores the essence of natural environments through color and texture. Using acrylic paints, I created layers that suggest landforms, water, and sky without direct representation. The piece invites viewers to connect with nature on an emotional level."
    },
    {
        id: "painting-2",
        title: "Floral Study",
        category: "Paintings",
        medium: "Watercolor on paper",
        dimensions: "16 × 20 inches",
        year: "2021",
        status: "Sold",
        image: "images/art/painting-2.jpg",
        description: "This floral study explores the delicate nature of flowers through transparent watercolor techniques. I focused on capturing the luminous quality of petals and the fluid movement of the composition. The piece demonstrates my approach to botanical subjects and color harmony."
    },
    {
        id: "painting-3",
        title: "Urban Sunset",
        category: "Paintings",
        medium: "Oil on canvas",
        dimensions: "30 × 40 inches",
        year: "2023",
        status: "Available",
        image: "images/art/painting-3.jpg",
        description: "This urban sunset painting captures the dramatic light and atmosphere of a city at dusk. Using oil paints, I explored the interplay of warm and cool colors as light transforms the urban landscape. The piece reflects my interest in atmospheric effects and urban environments."
    },
    {
        id: "painting-4",
        title: "Portrait in Blue",
        category: "Paintings",
        medium: "Acrylic on canvas",
        dimensions: "20 × 24 inches",
        year: "2022",
        status: "Available",
        image: "images/art/painting-4.jpg",
        description: "This portrait explores emotional expression through a limited blue color palette. Using acrylic paints, I focused on capturing the subject's introspective mood through color, brushwork, and composition. The piece demonstrates my approach to expressive portraiture."
    },
    {
        id: "painting-5",
        title: "Abstract Emotions",
        category: "Paintings",
        medium: "Mixed media",
        dimensions: "36 × 48 inches",
        year: "2023",
        status: "Available",
        image: "images/art/painting-5.jpg",
        description: "This abstract painting explores emotional states through color, texture, and gestural marks. Using mixed media techniques, I created layers that suggest the complexity of human feelings. The piece invites viewers to connect with their own emotional responses to color and form."
    },
    {
        id: "painting-6",
        title: "Nature's Harmony",
        category: "Paintings",
        medium: "Watercolor on paper",
        dimensions: "18 × 24 inches",
        year: "2022",
        status: "Sold",
        image: "images/art/painting-6.jpg",
        description: "This landscape painting captures the harmony of natural elements through transparent watercolor techniques. I focused on the relationship between land, water, and sky, using color and composition to create a sense of peace and balance. The piece reflects my connection to natural environments."
    },
    {
        id: "craft-1",
        title: "Handmade Pottery",
        category: "Crafts",
        medium: "Ceramic",
        dimensions: "Various sizes",
        year: "2022",
        status: "Available",
        image: "images/art/craft-1.jpg",
        description: "This collection of handmade pottery explores form, function, and surface decoration. Working with clay, I created vessels that balance aesthetic appeal with practical use. The pieces demonstrate my approach to ceramic craft, emphasizing organic forms and tactile surfaces."
    },
    {
        id: "craft-2",
        title: "Textile Art",
        category: "Crafts",
        medium: "Mixed fabrics",
        dimensions: "24 × 36 inches",
        year: "2021",
        status: "Available",
        image: "images/art/craft-2.jpg",
        description: "This textile art piece explores pattern, texture, and color through fabric manipulation techniques. Combining various textiles, I created a composition that invites both visual and tactile engagement. The work reflects my interest in traditional craft techniques with contemporary expression."
    },
    {
        id: "craft-3",
        title: "Paper Sculpture",
        category: "Crafts",
        medium: "Handmade paper",
        dimensions: "12 × 12 × 8 inches",
        year: "2023",
        status: "Available",
        image: "images/art/craft-3.jpg",
        description: "This paper sculpture explores three-dimensional form through the manipulation of handmade paper. Using folding, cutting, and layering techniques, I created a piece that plays with light and shadow. The work demonstrates my interest in transforming simple materials into complex structures."
    },
    {
        id: "craft-4",
        title: "Jewelry Design",
        category: "Crafts",
        medium: "Mixed materials",
        dimensions: "Various sizes",
        year: "2022",
        status: "Available",
        image: "images/art/craft-4.jpg",
        description: "This collection of handcrafted jewelry explores wearable art through mixed materials. Combining metal, wood, and found objects, I created pieces that balance artistic expression with wearability. The collection reflects my approach to jewelry as both personal adornment and artistic statement."
    },
    {
        id: "craft-5",
        title: "Macramé Wall Hanging",
        category: "Crafts",
        medium: "Cotton rope",
        dimensions: "36 × 48 inches",
        year: "2023",
        status: "Available",
        image: "images/art/craft-5.jpg",
        description: "This macramé wall hanging explores texture and pattern through knotting techniques. Using cotton rope, I created a piece that combines traditional craft methods with contemporary design sensibilities. The work demonstrates my interest in revitalizing traditional crafts for modern spaces."
    },
    {
        id: "digital-1",
        title: "Digital Landscape",
        category: "Digital Art",
        medium: "Procreate",
        dimensions: "Digital file",
        year: "2023",
        status: "Available as print",
        image: "images/art/digital-1.jpg",
        description: "This digital landscape explores natural environments through digital painting techniques. Using Procreate, I created a scene that balances realistic elements with artistic interpretation. The piece demonstrates my approach to digital art as a medium for landscape expression."
    },
    {
        id: "digital-2",
        title: "Character Design",
        category: "Digital Art",
        medium: "Adobe Photoshop",
        dimensions: "Digital file",
        year: "2022",
        status: "Available as print",
        image: "images/art/digital-2.jpg",
        description: "This character design explores narrative and personality through digital illustration. Using Adobe Photoshop, I developed a character with a distinct visual style and backstory. The piece reflects my interest in creating compelling characters for storytelling and visual media."
    },
    {
        id: "digital-3",
        title: "Abstract Composition",
        category: "Digital Art",
        medium: "Adobe Illustrator",
        dimensions: "Digital file",
        year: "2023",
        status: "Available as print",
        image: "images/art/digital-3.jpg",
        description: "This digital abstract composition explores form, color, and space through vector graphics. Using Adobe Illustrator, I created a piece that plays with geometric and organic elements. The work demonstrates my approach to digital abstraction and compositional balance."
    },
    {
        id: "digital-4",
        title: "Digital Portrait",
        category: "Digital Art",
        medium: "Procreate",
        dimensions: "Digital file",
        year: "2022",
        status: "Available as print",
        image: "images/art/digital-4.jpg",
        description: "This digital portrait explores human expression through digital painting techniques. Using Procreate, I focused on capturing the subject's personality through color, brushwork, and composition. The piece demonstrates my approach to portraiture in the digital medium."
    }
];

