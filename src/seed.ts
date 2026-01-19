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
    title: 'Living Single',
    listType: 'Film + TV',
    genre: 'Sitcom',
    rating: '5/5',
    content: 'Before Friends, there was Living Single. This groundbreaking sitcom followed the lives of six friends living in a Brooklyn brownstone, tackling issues of career, love, and friendship with wit and warmth. Queen Latifah, Kim Fields, and the rest of the cast created magic that still resonates today.',
    trailerLink: 'https://www.youtube.com/watch?v=YnlKgxUCn7g',
  },
  {
    title: 'A Different World',
    listType: 'Film + TV',
    genre: 'Sitcom',
    rating: '5/5',
    content: 'Spinning off from The Cosby Show, A Different World explored life at the fictional HBCU Hillman College. The series tackled important social issues including apartheid, HIV/AIDS, and date rape while celebrating Black college life and culture in a way never seen before on television.',
    trailerLink: 'https://www.youtube.com/watch?v=sVeFpOdVfKs',
  },
  {
    title: 'Insecure',
    listType: 'Film + TV',
    genre: 'Comedy-Drama',
    rating: '5/5',
    content: 'Issa Rae\'s HBO masterpiece gave us awkward Black girl representation we never knew we needed. Following Issa and her best friend Molly navigating love, careers, and friendship in LA, the show became a cultural phenomenon that redefined what Black millennial storytelling could be.',
    trailerLink: 'https://www.youtube.com/watch?v=FLxLWKZB4Bc',
  },
  {
    title: 'Atlanta',
    listType: 'Film + TV',
    genre: 'Comedy-Drama',
    rating: '4.5/5',
    content: 'Donald Glover\'s surrealist comedy-drama follows Earn as he navigates the Atlanta rap scene while managing his cousin Paper Boi. Equal parts hilarious, profound, and delightfully weird, Atlanta defies genre and expectations at every turn.',
    trailerLink: 'https://www.youtube.com/watch?v=MpE2skJQ9YQ',
  },
  {
    title: 'Lovecraft Country',
    listType: 'Film + TV',
    genre: 'Horror/Sci-Fi',
    rating: '4/5',
    content: 'Blending horror, science fiction, and historical drama, this adaptation follows Atticus Freeman as he travels across 1950s Jim Crow America searching for his missing father. The real monsters aren\'t just supernatural—they\'re the terrors of American racism.',
    trailerLink: 'https://www.youtube.com/watch?v=s8JFVSJn-mk',
  },
  {
    title: 'Pose',
    listType: 'Film + TV',
    genre: 'Drama',
    rating: '4.5/5',
    content: 'Set in the ballroom culture of 1980s and 90s New York, Pose made history with the largest cast of transgender actors in series regular roles. A celebration of chosen family, resilience, and the power of being unapologetically yourself.',
    trailerLink: 'https://www.youtube.com/watch?v=_t4YuPXdLZw',
  },
  {
    title: 'Harlem',
    listType: 'Film + TV',
    genre: 'Comedy',
    rating: '4/5',
    content: 'Four ambitious best friends navigate love, careers, and their 30s in Harlem. Created by Tracy Oliver, this Prime Video series delivers the stylish, fun, and deeply relatable content Black women deserve to see on screen.',
    trailerLink: 'https://www.youtube.com/watch?v=pZbcXFvF7YY',
  },
  {
    title: 'Snowfall',
    listType: 'Film + TV',
    genre: 'Crime Drama',
    rating: '4.5/5',
    content: 'John Singleton\'s final creation tells the story of the crack cocaine epidemic in 1980s Los Angeles. Following Franklin Saint\'s rise in the drug trade, it\'s a gripping look at how communities were devastated by forces both internal and external.',
    trailerLink: 'https://www.youtube.com/watch?v=RkFp6hWofZk',
  },
];

