import EventList from "../pages/eventlist/EventList"
import FilterEvents from "../pages/filterevents/FilterEvents"
import EventDetail from "../pages/eventdetails/EventDetails"

export const routes = [
  {path:'/',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetail/>}
]