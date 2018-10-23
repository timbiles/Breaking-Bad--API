//This is my fake database
const characters = [
  {
    id: 1,
    name: 'Walter White',
    birthday: 'September 7, 1958',
    occupation: ['High School Science Teacher', 'Meth King pin'],
    img:
      'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg'
  },
  {
    id: 2,
    name: 'Jesse PinkMan',
    birthday: '',
    occupation: '',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg'
  
  },
  {
    id: 3,
    name: 'Skyler White',
    birthday: 'August 11, 1970',
    occupation: [
      'House wife',
      'Book Keeper',
      'Car Wash Manager',
      'Taxi Dispatcher'
    ],
    img: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg'
  },
  {
    id: 4,
    name: `Walter 'Flynn' White Jr.`,
    birthday: 'July 8, 1994',
    occupation: ['Teenager'],
    img:
      'https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg'
  },
  {
    id: 5,
    name: 'Hank Schrader',
    birthday: '',
    occupation: ['DEA Agent'],
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg'

},
{
    id: 6,
    name: 'Marie Schrader',
    birthday: '',
    occupation: ['Clepto', 'Nagging House wife'],
    img: 'https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645'

},
{
  id: 7,
  name: 'Mike Ehrmantraut',
  birthday: '',
  occupation: ['Grade A bad-ass'],
  img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg'

},
{
  id: 8,
  name: 'Saul Goodman',
  birthday: '',
  occupation: ['Lawyer'],
  img: 'https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846'

},
{
  id: 9,
  name: `Gustavo 'Gus' Fring`,
  birthday: '',
  occupation: ['Los Pollos co-Founder', 'Philanthropist', 'Cartel Boss'],
  img: 'https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925'

},
];

const all = {
  characters: 'https://breakingbadapi.com/api/characters',
  episodes: 'https://breakingbadapi.com/api/episodes',
  quotes: 'https://breakingbadapi.com/api/quotes',
  deaths: 'https://breakingbadapi.com/api/deaths'
}

module.exports = {
  characters,
  all
};
