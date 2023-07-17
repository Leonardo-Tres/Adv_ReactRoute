import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout'
import EventsLayout from './pages/EventsLayout'
import HomePage from './pages/HomePage'
import EventsPage, { loader as eventsLoader} from './pages/EventsPage'
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from './pages/EventDetailPage'
import NewEventPage, { action as newEventAction } from './pages/NewEventPage'
import EditEventPage from './pages/EditEventPage'
import ErrorPage from './pages/ErrorPage';

function App() {

  const router = createBrowserRouter([
    { path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children: [
        { 
          index: true, 
          element: <HomePage />
        },
        { 
          path: 'events', 
          element: <EventsLayout />,
          children: [
            { 
              index: true,
              element: <EventsPage/>,
              loader: eventsLoader
            },
            { 
              path: 'new',
              element: <NewEventPage />,
              action: newEventAction
            },
            { 
              path: ':eventId', 
              loader: eventDetailLoader,
              id: 'event-detail',
              children: [
                { 
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction
                },
                { 
                  path: 'edit', 
                  element: <EditEventPage />
                }
              ]
            }
          ]
        }
      ]
    }
  ])


  return <RouterProvider router={router} />
}

export default App;
