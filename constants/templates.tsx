export type TemplateInput = {
    id: string;
    label: string;
    placeholder: string;
    type: "text" | "textarea" | "select";
    options?: string[];
};

export type Template = {
    id: string;
    title: string;
    description: string;
    command: string;
    inputs: TemplateInput[];
    icon: any;
    categories: string[];
};

export const TEMPLATES: Template[] = [
    {
        "id": "a6dc-0f21-c102-6c22",
        "title": "Amazon Product Description (paragraph)",
        "description": "Create compelling product descriptions for Amazon listings.",
        "command": "Create compelling product descriptions for Amazon listings.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["ecommerce", "ads"],
        inputs: [
            {
                id: "product-name",
                label: "Product Name",
                placeholder: "A red t-shirt",
                type: "text",
            },
            {
                id: "key-features",
                label: "Key Features/Benefits",
                placeholder: "Stretching, pleasant",
                type: "textarea",
            },
            {
                id: "tone-of-voice",
                label: "Tone of Voice",
                placeholder: "Select a tone. For example: Witty, Friendly, Disappointed, Polite, Creative, Professional or a known person such as Michael Jordan",
                type: "text",
            },
        ]
    },
    {
        "id": "3b9e-c357-63fb-f7cb",
        "title": "Amazon Product Features (bullets)",
        "description": "Create key feature and benefit bullet points for Amazon listings under the 'about this item' section.",
        "command": "Create key feature and benefit bullet points for Amazon listings under the 'about this item' section.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["ecommerce", "ads"],
        "inputs": [
            {
                "id": "product-name",
                "label": "Product Name",
                "placeholder": "EcoBoost Portable Solar Charger",
                "type": "text"
            },
            {
                "id": "product-info",
                "label": "Product Info",
                "placeholder": "EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices",
                "type": "textarea"
            },
            {
                "id": "product-benefits",
                "label": "Key Benefits/Features",
                "placeholder": "Lightweight design. Waterproof & Durable. Fast charging. Universal compatibility. Environmentally friendly.",
                "type": "text"
            },
            {
                "id": "tone-of-voice",
                "label": "Tone of Voice",
                "placeholder": "Professional. Friendly. Funny.",
                "type": "text"
            }
        ]
    },

    {
        "id": "5df5-5b3a-d3a7-1610",
        "title": "Blog Post Conclusion Paragraph",
        "description": "Wrap up your blog posts with an engaging conclusion paragraph.",
        "command": "Wrap up your blog posts with an engaging conclusion paragraph.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "blogPostMainPoints",
                "label": "What are the main points or outline of your blog post?",
                "placeholder": "The importance of time management. Tips for better time management. Benefits of effective time management.",
                "type": "textarea"
            },
            {
                "id": "cta",
                "label": "Call to action",
                "placeholder": "Share your time management tips with us in the comments below!",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Motivational",
                "type": "text"
            }
        ]
    },
    {
        "id": "8d27-85d1-d2bb-f6d8",
        "title": "Blog Post Intro Paragraph",
        "description": "Write an engaging opening paragraph for your blog post.",
        "command": "Write an engaging opening paragraph for your blog post.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "blogPostTitle",
                "label": "Blog post title",
                "placeholder": "Creative Ways to Save Money on a Tight Budget",
                "type": "text"
            },
            {
                "id": "audience",
                "label": "Audience",
                "placeholder": "Young professionals, Students, Budget-conscious individuals",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Friendly, Encouraging",
                "type": "text"
            }
        ]
    },
    {
        "id": "eb38-d6a3-3b3c-d790",
        "title": "Blog Post Outline",
        "description": "Create lists and outlines for articles, for example for 'How to' style blog posts and articles.",
        "command": "Create lists and outlines for articles, for example for 'How to' style blog posts and articles.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "title",
                "label": "Blog post title/topic",
                "placeholder": "Top 10 Remote Work Tools for Increased Productivity",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Relaxed, Helpful",
                "type": "text"
            }
        ]
    },

    {
        "id": "f4b4-4dc9-38e4-4714",
        "title": "Blog Post Topic Ideas",
        "description": "Generate new blog post topics that will engage readers and rank well on Google.",
        "command": "Generate new blog post topics that will engage readers and rank well on Google.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo", "google"],
        "inputs": [
            {
                "id": "brandName",
                "label": "Brand name",
                "placeholder": "Eco Warrior",
                "type": "text"
            },
            {
                "id": "productDescription",
                "label": "Product description",
                "placeholder": "Eco-friendly products for a sustainable lifestyle, including reusable bags, water bottles, and home cleaning solutions.",
                "type": "textarea"
            },
            {
                "id": "audience",
                "label": "Audience",
                "placeholder": "Eco-conscious consumers, Sustainability advocates, Homeowners",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Friendly, Encouraging",
                "type": "text"
            }
        ]
    },
    {
        "id": "a0c6-7112-e2d8-07e9",
        "title": "Business or Product Name",
        "description": "Generate a winning name for your business or product.",
        "command": "Generate a winning name for your business or product.",
        "icon": "<i class='fas fa-lightbulb text-primary' ></i>",
        "categories": ["marketing"],
        "inputs": [
            {
                "id": "form-field-description",
                "type": "textarea",
                "label": "Tell us about your business or product",
                "placeholder": "Innovative online marketplace connecting local service providers and customers.",
            },
            {
                "id": "form-field-keywords",
                "type": "text",
                "label": "Keywords to include",
                "placeholder": "ninja",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4374",
        "title": "Commands",
        "description": "Tell Jema.ai exactly what to write with a command.",
        "command": "Please do the following: ",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["all", "google"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "Your command",
                "placeholder": "Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice",
            },
            {
                "id": "form-field-content",
                "type": "textarea",
                "label": "Background information",
                "placeholder": "Tobby was a happy dog that loved to sneak around eating people's food",
            }
        ]
    },
    {
        "id": "2f67-d52f-fc58-383d",
        "title": "Creative Story",
        "description": "Write creative stories to engage readers.",
        "command": "Write a creative story ",
        "icon": "<i class='fas fa-book-open text-primary'></i>",
        "categories": ["blog", "website"],
        "inputs": [
            {
                "id": "storyPlot",
                "type": "textarea",
                "label": "Plot",
                "placeholder": "A magical kingdom faces a drought that threatens its existence. The king sends a brave knight on a quest to find a legendary water source.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Whimsical",
            }
        ]
    },
    {
        "id": "1a79-8d7e-cc88-1e61",
        "title": "Email Subject Lines",
        "description": "Get your emails opened with irresistible subject lines.",
        "command": "Write Email Subject Lines. use the following : ",
        "icon": "<i class='fas fa-envelope text-primary'></i>",
        "categories": ["email", "marketing"],
        "inputs": [
            {
                "id": "companyName",
                "type": "text",
                "label": "Company/Product Name",
                "placeholder": "SmartMailer",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Friendly",
            },
            {
                "id": "emailContent",
                "type": "textarea",
                "label": "What is your email about?",
                "placeholder": "Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount.",
            }
        ]
    }

]
