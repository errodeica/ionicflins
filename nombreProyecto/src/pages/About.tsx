import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/react';

const About: React.FC = () => (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <p>This is an Ionic React app for displaying movie information.</p>
            <p>It uses the Ionic framework for UI components and React for building the app.</p>
            <p>Feel free to explore the movies and enjoy!</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
  
  export default About;
  