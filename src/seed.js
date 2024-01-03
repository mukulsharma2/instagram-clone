export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'uzg4gFVIvTcE3hqv31sFQSWXDxp1',
        username: 'mukul',
        fullName: 'Mukul Sharma',
        emailAddress: 'mukul@mukul.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'aman',
        fullName: 'Aman Gupta',
        emailAddress: 'aman@aman.com',
        following: [],
        followers: ['uzg4gFVIvTcE3hqv31sFQSWXDxp1'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'mohit',
        fullName: 'Mohit Verma',
        emailAddress: 'mohit@mohit.com',
        following: [],
        followers: ['uzg4gFVIvTcE3hqv31sFQSWXDxp1'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'harsh',
        fullName: 'Harsh Sharma',
        emailAddress: 'harsh@harsh.com',
        following: [],
        followers: ['uzg4gFVIvTcE3hqv31sFQSWXDxp1'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/aman/${i}.jpg`,
          caption: 'Living in nature',
          likes: [],
          comments: [
            {
              displayName: 'mohit',
              comment: 'This picture is very good!'
            },
            {
              displayName: 'harsh',
              comment: 'What place is it?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }