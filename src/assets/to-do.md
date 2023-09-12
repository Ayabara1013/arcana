 
* trading post tracker
  -- fix the tracking for the tracked and collected items so they update regardless of where they're clicked
  -- add the ad block under the details panel

- trading post class set Calculator
  -- add local storage for the class set items
  -- add local storage for the tendies entered
    --- add save tendies button to store the tendies given to the local storage
  -- the "view sets" gallery text element is too close to the left side, I may want to experiment with adding a small left margin

- local storage
  -- the tendies and items need to be tracked across pages and synced everywhere
    --- to accomplish this, I should try moving the storage to the main <App.jsx /> component, then passing it in to the other pages?
    --- this could accomplish what I am trying to do, and would hopefully allow me to have everything tracked across the app easily
    --- to do this, I could make a <const [user, setUser] = useState(getLocalStorageUserData())> state and pass that through
