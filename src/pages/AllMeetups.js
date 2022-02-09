import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";
import ENV from '../environment/environment';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${ENV.URL_BASE}/meetups.json`) // get by default
      .then(response => {
        return response.json();
      })
      .then(data => {
        const meetups = [];

        for (const key in data) { // changing the firebase default format
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); /* List of dependencies that if changed will cause the above function
  to execute. An empty array will execute the function only when the component 
  render the first time. Ommit the array is the same of having our function outside
  the useEffect. 
  The golden rule is list the outsiders dependencies. (In our case we dont have any) */

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
