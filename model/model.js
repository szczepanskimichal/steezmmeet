const model = {
 app:{
    currentPage: 'home',
    pages: ['home', 'about', 'contact']
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
      content: 'This is the about page'
    }
 }



};