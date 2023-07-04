import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonCol } from '@ionic/react';
import { Link } from 'react-router-dom';
import moviesData from '../movies.json';

const Home: React.FC = () => {
  const displayedMovies = moviesData.slice(0, 5);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonicFlin</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid fixed>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginLeft: '10px' }}>
            {displayedMovies.map((movie) => (
              <IonCol key={movie.id} size="12" size-md="3" size-lg="2">
                <IonCard>
                  <Link to={`/movie/${movie.id}`}>
                    <div
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '300px',
                      }}
                    ></div>
                    <IonCardHeader>
                      <IonCardSubtitle style={{ fontSize: '14px', fontWeight: 'bold' }}>{movie.genre}</IonCardSubtitle>
                      <IonCardTitle style={{ fontSize: '18px', margin: '10px 0' }}>{movie.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent style={{ textAlign: 'center' }}>
                     
                    </IonCardContent>
                  </Link>
                </IonCard>
              </IonCol>
            ))}
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
