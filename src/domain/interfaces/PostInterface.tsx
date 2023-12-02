export interface Post {
    id: string;
    title: string;
    slug: string;
    html: string;
    published_at: string;
    updated_at: string;
    created_at: string;
    feature_image: string;
    excerpt: string;
    custom_excerpt: string;
    visibility: string;
    meta_title: string;
    meta_description: string;
    og_image: string;
    og_title: string;
    og_description: string;
    twitter_image: string;
    twitter_title: string;
    twitter_description: string;
    custom_template: string;
    codeinjection_head: string;
    codeinjection_foot: string;
    codeinjection_styles: string;
    reading_time: number;
    tags: Tag[];
    authors: Author[];
    
    // Agrega más propiedades según la estructura de tus posts
  }

  export interface Tag {
    id: string;
    name: string;
    slug: string;
    description: string;
    feature_image: string;
  }

  export interface Author {
    id: string;
    name: string;
    slug: string;
    profile_image: string;
    cover_image: string;
    bio: string;
    website: string;
    location: string;
    facebook: string;
    twitter: string;
    meta_title: string;
    meta_description: string;
    url: string;
  }