// List items for Books lists
const bookListItems = [
  {
    title: 'The Water Dancer by Ta-Nehisi Coates',
    listType: 'Book',
    genre: 'Historical Fiction',
    rating: '4.5/5',
    blurb: 'A powerful tale of a young man born into slavery who discovers he has a mysterious power that could help him escape. Coates blends magical realism with historical fiction to create something utterly unique.',
    myThoughts: 'Coates weaves magical realism into the brutal reality of American slavery, creating something both beautiful and haunting. The prose is lyrical and the story stays with you long after you finish. A must-read.',
  },
  {
    title: 'Such a Fun Age by Kiley Reid',
    listType: 'Book',
    genre: 'Contemporary Fiction',
    rating: '4/5',
    blurb: 'A young Black babysitter, her white employer, and a complex web of race, privilege, and good intentions that unravels in unexpected ways.',
    myThoughts: 'Sharp, witty, and uncomfortably real. Reid captures the nuances of modern racial dynamics with precision and humor. You\'ll find yourself cringing at the microaggressions because you\'ve witnessed them yourself.',
  },
  {
    title: 'The Vanishing Half by Brit Bennett',
    listType: 'Book',
    genre: 'Literary Fiction',
    rating: '5/5',
    blurb: 'Twin sisters from a small Southern Black community choose to live in two very different worlds—one Black and one white—and the repercussions echo through generations.',
    myThoughts: 'Bennett explores identity, family, and the choices we make with extraordinary depth. This novel is a masterclass in storytelling that spans decades while keeping you emotionally invested in every character.',
  },
  {
    title: 'An American Marriage by Tayari Jones',
    listType: 'Book',
    genre: 'Literary Fiction',
    rating: '4.5/5',
    blurb: 'A newlywed couple is torn apart when the husband is wrongfully convicted and sentenced to twelve years in prison. A powerful examination of love, loyalty, and injustice.',
    myThoughts: 'Jones writes about love, loyalty, and injustice with such emotional precision. The epistolary format adds intimacy, and the ending will have you discussing it for weeks.',
  },
  {
    title: 'Homegoing by Yaa Gyasi',
    listType: 'Book',
    genre: 'Historical Fiction',
    rating: '5/5',
    blurb: 'Tracing the descendants of two half-sisters—one sold into slavery, one married to a British slaver—across three hundred years of history.',
    myThoughts: 'Each chapter is a complete story, yet they weave together into an epic that shows how the past shapes the present. Gyasi\'s debut is breathtaking in scope and intimate in execution.',
  },
  {
    title: 'The Nickel Boys by Colson Whitehead',
    listType: 'Book',
    genre: 'Historical Fiction',
    rating: '4.5/5',
    blurb: 'Based on the true story of a reform school in Florida that operated for over a century and destroyed countless Black lives.',
    myThoughts: 'Whitehead follows up The Underground Railroad with another historically devastating novel. The restrained prose makes the horrors even more impactful. Essential reading.',
  },
  {
    title: 'Queenie by Candice Carty-Williams',
    listType: 'Book',
    genre: 'Contemporary Fiction',
    rating: '4/5',
    blurb: 'Queenie Jenkins is a 25-year-old Jamaican British woman navigating life in London after a devastating breakup sends her into a spiral.',
    myThoughts: 'Equal parts hilarious and heartbreaking, Queenie tackles mental health, identity, and modern dating with refreshing honesty. You\'ll recognize yourself or someone you know in her story.',
  },
  {
    title: 'Black Leopard, Red Wolf by Marlon James',
    listType: 'Book',
    genre: 'Fantasy',
    rating: '4/5',
    blurb: 'A genre-defying African fantasy epic following Tracker, a hunter with a supernatural sense of smell, on a quest to find a missing boy.',
    myThoughts: 'James creates a world as rich and complex as anything in Western fantasy but rooted in African mythology. It\'s challenging, violent, and absolutely worth the investment.',
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
          if ('content' in item) {
            // Film + TV item
            return {
              title: item.title,
              listType: 'Film + TV',
              genre: item.genre,
              rating: item.rating,
              content: item.content,
              trailerLink: item.trailerLink || undefined,
            };
          } else {
            // Book item
            return {
              title: item.title,
              listType: 'Book',
              genre: item.genre,
              rating: item.rating,
              blurb: item.blurb,
              myThoughts: item.myThoughts,
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
