import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleCategory extends Struct.ComponentSchema {
  collectionName: 'components_article_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    title: Schema.Attribute.Enumeration<['Books', 'Culture', 'Film + TV']>;
  };
}

export interface BrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_brand_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    altText: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementAvailableOn extends Struct.ComponentSchema {
  collectionName: 'components_element_available_ons';
  info: {
    displayName: 'Available On';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    plateform: Schema.Attribute.Relation<
      'oneToOne',
      'api::plateform.plateform'
    >;
  };
}

export interface ElementContent extends Struct.ComponentSchema {
  collectionName: 'components_element_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
  };
}

export interface ElementCoverImage extends Struct.ComponentSchema {
  collectionName: 'components_element_cover_images';
  info: {
    displayName: 'coverImage';
  };
  attributes: {
    alternateText: Schema.Attribute.String;
    imageSrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ElementFilmTvBooksList extends Struct.ComponentSchema {
  collectionName: 'components_element_film_tv_books_lists';
  info: {
    displayName: 'Recommendation';
  };
  attributes: {
    availableOn: Schema.Attribute.Component<'element.available-on', true>;
    blurb: Schema.Attribute.Text;
    content: Schema.Attribute.Text;
    genres: Schema.Attribute.Relation<'oneToMany', 'api::genre.genre'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    listType: Schema.Attribute.Enumeration<['Book', 'Film + TV']>;
    myThoughts: Schema.Attribute.Text;
    rating: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    trailerLink: Schema.Attribute.String;
  };
}

export interface ElementHero extends Struct.ComponentSchema {
  collectionName: 'components_element_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    HeroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_element_image_grids';
  info: {
    displayName: 'ImageGrid';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Position: Schema.Attribute.String;
    ProfilePicture: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ElementListItem extends Struct.ComponentSchema {
  collectionName: 'components_element_list_items';
  info: {
    displayName: 'ListItem';
  };
  attributes: {
    AmazonLink: Schema.Attribute.String;
    AmazonPrimeLink: Schema.Attribute.String;
    Blurb: Schema.Attribute.Text & Schema.Attribute.Required;
    Content: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    ListType: Schema.Attribute.Enumeration<['Book', 'Film + TV']>;
    MyThoughts: Schema.Attribute.Text & Schema.Attribute.Required;
    Netflix: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    TrailerLink: Schema.Attribute.String & Schema.Attribute.Required;
    WaterstoneLink: Schema.Attribute.String;
  };
}

export interface ElementLiteraryTropes extends Struct.ComponentSchema {
  collectionName: 'components_element_literary_tropes';
  info: {
    displayName: 'literaryTropes';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ElementQuote extends Struct.ComponentSchema {
  collectionName: 'components_element_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    Content: Schema.Attribute.Text;
  };
}

export interface ElementReview extends Struct.ComponentSchema {
  collectionName: 'components_element_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    blurb: Schema.Attribute.Text;
    finalReview: Schema.Attribute.String;
    genre: Schema.Attribute.String & Schema.Attribute.Required;
    initialReaction: Schema.Attribute.Text;
    literaryTropes: Schema.Attribute.Component<'element.literary-tropes', true>;
    rating: Schema.Attribute.String;
    reviewType: Schema.Attribute.Enumeration<['Book', 'Film  + TV']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementTag extends Struct.ComponentSchema {
  collectionName: 'components_element_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface HomepageFeaturedPoast extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_poasts';
  info: {
    displayName: 'FeaturedPoast';
  };
  attributes: {};
}

export interface HomepageSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    footerLinks: Schema.Attribute.Component<'navigation.link', true>;
    footerLogo: Schema.Attribute.Component<'brand.logo', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    Logo: Schema.Attribute.Component<'brand.logo', false>;
    navigationLinks: Schema.Attribute.Component<'navigation.link', true>;
  };
}

export interface NavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    showInMenu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    type: Schema.Attribute.Enumeration<['Primary', 'Secondary', 'Ghost']> &
      Schema.Attribute.DefaultTo<'Primary'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationPageTitle extends Struct.ComponentSchema {
  collectionName: 'components_navigation_page_titles';
  info: {
    displayName: 'pageTitle';
  };
  attributes: {
    pageTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationTopBar extends Struct.ComponentSchema {
  collectionName: 'components_navigation_top_bars';
  info: {
    displayName: 'topBar';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.category': ArticleCategory;
      'brand.logo': BrandLogo;
      'element.available-on': ElementAvailableOn;
      'element.content': ElementContent;
      'element.cover-image': ElementCoverImage;
      'element.film-tv-books-list': ElementFilmTvBooksList;
      'element.hero': ElementHero;
      'element.image-grid': ElementImageGrid;
      'element.list-item': ElementListItem;
      'element.literary-tropes': ElementLiteraryTropes;
      'element.quote': ElementQuote;
      'element.review': ElementReview;
      'element.tag': ElementTag;
      'homepage.featured-poast': HomepageFeaturedPoast;
      'homepage.section': HomepageSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'navigation.link': NavigationLink;
      'navigation.page-title': NavigationPageTitle;
      'navigation.top-bar': NavigationTopBar;
    }
  }
}
