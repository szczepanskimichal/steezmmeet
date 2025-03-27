const model = {
 app:{
    currentPage: 'home',
    pages: ['logInPage', 'registerPage', 'profilePage', 'dashboardPage', 'chatPage',  'createEventPage', 'viewEventPage', 'viewAllEvents', 'galleryPage', 'imagePage', 'videoPage','statisticsPage', 'viewAllUsers', 'viewFriendsPage', "adminPage", "galleryAdminPage", "vennListeAdmin"]
  },
  
  inputs: {
    logInPage: {
      username: '',
      password: '',
    },
    
    registerPage: {
      username: '',
      password: '',
      confirmPassword: '',

    },

    profilePage:{
      username:'',
      aboutMe:'',
      favoriteSlope: '', 
      favourteLocation: '',
      status: false, // true, false, "custommade"
      latestChats: [],
    }, 

    viewAllEventsPage:{ //Usikker på om det burde være input/data
      title: '',
      date: '', 
      time: '',
      location: '',
    }, 

    viewEventPage: {
      title: '',
      date: '',
      place: '',
      slope:'',
      extraInfo: '',
      attendees: [],
    },
    editmode:{
      videoPage: {
        title: '',
        link: '',
        description: '',
      },
    },
    
      imagePage: {
        title: '',
        link: '',
        description: '',
      },
    
    statisticsPage:{
      hoursInSlope:'',
      daysInSlope:'',
    }, 

    viewAllFriendsPage:{
      name:'',
      status: true, 
      bio: '', 
    },
  },

  data: {
    users: [
      {id: 2, username: "user2"},
    
    ],
    friends: [
      {id: 1, username: "per"},
      {id: 2, username: "pål"},
      {id: 3, username: "espen askeladd"}

  ], 
    events: [
      {
        id: 1,
        creatorId: 2,
        title: "hafjell meet",
        date: "2025-07-15",
        place: "lillehammer",
        slope: "blue",
        extraInfo: "",
        attandees: [1, 2, 3],

      }
    ], 
    profilePage:{
      username:'user2', 
      aboutMe:'jeg liker å stå på ski', 
      favoriteSlope: 'hafjell',  
      favourteLocation: 'lillehammer', 
      status: false, 
      latestChats: [],
    }, 

    statisticsPage:{
      id: 1,
      creatorId: 2,
      hoursInSlope:'92',
      daysInSlope:'25',
    }, 
    about: {
      title: 'About',
      content: 'Den mest chille veien for å planlegge shreds med gjengen!'
    }, 
    logo: {
      src: 'img/logo.png',
      alt: 'logo'
    },
  }
};