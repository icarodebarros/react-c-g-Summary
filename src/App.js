import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsj";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Switch> {/* Switch tells react that only one of those should be
      rendered. (The first match) */}
        <Route path="/" exact> {/* Need 'exact' otherwise this '/' will
        always match first, and never render the others */}
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
