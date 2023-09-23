import { IonButton, IonCard, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { IonInputNew } from './components/CustomComp/IonInputNew';
import { useState } from 'react';
import Axios  from 'axios';
import { API } from '../constants';

const CreateEvent: React.FC = () => {
  const [showToast] = useIonToast();
  const [Loading, setLoading] = useState(false);
  const [SocietyName, setSocietyName] = useState('Causmic Club');
  const [EventName, setEventName] = useState('');
  // const [, setSocietyName] = useState('');
  const CreatEvent = () => {
    Axios.post(API.CREATE_EVENT, {
      EventName: EventName,
      SocietyName: SocietyName
    }).then((e) => {
      setLoading(false);
      console.log(e)
      localStorage.removeItem('stage')
      showToast('Academic details recorded.http://localhost:8100/Register/'+ e.data.savedEvent._id )
      // router.push('/dashboard', 'none', 'replace');
  }).catch((err) => {
      console.log(err)
      setLoading(false);
      // setIsOpen(true)
      // setAlertMessage(err.response.data.message)
      // showToast(err.response.data.message + " Please contact Sports Department", 3000)
  })
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonCard>


          <IonInputNew
            title="Society Name"
            type='text'
            value={SocietyName}
            label='Enter new name'
            minlength={5}
            onChange={setSocietyName}
            labelPlacement="floating"
          />
          <IonInputNew
            title="Event Name"
            type='text'
            value={EventName}
            label='Enter new name'
            minlength={5}
            onChange={setEventName}
            labelPlacement="floating"
          />
          <IonInputNew
            title="Date"
            type='text'
            value={(new Date).toLocaleDateString()}
            label='Enter new name'
            minlength={5}
            onChange={setEventName}
            labelPlacement="floating"
          />
          {/* {console.log(} */}
          {/* <IonInputNew
                                        title="Announcement Link"
                                        type='text'
                                        value={NewAnnouncementLink}
                                        label='Enter new name'
                                        minlength={5}
                                        onChange={setNewAnnouncementLink}
                                        labelPlacement="floating"
                                    /> */}
        </IonCard>
        <IonButton onClick={CreatEvent} className="ion-margin">Submit</IonButton>
      </IonContent>

    </IonPage>
  );
};

export default CreateEvent;
