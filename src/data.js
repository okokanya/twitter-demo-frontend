import avatar from './img/avatar.png';
import resources from './img/resources.png';
import ill from './img/ill.png';

export const tweets = [
  {
    avatar: avatar,
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
    image: resources
  },
  {
    avatar: avatar,
    username: 'EveryInteract',
    name: 'Every Interaction',
    time: new Date(2018, 6, 20),
    stat: { comment: 1, retweet: 20, like: 9, message: 4, liked: false },
    textSize: 'big',
    html: `Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/`
  },
  {
    avatar: avatar,
    username: 'EveryInteract',
    name: 'Every Interaction',
    time: new Date(2018, 6, 20),
    stat: { comment: 1, retweet: 20, like: 9, message: 4, liked: false },
    html: `Variable web fonts are coming, and will open a world of opportunities 
    for weight use online`,
    embed: {
      img: ill,
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
    link: '',
    count: 234,
    text: ''
  },
  {
    title: '#FridayFeeling',
    link: '#',
    count: 12123,
    text: ''
  },
  {
    title: '#BrexitAnniversary',
    link: '#',
    count: '',
    text: "It's one year since the UK voted to leave the European Union"
  },
  {
    title: '#Joe Budden',
    link: '#',
    count: 1036,
    text: ''
  }
];
