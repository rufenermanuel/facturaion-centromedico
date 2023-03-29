import "./App.css";
import NewUsersForm from "./components/forms/NewUsersForm";

import { doc, getFirestore } from "firebase/firestore";
import {
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
} from "reactfire";

function DataPersona() {
  // easily access the Firestore library--> Colection=users/ID Colection
  const personRef = doc(useFirestore(), "users", "5VlQ6xp5GwNTCwxq0MmE");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(personRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Gettimg Persona Data...</p>;
  }

  return <p>The Persona name is {data.Name}!</p>;
}

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <>
      <NewUsersForm />

      <FirestoreProvider sdk={firestoreInstance}>
        <DataPersona />
      </FirestoreProvider>
    </>
  );
}

export default App;
