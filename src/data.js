import { allImages } from './img/allImages';

export const tweets = [
  {
    avatar: allImages.avatar,
    username: 'EveryInteract',
    name: 'Every Interaction',
    time: new Date(2018, 6, 20),
    stat: { comment: 10, retweet: 2, like: 3, message: 4, liked: true },
    textSize: 'big',
    html: `We’ve made some more resources for all you wonderful #design folk
      <a href="everyinteraction.com/resources/">
        everyinteraction.com/resources/
      </a>
      #webdesign #UI`,
    image: allImages.resources
  },
  {
    avatar: allImages.avatar,
    username: 'EveryInteract',
    name: 'Every Interaction',
    time: new Date(2018, 6, 20),
    stat: { comment: 1, retweet: 20, like: 9, message: 4, liked: false },
    textSize: 'big',
    html: `Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/`
  },
  {
    avatar: allImages.avatar,
    username: 'EveryInteract',
    name: 'Every Interaction',
    time: new Date(2018, 6, 20),
    stat: { comment: 1, retweet: 20, like: 9, message: 4, liked: false },
    html: `Variable web fonts are coming, and will open a world of opportunities 
    for weight use online`,
    embed: {
      img: allImages.ill,
      title: 'The Future of Web Fonts',
      text:
        'We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…',
      link: 'vilijamis.com',
      linkUrl: 'http://vilijamis.com/'
    }
  }
];

export const trends = [
  {
    title: '#BringYourDogToWorkDay',
    link: '#BringYourDogToWorkDay',
    count: 234
  },
  {
    title: '#FridayFeeling',
    link: '#FridayFeeling',
    count: 12123
  },
  {
    title: '#BrexitAnniversary',
    link: '#BrexitAnniversary',
    count: '',
    text: "It's one year since the UK voted to leave the European Union"
  },
  {
    title: '#Joe Budden',
    link: '#Joe_Budden',
    count: 1036
  }
];

export const followersSuggest = [
  {
    img: allImages.appleInsider,
    name: 'AppleInsider',
    username: 'appleinsider',
    link: '/AppleInsider'
  },
  {
    img: allImages.creode,
    name: 'Creode',
    username: 'Creode',
    link: '/Creode'
  },
  {
    img: allImages.epiphany,
    name: 'Epiphany Search',
    username: 'Epiphan',
    link: '/Epiphan'
  }
];

export const followersYouKnow = [
  {
    img: allImages.avatar1,
    link: '#'
  },
  {
    img: allImages.avatar2,
    link: '#'
  },
  {
    img: allImages.avatar3,
    link: '#'
  },
  {
    img: allImages.avatar4,
    link: '#'
  },
  {
    img: allImages.avatar5,
    link: '#'
  },
  {
    img: allImages.avatar6,
    link: '#'
  }
];
export const photosVideos = [
  {
    img: allImages.photos1,
    link: '#'
  },
  {
    img: allImages.photos2,
    link: '#'
  },
  {
    img: allImages.photos3,
    link: '#'
  },
  {
    img: allImages.photos4,
    link: '#'
  },
  {
    img: allImages.photos5,
    link: '#'
  },
  {
    img: allImages.photos6,
    link: '#'
  }
];
