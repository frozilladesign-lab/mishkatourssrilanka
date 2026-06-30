import React, { useEffect, useState, createContext, useContext } from 'react';

export type CurrencyCode = 'USD' | 'RUB' | 'LKR';
export type LanguageCode = 'en' | 'ru';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  label: string;
  rateFromUsd: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', label: 'US Dollar', rateFromUsd: 1 },
  RUB: { code: 'RUB', symbol: '₽', label: 'Russian Ruble', rateFromUsd: 95 },
  LKR: { code: 'LKR', symbol: 'Rs', label: 'Sri Lankan Rupee', rateFromUsd: 300 }
};

export interface LanguageInfo {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}

export const LANGUAGES: Record<LanguageCode, LanguageInfo> = {
  en: { code: 'en', label: 'English', nativeLabel: 'English' },
  ru: { code: 'ru', label: 'Russian', nativeLabel: 'Русский' }
};

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // ── Navbar ──
    home: 'Home',
    tours: 'Tours',
    destinations: 'Destinations',
    experiences: 'Experiences',
    tripPlanner: 'Trip Planner',
    offers: 'Offers',
    hotelsStays: 'Hotels & Stays',
    travelGuide: 'Travel Guide',
    aboutUs: 'About Us',
    testimonials: 'Testimonials',
    faq: 'FAQ',
    planMyTrip: 'Plan My Trip',
    currency: 'Currency',
    language: 'Language',

    // ── Welcome modal ──
    welcomeTitle: 'Welcome to Mishka Tours',
    welcomeSubtitle: 'Choose your currency and language to get started',
    selectCurrency: 'Select your currency',
    selectLanguage: 'Select your language',
    continue: 'Continue',

    // ── CinematicHero ──
    heroTag: 'Local Sri Lanka Travel Service',
    heroHeading: 'Explore the Beauty of Sri Lanka with Mishka Tours',
    heroSub: 'Private excursions, wildlife safaris, cultural journeys, beach adventures, and custom tours across Sri Lanka with trusted local travel support.',
    heroExplore: 'View Tours',
    heroPlan: 'Plan My Journey',
    heroCountriesServed: 'Countries Served',
    heroFiveStarReviews: 'Five-Star Reviews',
    heroYearsExcellence: 'Years of Excellence',

    // ── FeaturedJourneys ──
    featuredTag: 'Our Tours',
    featuredHeading: 'Featured Journeys',
    featuredSub: 'Handpicked tours that showcase the very best of Sri Lanka — culture, wildlife, beaches, and adventure.',
    featuredViewAll: 'View All Tours',
    featuredExplore: 'Explore Journey',
    featuredDays: 'Days',
    featuredStops: 'Stops',
    contactForPrice: 'Contact for Price',

    // ── MoodExplorer ──
    moodTag: 'Discover Your Way',
    moodHeading: 'Explore Sri Lanka by Mood',
    moodSub: 'Every journey tells a story. Choose the experience that speaks to your soul.',
    moodCustom: 'Create Custom Journey',
    moodRomance: 'Romance',
    moodAdventure: 'Adventure',
    moodBeach: 'Beach Bliss',
    moodCulture: 'Culture',
    moodWildlife: 'Wildlife',
    moodTea: 'Tea Country',
    moodWellness: 'Wellness',
    moodHidden: 'Hidden Gems',

    // ── SignatureExperiences ──
    sigTag: 'Unforgettable Moments',
    sigHeading: 'Signature Experiences',
    sigSub: 'Immerse yourself in the authentic culture, wildlife, and traditions that make Sri Lanka extraordinary.',
    sigDiscoverAll: 'Discover All Experiences',
    sigSafariTitle: 'Safari in Yala',
    sigSafariSub: 'Wildlife Encounters',
    sigTeaTitle: 'Tea Plantation Tour',
    sigTeaSub: 'Hill Country Heritage',
    sigTempleTitle: 'Temple of the Tooth',
    sigTempleSub: 'Sacred Traditions',
    sigFishingTitle: 'Ocean Fishing',
    sigFishingSub: 'Coastal Traditions',

    // ── CuratedCollection ──
    curatedTag: 'Curated for You',
    curatedHeading: 'Our Tour Collection',
    curatedP1: 'Discover our handpicked selection of private excursions, wildlife safaris, cultural journeys, and beach adventures across Sri Lanka.',
    curatedP2: 'From ancient rock fortresses to tropical rainforests, every experience is crafted to give you the authentic Sri Lanka.',
    curatedExploreLuxury: 'Explore Tours',
    curatedHoneymoon: 'Honeymoon Journeys',

    // ── SeasonalInspirations ──
    seasonTag: 'When to Visit',
    seasonHeading: 'Seasonal Inspirations',
    seasonSub: 'Sri Lanka is a year-round destination. Discover the best time to visit based on your interests and travel style.',
    seasonGuide: 'Complete Travel Guide',
    season1Period: 'December - March',
    season1Title: 'Peak Season',
    season1Desc: 'Perfect weather for beaches, wildlife safaris, and cultural exploration. Ideal for first-time visitors.',
    season2Period: 'April - May',
    season2Title: 'Shoulder Season',
    season2Desc: 'Fewer crowds, lush landscapes, and great value. Perfect for tea country and hill stations.',
    season3Period: 'June - September',
    season3Title: 'East Coast Season',
    season3Desc: 'Pristine beaches on the east coast, calm seas, and excellent diving conditions.',
    season4Period: 'October - November',
    season4Title: 'Green Season',
    season4Desc: 'Dramatic landscapes, waterfalls at full flow, and incredible photography opportunities.',

    // ── LuxuryStays ──
    staysTag: 'Where You\'ll Stay',
    staysHeading: 'Accommodation',
    staysSub: 'Boutique hotels, heritage bungalows, and exclusive resorts handpicked for their exceptional service and unique character.',
    staysExploreAll: 'Explore All Accommodations',
    staysBeachResort: 'Beach Resort',
    staysHeritageBungalow: 'Heritage Bungalow',
    staysSafariLodge: 'Safari Lodge',
    staysBoutiqueResort: 'Boutique Resort',

    // ── TravellerStories ──
    storiesTag: 'Guest Experiences',
    storiesHeading: 'Traveller Stories',
    storiesSub: 'Hear from the travellers who\'ve experienced the magic of Sri Lanka with Mishka Tours.',
    storiesReadMore: 'Read More Stories',
    testimonial1: 'Mishka Tours transformed our honeymoon into a once-in-a-lifetime journey. Every detail was perfection, from the private safari to the beautiful beaches. We\'ll treasure these memories forever.',
    testimonial1Author: 'Sarah & Michael',
    testimonial1Location: 'London, UK',
    testimonial2: 'The attention to detail and local knowledge made all the difference. Our guide felt like family, and the experiences were authentic and deeply moving.',
    testimonial2Author: 'Emma Thompson',
    testimonial2Location: 'Sydney, Australia',
    testimonial3: 'From the tea plantations to the ancient temples, every moment exceeded our expectations. The seamless planning and genuine hospitality made this our best vacation ever.',
    testimonial3Author: 'David Chen',
    testimonial3Location: 'Singapore',

    // ── JourneyBuilderTeaser ──
    builderHeading: 'Design Your Perfect Journey',
    builderSub: 'Our travel experts work together to craft a custom itinerary tailored to your dreams, budget, and travel style.',
    builderFlexDates: 'Flexible Dates',
    builderFlexDatesSub: 'Choose your ideal travel window',
    builderCustomRoutes: 'Custom Routes',
    builderCustomRoutesSub: 'Explore at your own pace',
    builderExpertGuidance: 'Expert Guidance',
    builderExpertGuidanceSub: 'Personal travel consultants',
    builderStartPlanning: 'Start Planning',
    builderCustomTour: 'Custom Tour Builder',

    // ── EditorialJournal ──
    journalTag: 'Stories & Insights',
    journalHeading: 'Travel Journal',
    journalSub: 'Insider guides, cultural insights, and travel inspiration from our team of Sri Lanka experts.',
    journalExplore: 'Explore Travel Guide',
    journalReadArticle: 'Read Article',
    article1Title: '10 Hidden Temples You Must Visit',
    article1Category: 'Culture',
    article1Excerpt: 'Discover ancient sacred sites beyond the tourist trail, where spirituality and history converge.',
    article1Time: '8 min read',
    article2Title: 'The Ultimate Sri Lankan Food Guide',
    article2Category: 'Cuisine',
    article2Excerpt: 'From street food to fine dining, explore the flavors that make Sri Lankan cuisine unforgettable.',
    article2Time: '12 min read',
    article3Title: 'Leopard Spotting in Yala National Park',
    article3Category: 'Wildlife',
    article3Excerpt: 'Expert tips for maximizing your chances of encountering the elusive Sri Lankan leopard.',
    article3Time: '6 min read',

    // ── ClosingCTA ──
    closingHeading: 'Your Sri Lankan Journey Awaits',
    closingSub: 'Let our expert travel consultants craft a bespoke itinerary that brings your travel dreams to life.',
    closingStartPlanning: 'Start Planning',
    closingAIPlanner: 'AI Trip Planner',
    closingTrust: 'Trusted by travellers from over 40 countries • 5,000+ five-star reviews',

    // ── WhyUs ──
    whyTag: 'Why Mishka Tours',
    whyHeading: 'Why Choose Us',
    whySub: 'We combine local knowledge and flexible planning to create unforgettable Sri Lankan experiences.',
    whyPrivateTitle: 'Private & Flexible',
    whyPrivateDesc: 'Travel at your own pace with flexible routes and personalized planning.',
    whyLocalTitle: 'Local Knowledge',
    whyLocalDesc: 'We know the island — the routes, the hidden spots, the best time to visit each destination.',
    whySafeTitle: 'Safe & Reliable',
    whySafeDesc: 'Comfortable private transport, friendly local support, and easy WhatsApp communication throughout.',
    whyMemTitle: 'Memorable Experiences',
    whyMemDesc: 'From arrival to departure, we help you experience the best of Sri Lanka in a comfortable and meaningful way.',
    whyEasyTitle: 'Easy Communication',
    whyEasyDesc: 'Contact us through WhatsApp or social media for quick tour planning and trip support.',
    whyComfortTitle: 'Comfortable Transport',
    whyComfortDesc: 'Enjoy private transport options suitable for couples, families, and small groups.',

    // ── Footer ──
    footerDesc: 'Discover Sri Lanka with Comfort, Care & Local Experience. Private excursions, wildlife safaris, cultural journeys, and custom tours across the island.',
    footerQuickLinks: 'Quick Links',
    footerPlanTrip: 'Plan Your Trip',
    footerPopularDest: 'Popular Destinations',
    footerGetInTouch: 'Get in Touch',
    footerNewsletter: 'Subscribe to our newsletter for travel inspiration.',
    footerNewsletterJoin: 'Join',
    footerEmailPlaceholder: 'Your email address',
    footerAllTours: 'All Tour Packages',
    footerCustomTour: 'Custom Tour Builder',
    footerPrivateDriver: 'Private Driver',
    footerVisaReq: 'Visa & Requirements',
    footerSigiriya: 'Sigiriya Rock Fortress',
    footerElla: 'Ella & Hill Country',
    footerYala: 'Yala National Park',
    footerMirissa: 'Mirissa Beaches',
    footerKandy: 'Kandy Cultural City',
    footerLocation: 'Sri Lanka',
    footerCopyright: 'Mishka Tours Sri Lanka. All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',

    // ── About ──
    aboutTitle: 'About Mishka Tours Sri Lanka',
    aboutSubtitle: 'Discover Sri Lanka with Comfort, Care & Local Experience.',
    aboutStoryHeading: 'A Local Travel Service You Can Trust',
    aboutP1: 'Mishka Tours Sri Lanka is a local travel service offering carefully planned excursions and private tour experiences around the island. From ancient temples and mountain landscapes to wildlife parks, beaches, waterfalls, tea plantations, and ocean adventures, we help travelers experience the best of Sri Lanka in a comfortable and memorable way.',
    aboutP2: 'Whether you want a short one-day trip, a two-day island adventure, a private city tour, or a fully customized experience, Mishka Tours Sri Lanka can help you plan the right journey based on your time, travel style, and interests.',
    aboutP3: 'We offer private tours, one-day excursions, two-day excursions, individual custom tours, airport transfers, wildlife safaris, whale watching, surfing, cultural and heritage tours, nature and rainforest tours, and private transport with driver support across Sri Lanka.',
    aboutCoreValues: 'Our Core Values',
    aboutCoreValuesSub: 'The principles that guide every journey we plan.',
    aboutVal1Title: 'Private & Flexible',
    aboutVal1Desc: 'Travel at your own pace with flexible routes and personalized planning for your unique trip.',
    aboutVal2Title: 'Local Knowledge',
    aboutVal2Desc: 'We know the island — the routes, the hidden spots, the best time to visit each destination.',
    aboutVal3Title: 'Safe & Reliable',
    aboutVal3Desc: 'Comfortable private transport, friendly local support, and easy WhatsApp communication throughout your journey.',
    aboutVal4Title: 'Memorable Experiences',
    aboutVal4Desc: 'From arrival to departure, we help you experience the best of Sri Lanka in a comfortable and meaningful way.',

    // ── FAQ ──
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know before your Sri Lankan journey.',
    faqCat1: 'Tours & Booking',
    faqCat2: 'Activities & Experiences',
    faqCat3: 'Pricing & Inclusions',
    faqQ1: 'Do you offer private tours?',
    faqA1: 'Yes. Mishka Tours Sri Lanka offers private and flexible tour options for individuals, couples, families, and small groups.',
    faqQ2: 'Can I customize my excursion?',
    faqA2: 'Yes. Routes and activities can be adjusted depending on your time, hotel location, and availability. Contact us through WhatsApp to plan your custom tour.',
    faqQ3: 'How can I book a tour?',
    faqA3: 'You can contact Mishka Tours Sri Lanka through WhatsApp, TikTok, Facebook, or Instagram. Share your travel date, pickup location, number of travelers, and preferred tour, and we will confirm your plan.',
    faqQ4: 'Is hotel pickup available?',
    faqA4: 'Yes. Hotel pickup can be arranged depending on your location anywhere in Sri Lanka.',
    faqQ5: 'Can you arrange safari tours?',
    faqA5: 'Yes. Yala National Park jeep safari and other wildlife experiences including elephant encounters can be arranged as part of your tour.',
    faqQ6: 'Can you arrange ocean activities?',
    faqA6: 'Yes. Whale watching, snorkeling, diving, ocean fishing, surfing, and yacht trips can be arranged depending on weather and seasonal availability.',
    faqQ7: 'Do you offer airport pickup?',
    faqA7: 'Yes. Airport pickup and drop-off can be arranged from any Sri Lanka airport to your hotel or destination.',
    faqQ8: 'Are entrance tickets included in the tour price?',
    faqA8: 'Entrance tickets, activity fees, safari jeep fees, and boat charges depend on the selected package and final quotation. Please confirm with us when booking.',
    faqQ9: 'What transport options are available?',
    faqA9: 'We offer private car, SUV, van, and mini coach options depending on group size. All vehicles come with a private driver for your comfort and convenience.',
    faqQ10: 'Can you arrange a fully custom tour?',
    faqA10: "Yes. If you can't find the exact tour you want, we can create a fully custom travel plan based on your arrival date, hotel location, travel duration, and preferred experiences.",
    faqStillQuestion: 'Still have questions?',
    faqStillSub: 'Our travel experts are here to help. Reach out and we\'ll get back to you within hours.',
    faqContactUs: 'Contact Us',

    // ── Contact ──
    contactTitle: 'Plan Your Sri Lanka Tour with Mishka Tours',
    contactSubtitle: 'Ready to explore Sri Lanka? Send us your travel date, pickup location, number of travelers, and preferred tour.',
    contactHeading: 'Contact Mishka Tours Sri Lanka',
    contactDesc: 'Reach us through WhatsApp for quick tour planning and trip support. Share your travel date, pickup location, number of travelers, and preferred tour and we will help you plan the right experience.',
    contactLocation: 'Location',
    contactPhone: 'Phone / WhatsApp',
    contactEmail: 'Email',
    contactAvailability: 'Availability',
    contactAvailabilityVal: 'Available 7 days a week',
    contactFormHeading: 'Send an Inquiry',
    contactName: 'Name *',
    contactWhatsApp: 'WhatsApp Number *',
    contactEmailField: 'Email Address',
    contactDate: 'Travel Date *',
    contactPickup: 'Pickup Location *',
    contactPickupPH: 'Hotel name or city',
    contactTravelers: 'Number of Travelers *',
    contactTour: 'Selected Tour / Activity',
    contactSelectTour: 'Select a tour or activity...',
    contactTwoDayLabel: 'Two-Day Excursions',
    contactOneDayLabel: 'One-Day Excursions',
    contactIndividualLabel: 'Individual Excursions',
    contactAirport: 'Airport Transfer',
    contactCustom: 'Custom Tour',
    contactMessage: 'Message',
    contactMessagePH: 'Tell us about your travel plans, preferences, or any questions...',
    contactSend: 'Send Inquiry',
    contactWhatsAppBtn: 'Chat on WhatsApp',
    contactSuccessTitle: 'Message Sent Successfully!',
    contactSuccessDesc: 'Thank you for reaching out. One of our travel experts will get back to you within 24 hours.',

    // ── Tours page ──
    toursTitle: 'All Tours & Excursions',
    toursSubtitle: 'Explore our full range of private tours, day excursions, safaris, and custom experiences across Sri Lanka.',
    toursFilterAll: 'All',
    toursDurationLabel: 'Duration',
    toursRegionLabel: 'Region',
    toursActivityLabel: 'Activity',
    toursNoResults: 'No tours found matching your filters.',
    toursFrom: 'From',
    toursPP: '/ pp',
    toursContactPrice: 'Contact for Price',
    toursViewDetails: 'View Details',
    toursBookNow: 'Book Now',
  },

  ru: {
    // ── Navbar ──
    home: 'Главная',
    tours: 'Туры',
    destinations: 'Направления',
    experiences: 'Впечатления',
    tripPlanner: 'Планировщик',
    offers: 'Предложения',
    hotelsStays: 'Отели',
    travelGuide: 'Путеводитель',
    aboutUs: 'О нас',
    testimonials: 'Отзывы',
    faq: 'Вопросы и ответы',
    planMyTrip: 'Спланировать поездку',
    currency: 'Валюта',
    language: 'Язык',

    // ── Welcome modal ──
    welcomeTitle: 'Добро пожаловать в Mishka Tours',
    welcomeSubtitle: 'Выберите валюту и язык, чтобы начать',
    selectCurrency: 'Выберите валюту',
    selectLanguage: 'Выберите язык',
    continue: 'Продолжить',

    // ── CinematicHero ──
    heroTag: 'Местный туристический сервис Шри-Ланки',
    heroHeading: 'Откройте красоту Шри-Ланки с Mishka Tours',
    heroSub: 'Частные экскурсии, сафари, культурные путешествия, пляжные приключения и индивидуальные туры по Шри-Ланке с надёжной местной поддержкой.',
    heroExplore: 'Смотреть туры',
    heroPlan: 'Спланировать поездку',
    heroCountriesServed: 'Стран охвачено',
    heroFiveStarReviews: 'Пятизвёздочных отзывов',
    heroYearsExcellence: 'Лет опыта',

    // ── FeaturedJourneys ──
    featuredTag: 'Наши туры',
    featuredHeading: 'Популярные путешествия',
    featuredSub: 'Отборные туры, демонстрирующие лучшее Шри-Ланки — культуру, дикую природу, пляжи и приключения.',
    featuredViewAll: 'Все туры',
    featuredExplore: 'Подробнее',
    featuredDays: 'Дн.',
    featuredStops: 'Остановок',
    contactForPrice: 'Уточнить цену',

    // ── MoodExplorer ──
    moodTag: 'Найди своё направление',
    moodHeading: 'Исследуй Шри-Ланку по настроению',
    moodSub: 'Каждое путешествие — своя история. Выбери то, что близко твоей душе.',
    moodCustom: 'Создать индивидуальный тур',
    moodRomance: 'Романтика',
    moodAdventure: 'Приключения',
    moodBeach: 'Пляжный отдых',
    moodCulture: 'Культура',
    moodWildlife: 'Дикая природа',
    moodTea: 'Чайные плантации',
    moodWellness: 'Оздоровление',
    moodHidden: 'Скрытые жемчужины',

    // ── SignatureExperiences ──
    sigTag: 'Незабываемые моменты',
    sigHeading: 'Фирменные впечатления',
    sigSub: 'Погрузитесь в подлинную культуру, дикую природу и традиции, делающие Шри-Ланку особенной.',
    sigDiscoverAll: 'Все впечатления',
    sigSafariTitle: 'Сафари в Яле',
    sigSafariSub: 'Встреча с дикой природой',
    sigTeaTitle: 'Тур по чайным плантациям',
    sigTeaSub: 'Наследие горной страны',
    sigTempleTitle: 'Храм Зуба Будды',
    sigTempleSub: 'Священные традиции',
    sigFishingTitle: 'Рыбалка в океане',
    sigFishingSub: 'Прибрежные традиции',

    // ── CuratedCollection ──
    curatedTag: 'Специально для вас',
    curatedHeading: 'Наша коллекция туров',
    curatedP1: 'Откройте для себя наш тщательно подобранный выбор частных экскурсий, сафари, культурных путешествий и пляжных приключений по всей Шри-Ланке.',
    curatedP2: 'От древних скальных крепостей до тропических лесов — каждое впечатление создано, чтобы показать вам подлинную Шри-Ланку.',
    curatedExploreLuxury: 'Смотреть туры',
    curatedHoneymoon: 'Медовый месяц',

    // ── SeasonalInspirations ──
    seasonTag: 'Когда ехать',
    seasonHeading: 'Сезонное вдохновение',
    seasonSub: 'Шри-Ланка — направление для путешествий круглый год. Узнайте лучшее время для посещения в зависимости от ваших интересов.',
    seasonGuide: 'Полный путеводитель',
    season1Period: 'Декабрь — Март',
    season1Title: 'Высокий сезон',
    season1Desc: 'Идеальная погода для пляжей, сафари и культурных экскурсий. Лучший выбор для первого визита.',
    season2Period: 'Апрель — Май',
    season2Title: 'Межсезонье',
    season2Desc: 'Меньше туристов, пышная природа и выгодные цены. Отлично для чайной страны и горных станций.',
    season3Period: 'Июнь — Сентябрь',
    season3Title: 'Сезон восточного побережья',
    season3Desc: 'Нетронутые пляжи восточного побережья, спокойное море и отличные условия для дайвинга.',
    season4Period: 'Октябрь — Ноябрь',
    season4Title: 'Зелёный сезон',
    season4Desc: 'Живописные пейзажи, бурные водопады и невероятные возможности для фотографии.',

    // ── LuxuryStays ──
    staysTag: 'Где остановиться',
    staysHeading: 'Размещение',
    staysSub: 'Бутик-отели, исторические бунгало и эксклюзивные курорты, отобранные за высокий сервис и неповторимый характер.',
    staysExploreAll: 'Все варианты размещения',
    staysBeachResort: 'Пляжный курорт',
    staysHeritageBungalow: 'Историческое бунгало',
    staysSafariLodge: 'Сафари-лодж',
    staysBoutiqueResort: 'Бутик-курорт',

    // ── TravellerStories ──
    storiesTag: 'Опыт гостей',
    storiesHeading: 'Истории путешественников',
    storiesSub: 'Услышьте от путешественников, которые уже познали магию Шри-Ланки с Mishka Tours.',
    storiesReadMore: 'Читать больше отзывов',
    testimonial1: 'Mishka Tours превратили наш медовый месяц в путешествие всей жизни. Каждая деталь была идеальной — от частного сафари до прекрасных пляжей. Эти воспоминания останутся с нами навсегда.',
    testimonial1Author: 'Сара и Михаил',
    testimonial1Location: 'Лондон, Великобритания',
    testimonial2: 'Внимание к деталям и знание местности сыграли решающую роль. Наш гид стал как родной, а впечатления были подлинными и глубоко трогательными.',
    testimonial2Author: 'Эмма Томпсон',
    testimonial2Location: 'Сидней, Австралия',
    testimonial3: 'От чайных плантаций до древних храмов — каждый момент превзошёл наши ожидания. Безупречная организация и искреннее гостеприимство сделали этот отдых лучшим в нашей жизни.',
    testimonial3Author: 'Дэвид Чен',
    testimonial3Location: 'Сингапур',

    // ── JourneyBuilderTeaser ──
    builderHeading: 'Создайте идеальное путешествие',
    builderSub: 'Наши эксперты разработают индивидуальный маршрут, подобранный под ваши мечты, бюджет и стиль путешествия.',
    builderFlexDates: 'Гибкие даты',
    builderFlexDatesSub: 'Выберите удобное время',
    builderCustomRoutes: 'Индивидуальный маршрут',
    builderCustomRoutesSub: 'Путешествуйте в своём темпе',
    builderExpertGuidance: 'Экспертная поддержка',
    builderExpertGuidanceSub: 'Персональные консультанты',
    builderStartPlanning: 'Начать планирование',
    builderCustomTour: 'Конструктор тура',

    // ── EditorialJournal ──
    journalTag: 'Истории и советы',
    journalHeading: 'Журнал путешествий',
    journalSub: 'Инсайдерские гиды, культурные открытия и вдохновение для путешествий от наших экспертов по Шри-Ланке.',
    journalExplore: 'Открыть путеводитель',
    journalReadArticle: 'Читать статью',
    article1Title: '10 скрытых храмов, которые стоит посетить',
    article1Category: 'Культура',
    article1Excerpt: 'Откройте для себя древние священные места за пределами туристических маршрутов, где духовность встречается с историей.',
    article1Time: '8 мин. чтения',
    article2Title: 'Полный гид по шри-ланкийской кухне',
    article2Category: 'Кухня',
    article2Excerpt: 'От уличной еды до изысканной кухни — откройте вкусы, делающие шри-ланкийскую кухню незабываемой.',
    article2Time: '12 мин. чтения',
    article3Title: 'Наблюдение за леопардами в Яла',
    article3Category: 'Дикая природа',
    article3Excerpt: 'Экспертные советы, как максимально увеличить шансы встретить неуловимого шри-ланкийского леопарда.',
    article3Time: '6 мин. чтения',

    // ── ClosingCTA ──
    closingHeading: 'Ваше шри-ланкийское путешествие ждёт',
    closingSub: 'Позвольте нашим экспертам создать индивидуальный маршрут, воплощающий ваши мечты о путешествии.',
    closingStartPlanning: 'Начать планирование',
    closingAIPlanner: 'Планировщик туров',
    closingTrust: 'Нам доверяют путешественники из более чем 40 стран • 5000+ отзывов с пятью звёздами',

    // ── WhyUs ──
    whyTag: 'Почему Mishka Tours',
    whyHeading: 'Почему мы',
    whySub: 'Мы сочетаем местные знания и гибкое планирование для создания незабываемых впечатлений от Шри-Ланки.',
    whyPrivateTitle: 'Частные и гибкие туры',
    whyPrivateDesc: 'Путешествуйте в своём темпе с гибкими маршрутами и персональным планированием.',
    whyLocalTitle: 'Местные знания',
    whyLocalDesc: 'Мы знаем остров — маршруты, скрытые места, лучшее время для каждого направления.',
    whySafeTitle: 'Безопасно и надёжно',
    whySafeDesc: 'Комфортный частный транспорт, дружелюбная местная поддержка и удобная связь через WhatsApp.',
    whyMemTitle: 'Незабываемые впечатления',
    whyMemDesc: 'От прилёта до отлёта мы помогаем вам открыть лучшее Шри-Ланки комфортно и незабываемо.',
    whyEasyTitle: 'Простая коммуникация',
    whyEasyDesc: 'Свяжитесь с нами через WhatsApp или социальные сети для быстрого планирования тура.',
    whyComfortTitle: 'Комфортный транспорт',
    whyComfortDesc: 'Частный транспорт для пар, семей и небольших групп.',

    // ── Footer ──
    footerDesc: 'Откройте Шри-Ланку с комфортом, заботой и местным опытом. Частные экскурсии, сафари, культурные путешествия и индивидуальные туры.',
    footerQuickLinks: 'Быстрые ссылки',
    footerPlanTrip: 'Спланировать поездку',
    footerPopularDest: 'Популярные направления',
    footerGetInTouch: 'Связаться с нами',
    footerNewsletter: 'Подпишитесь на нашу рассылку для вдохновения.',
    footerNewsletterJoin: 'Подписаться',
    footerEmailPlaceholder: 'Ваш email',
    footerAllTours: 'Все туры',
    footerCustomTour: 'Индивидуальный тур',
    footerPrivateDriver: 'Частный водитель',
    footerVisaReq: 'Виза и документы',
    footerSigiriya: 'Скальная крепость Сигирия',
    footerElla: 'Элла и горная страна',
    footerYala: 'Национальный парк Яла',
    footerMirissa: 'Пляжи Мириссы',
    footerKandy: 'Культурный город Канди',
    footerLocation: 'Шри-Ланка',
    footerCopyright: 'Mishka Tours Sri Lanka. Все права защищены.',
    footerPrivacy: 'Политика конфиденциальности',
    footerTerms: 'Условия использования',

    // ── About ──
    aboutTitle: 'О Mishka Tours Sri Lanka',
    aboutSubtitle: 'Откройте Шри-Ланку с комфортом, заботой и местным опытом.',
    aboutStoryHeading: 'Местный туристический сервис, которому можно доверять',
    aboutP1: 'Mishka Tours Sri Lanka — местный туристический сервис, предлагающий тщательно спланированные экскурсии и частные туры по острову. От древних храмов и горных пейзажей до заповедников, пляжей, водопадов, чайных плантаций и морских приключений — мы помогаем путешественникам открыть лучшее Шри-Ланки комфортно и незабываемо.',
    aboutP2: 'Хотите ли вы короткую однодневную поездку, двухдневное приключение, частную экскурсию по городу или полностью индивидуальный тур — Mishka Tours Sri Lanka поможет вам спланировать идеальное путешествие с учётом вашего времени, стиля и интересов.',
    aboutP3: 'Мы предлагаем частные туры, однодневные и двухдневные экскурсии, индивидуальные туры, трансферы в аэропорт, сафари, наблюдение за китами, сёрфинг, культурные и природные туры, а также поддержку частного водителя по всей Шри-Ланке.',
    aboutCoreValues: 'Наши ценности',
    aboutCoreValuesSub: 'Принципы, которыми мы руководствуемся при планировании каждого путешествия.',
    aboutVal1Title: 'Частные и гибкие туры',
    aboutVal1Desc: 'Путешествуйте в своём темпе с гибкими маршрутами и персональным подходом.',
    aboutVal2Title: 'Местные знания',
    aboutVal2Desc: 'Мы знаем остров — маршруты, скрытые места, лучшее время для каждого направления.',
    aboutVal3Title: 'Безопасно и надёжно',
    aboutVal3Desc: 'Комфортный частный транспорт, дружелюбная поддержка и удобная связь через WhatsApp.',
    aboutVal4Title: 'Незабываемые впечатления',
    aboutVal4Desc: 'От прилёта до отлёта мы помогаем вам открыть лучшее Шри-Ланки.',

    // ── FAQ ──
    faqTitle: 'Часто задаваемые вопросы',
    faqSubtitle: 'Всё, что нужно знать перед путешествием по Шри-Ланке.',
    faqCat1: 'Туры и бронирование',
    faqCat2: 'Активности и впечатления',
    faqCat3: 'Цены и включения',
    faqQ1: 'Вы предлагаете частные туры?',
    faqA1: 'Да. Mishka Tours Sri Lanka предлагает частные и гибкие туры для одиночных путешественников, пар, семей и небольших групп.',
    faqQ2: 'Можно ли настроить экскурсию под себя?',
    faqA2: 'Да. Маршруты и мероприятия можно скорректировать в зависимости от вашего времени, расположения отеля и доступности. Свяжитесь с нами через WhatsApp для планирования.',
    faqQ3: 'Как забронировать тур?',
    faqA3: 'Вы можете связаться с Mishka Tours Sri Lanka через WhatsApp, TikTok, Facebook или Instagram. Сообщите дату поездки, место отправления, количество человек и желаемый тур.',
    faqQ4: 'Доступен ли трансфер из отеля?',
    faqA4: 'Да. Трансфер из отеля можно организовать в зависимости от вашего местонахождения.',
    faqQ5: 'Вы организуете сафари-туры?',
    faqA5: 'Да. Сафари на открытых джипах в национальном парке Яла и другие приключения с дикой природой можно организовать в рамках вашего тура.',
    faqQ6: 'Вы организуете морские активности?',
    faqA6: 'Да. Наблюдение за китами, снорклинг, дайвинг, рыбалка, сёрфинг и морские прогулки на яхте — всё зависит от погоды и сезона.',
    faqQ7: 'Вы предоставляете трансфер из аэропорта?',
    faqA7: 'Да. Трансфер из любого аэропорта Шри-Ланки до вашего отеля или пункта назначения.',
    faqQ8: 'Входят ли входные билеты в стоимость тура?',
    faqA8: 'Входные билеты, сборы за активности, аренда джипа и услуги лодок зависят от выбранного пакета и итоговой стоимости. Уточняйте при бронировании.',
    faqQ9: 'Какие варианты транспорта доступны?',
    faqA9: 'Мы предлагаем частный автомобиль, внедорожник, микроавтобус и минибас в зависимости от размера группы. Все транспортные средства с личным водителем.',
    faqQ10: 'Можно ли организовать полностью индивидуальный тур?',
    faqA10: 'Да. Если вы не нашли подходящий тур, мы создадим индивидуальный маршрут с учётом даты прилёта, расположения отеля, длительности поездки и ваших предпочтений.',
    faqStillQuestion: 'Остались вопросы?',
    faqStillSub: 'Наши эксперты готовы помочь. Напишите нам, и мы ответим в течение нескольких часов.',
    faqContactUs: 'Связаться с нами',

    // ── Contact ──
    contactTitle: 'Спланируйте тур по Шри-Ланке с Mishka Tours',
    contactSubtitle: 'Готовы исследовать Шри-Ланку? Отправьте нам дату поездки, место отправления, количество туристов и желаемый тур.',
    contactHeading: 'Свяжитесь с Mishka Tours Sri Lanka',
    contactDesc: 'Напишите нам в WhatsApp для быстрого планирования тура. Сообщите дату поездки, место отправления, количество туристов и желаемый тур.',
    contactLocation: 'Местонахождение',
    contactPhone: 'Телефон / WhatsApp',
    contactEmail: 'Электронная почта',
    contactAvailability: 'Режим работы',
    contactAvailabilityVal: 'Работаем 7 дней в неделю',
    contactFormHeading: 'Отправить запрос',
    contactName: 'Имя *',
    contactWhatsApp: 'Номер WhatsApp *',
    contactEmailField: 'Электронная почта',
    contactDate: 'Дата поездки *',
    contactPickup: 'Место отправления *',
    contactPickupPH: 'Название отеля или город',
    contactTravelers: 'Количество туристов *',
    contactTour: 'Выбранный тур / активность',
    contactSelectTour: 'Выберите тур или активность...',
    contactTwoDayLabel: 'Двухдневные экскурсии',
    contactOneDayLabel: 'Однодневные экскурсии',
    contactIndividualLabel: 'Индивидуальные экскурсии',
    contactAirport: 'Трансфер из аэропорта',
    contactCustom: 'Индивидуальный тур',
    contactMessage: 'Сообщение',
    contactMessagePH: 'Расскажите о ваших планах, предпочтениях или задайте вопрос...',
    contactSend: 'Отправить запрос',
    contactWhatsAppBtn: 'Написать в WhatsApp',
    contactSuccessTitle: 'Сообщение успешно отправлено!',
    contactSuccessDesc: 'Спасибо за обращение. Наш специалист свяжется с вами в течение 24 часов.',

    // ── Tours page ──
    toursTitle: 'Все туры и экскурсии',
    toursSubtitle: 'Ознакомьтесь с нашим полным ассортиментом частных туров, однодневных экскурсий, сафари и индивидуальных программ.',
    toursFilterAll: 'Все',
    toursDurationLabel: 'Длительность',
    toursRegionLabel: 'Регион',
    toursActivityLabel: 'Активность',
    toursNoResults: 'Туры по заданным фильтрам не найдены.',
    toursFrom: 'От',
    toursPP: '/ чел.',
    toursContactPrice: 'Уточнить цену',
    toursViewDetails: 'Подробнее',
    toursBookNow: 'Забронировать',
  }
};

