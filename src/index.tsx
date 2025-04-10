import "./views/styles/sass/global.scss"
import { NuqsAdapter } from "nuqs/adapters/react-router/v7"
import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import RoutePages from "./routes"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NuqsAdapter>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <RoutePages />
        </Suspense>
      </BrowserRouter>
    </NuqsAdapter>
  </StrictMode>,
)
