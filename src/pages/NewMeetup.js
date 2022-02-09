import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  /**
   * Using Firebase (Realtime Database) on test mode
   */
  const URL_BASE = "<firebase url>";

  function addMeetupHandler(meetupData) {
    fetch(`${URL_BASE}/meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
