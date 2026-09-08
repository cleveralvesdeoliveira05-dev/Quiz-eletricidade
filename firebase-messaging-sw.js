importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBPQWF7gxVV_8sDOBE02LP6Qtdxq9sg4y0",
  authDomain: "quiz-eletricidade.firebaseapp.com",
  projectId: "quiz-eletricidade",
  storageBucket: "quiz-eletricidade.firebasestorage.app",
  messagingSenderId: "886964306840",
  appId: "1:886964306840:web:71454653115fa89e8da1ed"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Notificação recebida:',
    payload
  );

  const notificationTitle =
    payload.notification?.title || '🔔 Novo participante!';

  const notificationOptions = {
    body:
      payload.notification?.body ||
      'Alguém terminou o quiz.',
    icon: '/Quiz-eletricidade/icon.png',
    badge: '/Quiz-eletricidade/icon.png'
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
