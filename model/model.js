const model = {
 app:{
    currentPage: 'home',
    pages: ["dashboard",'gallerii', 'chat', "logInPage", "registerPage",  ]
  },
  inputs: {
    name: '',
    password: '',
    confirmPassword: '',
    eventInfo: {
      title: '',
      date: '',
      place: '',
      extraInfo: '',
    },
    email: '',
    friendsList: [],
    profileInfo: '',
    statsInfo: '',
    message: '' ,
  },
  data: {
    users: [],
    friends: {}, 
    events: [], 
    messages: [], 
    statistics: {}, 
    about: {
      title: 'About',
      content: 'Den mest chille veien å planlegge shreds med gjengen!'
    }, 
    logo: {
      src: 'img/logo.png',
      alt: 'logo'
    },
 }



};