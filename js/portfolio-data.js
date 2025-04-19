// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: "Bloom Botanicals Branding",
        category: "branding",
        tags: ["branding", "logo", "identity"],
        thumbnail: "images/portfolio/branding-1-thumb.jpg",
        images: [
            "images/portfolio/branding-1-1.jpg",
            "images/portfolio/branding-1-2.jpg",
            "images/portfolio/branding-1-3.jpg",
            "images/portfolio/branding-1-4.jpg"
        ],
        client: "Bloom Botanicals",
        date: "June 2023",
        tools: "Adobe Illustrator, Adobe Photoshop",
        link: "#",
        description: "A comprehensive brand identity for Bloom Botanicals, an eco-friendly plant shop. The project included logo design, color palette, typography, packaging, and brand guidelines. The design approach focused on creating a fresh, organic feel that reflects the brand's commitment to sustainability and natural products."
    },
    {
        id: 2,
        title: "Wanderlust Travel App",
        category: "ui-ux",
        tags: ["ui", "ux", "mobile app"],
        thumbnail: "images/portfolio/ui-1-thumb.jpg",
        images: [
            "images/portfolio/ui-1-1.jpg",
            "images/portfolio/ui-1-2.jpg",
            "images/portfolio/ui-1-3.jpg",
            "images/portfolio/ui-1-4.jpg"
        ],
        client: "Wanderlust Travel",
        date: "May 2023",
        tools: "Figma, Adobe Photoshop",
        link: "#",
        description: "Wanderlust is a travel planning app designed to help users discover, plan, and book their dream vacations. The UI/UX design focused on creating an intuitive, visually appealing interface that makes travel planning enjoyable. The app features personalized recommendations, interactive maps, and a seamless booking process."
    },
    {
        id: 3,
        title: "Cosmic Dreams Illustration Series",
        category: "illustration",
        tags: ["illustration", "digital art"],
        thumbnail: "images/portfolio/illustration-1-thumb.jpg",
        images: [
            "images/portfolio/illustration-1-1.jpg",
            "images/portfolio/illustration-1-2.jpg",
            "images/portfolio/illustration-1-3.jpg",
            "images/portfolio/illustration-1-4.jpg"
        ],
        client: "Personal Project",
        date: "April 2023",
        tools: "Adobe Illustrator, Procreate",
        link: "#",
        description: "Cosmic Dreams is a personal illustration series exploring the themes of space, dreams, and human imagination. The series features vibrant, surreal illustrations that blend cosmic elements with dreamlike scenarios, creating visually captivating artwork that invites viewers to explore their own imagination."
    },
    {
        id: 4,
        title: "Pulse Fitness Brand Identity",
        category: "branding",
        tags: ["branding", "logo", "identity"],
        thumbnail: "images/portfolio/branding-2-thumb.jpg",
        images: [
            "images/portfolio/branding-2-1.jpg",
            "images/portfolio/branding-2-2.jpg",
            "images/portfolio/branding-2-3.jpg",
            "images/portfolio/branding-2-4.jpg"
        ],
        client: "Pulse Fitness",
        date: "March 2023",
        tools: "Adobe Illustrator, Adobe Photoshop",
        link: "#",
        description: "A dynamic brand identity for Pulse Fitness, a modern gym chain focused on high-intensity workouts and community building. The branding includes a bold logo, energetic color palette, custom typography, and application across various touchpoints including signage, merchandise, and digital platforms."
    },
    {
        id: 5,
        title: "Harmony Music App Interface",
        category: "ui-ux",
        tags: ["ui", "ux", "web design"],
        thumbnail: "images/portfolio/ui-2-thumb.jpg",
        images: [
            "images/portfolio/ui-2-1.jpg",
            "images/portfolio/ui-2-2.jpg",
            "images/portfolio/ui-2-3.jpg",
            "images/portfolio/ui-2-4.jpg"
        ],
        client: "Harmony Music",
        date: "February 2023",
        tools: "Figma, Adobe Photoshop",
        link: "#",
        description: "Harmony is a music streaming platform designed to provide a personalized listening experience. The UI/UX design focuses on creating a clean, intuitive interface that makes discovering and enjoying music effortless. Features include customizable playlists, advanced search functionality, and social sharing capabilities."
    },
    {
        id: 6,
        title: "Urban Jungle Illustration Collection",
        category: "illustration",
        tags: ["illustration", "digital art"],
        thumbnail: "images/portfolio/illustration-2-thumb.jpg",
        images: [
            "images/portfolio/illustration-2-1.jpg",
            "images/portfolio/illustration-2-2.jpg",
            "images/portfolio/illustration-2-3.jpg",
            "images/portfolio/illustration-2-4.jpg"
        ],
        client: "Urban Magazine",
        date: "January 2023",
        tools: "Adobe Illustrator, Procreate",
        link: "#",
        description: "Urban Jungle is a series of illustrations created for Urban Magazine's special edition on city life. The illustrations depict the contrast between urban environments and nature, exploring how plants and wildlife adapt to city settings. The style combines detailed linework with vibrant colors to create visually striking compositions."
    },
    {
        id: 7,
        title: "Artisan Bakery Packaging",
        category: "packaging",
        tags: ["packaging", "branding"],
        thumbnail: "images/portfolio/packaging-1-thumb.jpg",
        images: [
            "images/portfolio/packaging-1-1.jpg",
            "images/portfolio/packaging-1-2.jpg",
            "images/portfolio/packaging-1-3.jpg",
            "images/portfolio/packaging-1-4.jpg"
        ],
        client: "Artisan Bakery",
        date: "December 2022",
        tools: "Adobe Illustrator, Adobe Photoshop",
        link: "#",
        description: "A comprehensive packaging design for Artisan Bakery, a premium bakery specializing in handcrafted bread and pastries. The design emphasizes the artisanal quality of the products through elegant typography, natural textures, and a refined color palette. The packaging includes bread bags, pastry boxes, and gift packaging."
    },
    {
        id: 8,
        title: "Neon Dreams Photography Website",
        category: "web",
        tags: ["web design", "ui", "ux"],
        thumbnail: "images/portfolio/web-1-thumb.jpg",
        images: [
            "images/portfolio/web-1-1.jpg",
            "images/portfolio/web-1-2.jpg",
            "images/portfolio/web-1-3.jpg",
            "images/portfolio/web-1-4.jpg"
        ],
        client: "Neon Dreams Photography",
        date: "November 2022",
        tools: "Figma, Adobe Photoshop",
        link: "#",
        description: "A portfolio website for Neon Dreams Photography, a studio specializing in night photography and neon-lit urban scenes. The website design features a dark theme with neon accents, immersive image galleries, and smooth transitions. The layout is optimized to showcase the photographer's work while providing an intuitive user experience."
    },
    {
        id: 9,
        title: "Eco Essentials Product Line",
        category: "packaging",
        tags: ["packaging", "branding", "sustainable"],
        thumbnail: "images/portfolio/packaging-2-thumb.jpg",
        images: [
            "images/portfolio/packaging-2-1.jpg",
            "images/portfolio/packaging-2-2.jpg",
            "images/portfolio/packaging-2-3.jpg",
            "images/portfolio/packaging-2-4.jpg"
        ],
        client: "Eco Essentials",
        date: "October 2022",
        tools: "Adobe Illustrator, Adobe Photoshop",
        link: "#",
        description: "Packaging design for Eco Essentials, a brand offering sustainable household products. The design emphasizes the brand's commitment to environmental responsibility through minimalist design, eco-friendly materials, and clear communication of product benefits. The packaging includes a range of products from cleaning supplies to personal care items."
    }
];