interface PreferencesContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  language: LanguageCode;
  setLanguage: (l: LanguageCode) => void;
  hasChosenPreferences: boolean;
  setHasChosenPreferences: (v: boolean) => void;
  formatPrice: (usdAmount: number) => string;
  t: (key: string) => string;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(
  undefined
);

export function PreferencesProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD');
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [hasChosenPreferences, setHasChosenPreferencesState] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCurrency = localStorage.getItem('mishka_currency') as CurrencyCode | null;
      const storedLanguage = localStorage.getItem('mishka_language') as LanguageCode | null;
      const storedChosen = localStorage.getItem('mishka_prefs_chosen');
      if (storedCurrency && CURRENCIES[storedCurrency]) setCurrencyState(storedCurrency);
      if (storedLanguage && LANGUAGES[storedLanguage]) setLanguageState(storedLanguage);
      setHasChosenPreferencesState(storedChosen === 'true');
    } catch (e) {
      console.error('Failed to load preferences', e);
    } finally {
      setLoaded(true);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem('mishka_currency', c);
  };

  const setLanguage = (l: LanguageCode) => {
    setLanguageState(l);
    localStorage.setItem('mishka_language', l);
  };

  const setHasChosenPreferences = (v: boolean) => {
    setHasChosenPreferencesState(v);
    localStorage.setItem('mishka_prefs_chosen', String(v));
  };

  const formatPrice = (usdAmount: number) => {
    const info = CURRENCIES[currency];
    if (usdAmount === 0) return translations[language]['contactForPrice'] ?? 'Contact for Price';
    const converted = Math.round(usdAmount * info.rateFromUsd);
    return `${info.symbol}${converted.toLocaleString()}`;
  };

  const t = (key: string) => translations[language][key] ?? translations['en'][key] ?? key;

  if (!loaded) return null;

  return (
    <PreferencesContext.Provider
      value={{
        currency, setCurrency,
        language, setLanguage,
        hasChosenPreferences, setHasChosenPreferences,
        formatPrice, t
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
