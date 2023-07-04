import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useParams } from 'react-router-dom';
import moviesData from '../movies.json';

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = moviesData.find((movie) => movie.id.toString() === id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Movie Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {movie && (
          <IonCard>
            <img src={movie.poster_path} alt={movie.title} />
            <IonCardHeader>
              <IonCardSubtitle>{movie.genre}</IonCardSubtitle>
              <IonCardTitle>{movie.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Vote Average:</strong> {movie.vote_average}</p>
              <p><strong>Overview:</strong> {movie.overview}</p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Movie;
