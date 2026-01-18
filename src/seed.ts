import type { Core } from '@strapi/strapi';

// Author data
const authorData = {
  name: 'Samuel Naquaye',
  email: 'snaquaye@gmail.com',
  bio: 'Writer and curator celebrating Black culture through film, books, and lifestyle content.',
};

// Tags data
const tagsData = [
  { name: 'Featured', slug: 'featured' },
  { name: 'Culture', slug: 'culture' },
  { name: 'Film + TV', slug: 'film-tv' },
  { name: 'Books', slug: 'books' },
  { name: 'Music', slug: 'music' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Art', slug: 'art' },
  { name: 'History', slug: 'history' },
  { name: 'Lifestyle', slug: 'lifestyle' },
  { name: 'Reviews', slug: 'reviews' },
];

// Sample content blocks for Long Post articles
const sampleContentBlocks = [
  {
    type: 'paragraph',
    children: [
      { type: 'text', text: 'In recent years, we have witnessed a remarkable transformation in the landscape of entertainment and media. Black creators, writers, directors, and performers have not only broken barriers but have redefined what storytelling can be.' },
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: [
      { type: 'text', text: 'A New Era of Representation' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { type: 'text', text: 'The importance of seeing ourselves reflected on screen, in literature, and across all forms of media cannot be overstated. It shapes our understanding of the world and our place within it. When Black stories are told authentically, they resonate not just with Black audiences but with everyone who values genuine human experiences.' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { type: 'text', text: 'From the groundbreaking success of shows that center Black families and experiences to the literary works that have captured the complexity of Black life across generations, we are living in a golden age of Black creative expression.' },
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: [
      { type: 'text', text: 'Looking Forward' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { type: 'text', text: 'As we continue to celebrate and support Black creators, we must also ensure that the opportunities for new voices remain open and accessible. The next generation of storytellers is already emerging, bringing fresh perspectives and innovative approaches to their craft.' },
    ],
  },
];

// List items for Film+TV lists
const filmTVListItems = [
  {
    Title: 'Living Single',
    ListType: 'Film + TV',
    Content: 'Before Friends, there was Living Single. This groundbreaking sitcom followed the lives of six friends living in a Brooklyn brownstone, tackling issues of career, love, and friendship with wit and warmth.',
    TrailerLink: 'https://www.youtube.com/watch?v=example1',
  },
  {
    Title: 'A Different World',
    ListType: 'Film + TV',
    Content: 'Spinning off from The Cosby Show, A Different World explored life at the fictional HBCU Hillman College. The series tackled important social issues while celebrating Black college life and culture.',
    TrailerLink: 'https://www.youtube.com/watch?v=example2',
  },
  {
    Title: 'Girlfriends',
    ListType: 'Film + TV',
    Content: 'Following four Black women navigating careers, relationships, and friendships in Los Angeles, Girlfriends became a cultural touchstone that ran for eight seasons and spawned a successful spinoff.',
    TrailerLink: 'https://www.youtube.com/watch?v=example3',
  },
  {
    Title: 'The Game',
    ListType: 'Film + TV',
    Content: 'A spinoff of Girlfriends, The Game followed the lives of women romantically involved with professional football players, blending comedy with drama about relationships and ambition.',
    TrailerLink: 'https://www.youtube.com/watch?v=example4',
  },
  {
    Title: 'Moesha',
    ListType: 'Film + TV',
    Content: 'Starring Brandy, this coming-of-age sitcom followed a teenager in South Central Los Angeles dealing with family, school, and growing up, becoming a defining show of the late 90s.',
    TrailerLink: 'https://www.youtube.com/watch?v=example5',
  },
];

// List items for Books lists
const bookListItems = [
  {
    Title: 'The Water Dancer by Ta-Nehisi Coates',
    ListType: 'Book',
    Blurb: 'A powerful tale of a young man born into slavery who discovers he has a mysterious power that could help him escape.',
    MyThoughts: 'Coates weaves magical realism into the brutal reality of American slavery, creating something both beautiful and haunting. A must-read.',
  },
  {
    Title: 'Such a Fun Age by Kiley Reid',
    ListType: 'Book',
    Blurb: 'A young Black babysitter, her white employer, and a complex web of race, privilege, and good intentions.',
    MyThoughts: 'Sharp, witty, and uncomfortably real. Reid captures the nuances of modern racial dynamics with precision and humor.',
  },
  {
    Title: 'The Vanishing Half by Brit Bennett',
    ListType: 'Book',
    Blurb: 'Twin sisters from a small Southern Black community choose to live in two very different worlds—one Black and one white.',
    MyThoughts: 'Bennett explores identity, family, and the choices we make with extraordinary depth. This novel stayed with me long after I finished.',
  },
  {
    Title: 'An American Marriage by Tayari Jones',
    ListType: 'Book',
    Blurb: 'A newlywed couple is torn apart when the husband is wrongfully convicted and sentenced to twelve years in prison.',
    MyThoughts: 'Jones writes about love, loyalty, and injustice with such emotional precision. A powerful examination of marriage under impossible circumstances.',
  },
];

const articles = [
  // Film+TV Articles - Recommendation Lists
  {
    title: '10 Black Sitcoms You Have Probably Not Seen',
    slug: '10-black-sitcoms-you-have-probably-not-seen',
    excerpt: 'Discover hidden gems from the golden age of Black sitcoms that deserve more recognition.',
    category: 'Film + TV',
    articleType: 'Recommendation List',
    isFeaturedPost: true,
    listItems: filmTVListItems,
  },
  {
    title: 'BLK Watch List: The Perfect Girls Night In',
    slug: 'blk-watch-list-perfect-girls-night-in',
    excerpt: 'Our curated selection of feel-good movies and shows for your next gathering.',
    category: 'Film + TV',
    articleType: 'Recommendation List',
    isFeaturedPost: false,
    listItems: filmTVListItems.slice(0, 3),
  },
  {
    title: 'BLK Watch List: Date Night',
    slug: 'blk-watch-list-date-night',
    excerpt: 'Romantic films and series perfect for a cozy evening with your partner.',
    category: 'Film + TV',
    articleType: 'Recommendation List',
    isFeaturedPost: false,
    listItems: filmTVListItems.slice(2, 5),
  },
  {
    title: 'BLK Watch List: Shows To Start With Your Partner',
    slug: 'blk-watch-list-shows-to-start-with-partner',
    excerpt: 'Series you both can binge-watch together from episode one.',
    category: 'Film + TV',
    articleType: 'Recommendation List',
    isFeaturedPost: false,
    listItems: filmTVListItems.slice(0, 4),
  },
  // Long Post Articles
  {
    title: 'The Rise of Black Sci-Fi in Modern Cinema',
    slug: 'rise-of-black-sci-fi-modern-cinema',
    excerpt: 'From Afrofuturism to blockbuster success, exploring the evolution of Black representation in science fiction.',
    category: 'Film + TV',
    articleType: 'Long Post',
    isFeaturedPost: true,
    content: sampleContentBlocks,
  },
  {
    title: 'The Power of Black Romance Novels',
    slug: 'power-of-black-romance-novels',
    excerpt: 'Why representation in romance fiction matters more than ever.',
    category: 'Books',
    articleType: 'Long Post',
    isFeaturedPost: false,
    content: sampleContentBlocks,
  },
  {
    title: 'The Evolution of Black Fashion Icons',
    slug: 'evolution-of-black-fashion-icons',
    excerpt: 'From Josephine Baker to contemporary trendsetters, celebrating style and influence.',
    category: 'Culture',
    articleType: 'Long Post',
    isFeaturedPost: true,
    content: sampleContentBlocks,
  },
  {
    title: 'Black Excellence in Art and Design',
    slug: 'black-excellence-art-design',
    excerpt: 'Highlighting the creatives reshaping visual culture around the world.',
    category: 'Culture',
    articleType: 'Long Post',
    isFeaturedPost: false,
    content: sampleContentBlocks,
  },
  {
    title: 'The Impact of Black Music on Global Trends',
    slug: 'impact-black-music-global-trends',
    excerpt: 'How Black artists continue to define and redefine popular music.',
    category: 'Culture',
    articleType: 'Long Post',
    isFeaturedPost: false,
    content: sampleContentBlocks,
  },
  // Books Articles - Recommendation Lists
  {
    title: 'Must-Read Black Authors of 2026',
    slug: 'must-read-black-authors-2026',
    excerpt: 'The writers shaping contemporary literature and telling our stories.',
    category: 'Books',
    articleType: 'Recommendation List',
    isFeaturedPost: true,
    listItems: bookListItems,
  },
  {
    title: 'Summer Reading List for the Culture',
    slug: 'summer-reading-list-for-the-culture',
    excerpt: 'Beach reads, thought-provoking essays, and page-turners for the season.',
    category: 'Books',
    articleType: 'Recommendation List',
    isFeaturedPost: false,
    listItems: bookListItems.slice(0, 3),
  },
  {
    title: 'Book Club Picks: Historical Fiction',
    slug: 'book-club-picks-historical-fiction',
    excerpt: 'Stories that bring Black history to life through compelling narratives.',
    category: 'Books',
    articleType: 'Recommendation List',
    isFeaturedPost: false,
    listItems: bookListItems.slice(1, 4),
  },
  // Culture Articles - Recommendation Lists
  {
    title: 'Festivals Celebrating Black Culture in 2026',
    slug: 'festivals-celebrating-black-culture-2026',
    excerpt: 'Your guide to the must-attend cultural events this year.',
    category: 'Culture',
    articleType: 'Recommendation List',
    isFeaturedPost: false,
    listItems: filmTVListItems.slice(0, 3),
  },
  // Review Post Articles
  {
    title: 'Review: The Water Dancer by Ta-Nehisi Coates',
    slug: 'review-the-water-dancer-ta-nehisi-coates',
    excerpt: 'A powerful tale of a young man born into slavery who discovers he has a mysterious power.',
    category: 'Books',
    articleType: 'Review Post',
    isFeaturedPost: true,
    review: {
      title: 'The Water Dancer',
      reviewType: 'Book',
      rating: '4.5/5',
      genre: 'Historical Fiction / Magical Realism',
      blurb: 'A powerful tale of a young man born into slavery who discovers he has a mysterious power that could help him escape.',
      initialReaction: 'From the very first chapter, Coates pulls you into a world that feels both hauntingly real and mystically transcendent. The prose is poetic yet purposeful.',
      finalReview: 'The Water Dancer is a masterful blend of history and imagination. Coates has crafted something truly unique.',
      literaryTropes: [
        { title: 'Magical Realism' },
        { title: 'Coming of Age' },
        { title: 'Freedom Quest' },
      ],
      waterstoneLink: 'https://www.waterstones.com/book/the-water-dancer/ta-nehisi-coates/9780241325261',
      amazoneLink: 'https://www.amazon.com/Water-Dancer-Ta-Nehisi-Coates/dp/0399590595',
    },
  },
  {
    title: 'Review: Insecure - The Complete Series',
    slug: 'review-insecure-complete-series',
    excerpt: 'Issa Rae\'s groundbreaking HBO series that redefined Black millennial storytelling.',
    category: 'Film + TV',
    articleType: 'Review Post',
    isFeaturedPost: false,
    review: {
      title: 'Insecure',
      reviewType: 'Film  + TV',
      rating: '5/5',
      genre: 'Comedy / Drama',
      blurb: 'Following the awkward experiences and racy tribulations of a modern-day African-American woman.',
      initialReaction: 'Insecure feels like hanging out with your funniest, most real friends. Issa Rae captures the messiness of your late twenties with perfect pitch.',
      finalReview: 'A defining show of its generation. Insecure managed to be deeply personal while speaking to universal experiences of growth, friendship, and self-discovery.',
      literaryTropes: [
        { title: 'Slice of Life' },
        { title: 'Romantic Comedy' },
        { title: 'Coming of Age' },
      ],
      amazonPrimeLink: 'https://www.amazon.com/gp/video/detail/B01KAUDBXI',
      netflixLink: '',
    },
  },
  {
    title: 'Review: Such a Fun Age by Kiley Reid',
    slug: 'review-such-a-fun-age-kiley-reid',
    excerpt: 'A sharp and witty exploration of race, privilege, and good intentions gone wrong.',
    category: 'Books',
    articleType: 'Review Post',
    isFeaturedPost: false,
    review: {
      title: 'Such a Fun Age',
      reviewType: 'Book',
      rating: '4/5',
      genre: 'Contemporary Fiction',
      blurb: 'A young Black babysitter, her white employer, and a complex web of race, privilege, and good intentions.',
      initialReaction: 'Reid\'s debut grabs you from the opening scene - a deeply uncomfortable incident at a grocery store that sets the tone for everything that follows.',
      finalReview: 'Sharp, witty, and uncomfortably real. Reid captures the nuances of modern racial dynamics with precision and humor.',
      literaryTropes: [
        { title: 'Social Commentary' },
        { title: 'Unreliable Narrator' },
        { title: 'Workplace Drama' },
      ],
      waterstoneLink: 'https://www.waterstones.com/book/such-a-fun-age/kiley-reid/9781526612168',
      amazoneLink: 'https://www.amazon.com/Such-Fun-Age-Kiley-Reid/dp/052554190X',
    },
  },
  {
    title: 'Review: Moonlight',
    slug: 'review-moonlight-film',
    excerpt: 'Barry Jenkins\' Oscar-winning masterpiece exploring identity, sexuality, and Black masculinity.',
    category: 'Film + TV',
    articleType: 'Review Post',
    isFeaturedPost: true,
    review: {
      title: 'Moonlight',
      reviewType: 'Film  + TV',
      rating: '5/5',
      genre: 'Drama',
      blurb: 'A chronicle of the childhood, adolescence, and burgeoning adulthood of a young Black man growing up in a rough neighborhood of Miami.',
      initialReaction: 'Every frame of Moonlight feels like a painting. Jenkins creates an atmosphere so immersive you forget you\'re watching a film.',
      finalReview: 'Moonlight is cinema at its most powerful - intimate, beautiful, and profoundly moving. A landmark in Black filmmaking.',
      literaryTropes: [
        { title: 'Coming of Age' },
        { title: 'Identity Crisis' },
        { title: 'Found Family' },
      ],
      amazonPrimeLink: 'https://www.amazon.com/Moonlight-Mahershala-Ali/dp/B01MU9CMGN',
      netflixLink: '',
    },
  },
];

async function seedAuthor(strapi: Core.Strapi): Promise<string> {
  console.log('🌱 Seeding author...');
  
  // Check if author already exists
  const existing = await strapi.documents('api::author.author').findFirst({
    filters: { email: authorData.email },
  });
  
  if (existing) {
    console.log(`  ⏭️  Author "${authorData.name}" already exists`);
    return existing.documentId;
  }
  
  const createdAuthor = await strapi.documents('api::author.author').create({
    data: authorData,
    status: 'published',
  });
  
  console.log(`  ✅ Created author: ${authorData.name}`);
  return createdAuthor.documentId;
}

async function seedTags(strapi: Core.Strapi): Promise<Map<string, string>> {
  console.log('🌱 Seeding tags...');
  
  const tagDocumentIds = new Map<string, string>();
  
  for (const tag of tagsData) {
    // Check if tag already exists
    const existing = await strapi.documents('api::tag.tag').findFirst({
      filters: { slug: tag.slug },
    });
    
    if (existing) {
      console.log(`  ⏭️  Tag "${tag.name}" already exists`);
      tagDocumentIds.set(tag.slug, existing.documentId);
    } else {
      const createdTag = await strapi.documents('api::tag.tag').create({
        data: tag,
        status: 'published',
      });
      
      console.log(`  ✅ Created tag: ${tag.name}`);
      tagDocumentIds.set(tag.slug, createdTag.documentId);
    }
  }
  
  return tagDocumentIds;
}

async function seedArticles(strapi: Core.Strapi, authorDocumentId: string, tagDocumentIds: Map<string, string>) {
  console.log('🌱 Seeding articles...');
  
  for (const article of articles) {
    // Check if article already exists
    const existing = await strapi.documents('api::article.article').findFirst({
      filters: { slug: article.slug },
    });
    
    if (existing) {
      console.log(`  ⏭️  Article "${article.title}" already exists`);
    } else {
      // Prepare article data based on type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const articleData: any = {
        articleTitle: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        category: article.category,
        articleType: article.articleType,
        isFeaturedPost: article.isFeaturedPost,
        coverImage: [{ AlternateText: article.title }],
        author: authorDocumentId,
      };

      // Assign tags based on category and type
      const articleTags: string[] = [];
      
      // Add Featured tag for featured posts
      if (article.isFeaturedPost && tagDocumentIds.has('featured')) {
        articleTags.push(tagDocumentIds.get('featured')!);
      }
      
      // Add category-based tag
      if (article.category === 'Film + TV' && tagDocumentIds.has('film-tv')) {
        articleTags.push(tagDocumentIds.get('film-tv')!);
      } else if (article.category === 'Books' && tagDocumentIds.has('books')) {
        articleTags.push(tagDocumentIds.get('books')!);
      } else if (article.category === 'Culture' && tagDocumentIds.has('culture')) {
        articleTags.push(tagDocumentIds.get('culture')!);
      }
      
      // Add Reviews tag for Review Post articles
      if (article.articleType === 'Review Post' && tagDocumentIds.has('reviews')) {
        articleTags.push(tagDocumentIds.get('reviews')!);
      }
      
      if (articleTags.length > 0) {
        articleData.tags = articleTags;
      }

      // Add content for Long Post articles
      if (article.articleType === 'Long Post' && article.content) {
        articleData.content = article.content;
      }

      // Add review data for Review Post articles
      if (article.articleType === 'Review Post' && article.review) {
        articleData.review = {
          title: article.review.title,
          reviewType: article.review.reviewType,
          rating: article.review.rating,
          genre: article.review.genre,
          blurb: article.review.blurb,
          initialReaction: article.review.initialReaction,
          finalReview: article.review.finalReview,
          literaryTropes: article.review.literaryTropes,
          waterstoneLink: article.review.waterstoneLink || undefined,
          amazoneLink: article.review.amazoneLink || undefined,
          amazonPrimeLink: article.review.amazonPrimeLink || undefined,
          netflixLink: article.review.netflixLink || undefined,
        };
      }

      // Add recommendation list for Recommendation List articles
      if (article.articleType === 'Recommendation List' && article.listItems) {
        articleData.recommendationList = article.listItems.map((item) => {
          if ('Content' in item) {
            // Film + TV item
            return {
              Title: item.Title,
              ListType: 'Film + TV',
              Content: item.Content,
              TrailerLink: item.TrailerLink || undefined,
            };
          } else {
            // Book item
            return {
              Title: item.Title,
              ListType: 'Book',
              Blurb: item.Blurb,
              MyThoughts: item.MyThoughts,
            };
          }
        });
      }

      await strapi.documents('api::article.article').create({
        data: articleData,
        status: 'published',
      });
      
      console.log(`  ✅ Created article: ${article.title} (${article.articleType})`);
    }
  }
}

async function seedHomepage(strapi: Core.Strapi) {
  console.log('🌱 Seeding homepage...');
  
  // Check if homepage already has data
  const existing = await strapi.documents('api::homepage.homepage').findFirst({});
  
  const homepageData = {
    description: 'Celebrating Black culture through film, books, and lifestyle.',
  };
  
  if (existing) {
    await strapi.documents('api::homepage.homepage').update({
      documentId: existing.documentId,
      data: homepageData,
      status: 'published',
    });
    console.log('  ✅ Updated homepage');
  } else {
    await strapi.documents('api::homepage.homepage').create({
      data: homepageData,
      status: 'published',
    });
    console.log('  ✅ Created homepage');
  }
}

async function deleteAllArticles(strapi: Core.Strapi) {
  console.log('🗑️  Deleting all existing articles...');
  
  // Delete all articles
  const existingArticles = await strapi.documents('api::article.article').findMany({});
  for (const article of existingArticles) {
    await strapi.documents('api::article.article').delete({
      documentId: article.documentId,
    });
  }
  console.log(`  ✅ Deleted ${existingArticles.length} articles`);
}

export async function seed(strapi: Core.Strapi) {
  console.log('\n🚀 Starting seed process...\n');
  
  try {
    const authorDocumentId = await seedAuthor(strapi);
    const tagDocumentIds = await seedTags(strapi);
    await deleteAllArticles(strapi);
    await seedArticles(strapi, authorDocumentId, tagDocumentIds);
    await seedHomepage(strapi);
    
    console.log('\n✨ Seed completed successfully!\n');
  } catch (error) {
    console.error('\n❌ Seed failed:', error);
    throw error;
  }
}

export default seed;
