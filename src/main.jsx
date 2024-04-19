import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Home from './Home';

import './index.css'

// import { MicroAgent } from '@newrelic/browser-agent/loaders/micro-agent'
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'


const options = {
  info: {beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-1a6b095b76c4b27bae6",applicationID:"1103319484",sa:1},
  loader_config: {accountID:"3684070",trustKey:"3684070",agentID:"1103319484",licenseKey:"NRJS-1a6b095b76c4b27bae6",applicationID:"1103319484"},
  init: {distributed_tracing:{enabled:true,cors_use_newrelic_header:true,cors_use_tracecontext_headers:true,allowed_origins:['https://bam.nr-data.net','http://localhost:4200']},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}}
}

// FULL AGENT
new BrowserAgent(options)
// // manually handle a JavaScript Error with microAgent1
// var err = new Error('Report caught error to New Relic');
// newrelic.noticeError(err)

// // manually capture a Page Action with microAgent2
// microAgent1.addPageAction('myData', {hello: 'world'})

// MICROAGENT
// const microAgent1 = new MicroAgent(options)
// // manually handle a JavaScript Error with microAgent1
// var err = new Error('Report caught error to New Relic');
// microAgent1.noticeError(err)

// // manually capture a Page Action with microAgent2
// microAgent1.addPageAction('myData', {hello: 'world'})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "ho-&amp;-me",
    element: <Home/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
