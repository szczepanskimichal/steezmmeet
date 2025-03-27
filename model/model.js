const model = {
  app: {
    currentPage: 'home',
    pages: [
      'logInPage', 'registerPage', 'profilePage', 'dashboardPage', 'chatPage',
      'createEventPage', 'viewEventPage', 'viewAllEvents', 'galleryPage',
      'imagePage', 'videoPage', 'statisticsPage', 'viewAllUsers',
      'viewFriendsPage', 'adminPage', 'galleryAdminPage', 'vennListeAdmin'
    ]
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
    viewEventPage: {
      title: '',
      date: '',
      place: '',
      slope: '',
      extraInfo: '',
      attendees: [],
    },
    editmode: {
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
  },
  data: {
    users: [
      {
        id: 2,
        username: "user2",
        name: "user2name",
        aboutMe: "jeg elsker ski",
        favoriteSlopeID: [1],
        favoriteLocationID: [2],
        status: false,
        chat: [
          {
            ToUserID: 1,
            conversation: [
              {
                date: "11/11/11",
                time: "10:08",
                userID: 1,
                message: "hei hei",
              },
              {
                interactedUserID: 1,
                conversation: [
                  {
                    date: "11/11/11",
                    time: "10:15",
                    userID: 2,
                    message: "Hei på deg",
                  },
                ]
              }
            ]
          }
        ],
        friendsID: [1, 3, 4],
        statistics: [{}],
      },
      {
        id: 1,
        username: "user1",
        name: "user1name",
        aboutMe: "jeg elsker snowboard",
        favoriteSlopeID: [3],
        favoriteLocationID: [5],
        status: true,
        chat: [
          {
            ToUserID: 2,
            conversation: [
              {
                date: "11/10/11",
                time: "20:08",
                userID: 1,
                message: "hei hei",
              },
              {
                interactedUserID: 1,
                conversation: [
                  {
                    date: "09/0101",
                    time: "10:15",
                    userID: 2,
                    message: "helloooooooo :)",
                  },
                ]
              }
            ]
          }
        ],
        friendsID: [1, 3, 4],
        statistics: [{}],
      }
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
    about: {
      title: 'About',
      content: 'Den mest chille veien for å planlegge shreds med gjengen!'
    },
    logo: {
      src: 'img/logo.png',
      alt: 'logo'
    },
  },
};