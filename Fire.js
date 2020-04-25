import firebase from 'firebase'

class Fire {
  constructor(){
    this.init()
    this.checkAuth()
  }
  init = () => {
    !firebase.app.length ? 
      firebase.initializeApp({
          apiKey: "AIzaSyBU7jPfzeEu3PjIWL3MPr8rBniXnK7buO4",
          authDomain: "chatapp-728bb.firebaseapp.com",
          databaseURL: "https://chatapp-728bb.firebaseio.com",
          projectId: "chatapp-728bb",
          storageBucket: "chatapp-728bb.appspot.com",
          messagingSenderId: "342234302509",
          appId: "1:342234302509:web:75d6210b0cf28a7d0090a4"
        
      })
    :
    ''
  }

  checkAuth = () => {
    firebase.auth().onAuthStateChanged( uerr=> {
      !user? firebase.auth().signInAnonymously():''
    })
  }

  send = messages => {
    messages.forEach( item => {
      const message = {
        text: item.text,
        timestamp: firebase.datebase.ServerValue.TIMESTAMP,
        user: item.user
      }

      this.db.push(message)
    })
  }
  

  get db() {
    return firebase.database().ref("messages")
  }

}