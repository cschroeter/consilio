import React, { Suspense, useState } from 'react'
import { Button } from './Button'

// Default Export if possbile
// const LazyComponent = React.lazy(() => import('@consilio/library-two'))

// Named Export with Wrapper
const LazyComponent = React.lazy(() => import('./DefaultExportWrapper'))

export const View = () => {
  const [showComponent, setShowComponent] = useState(false)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Button onClick={() => setShowComponent(true)}>Load Component</Button>
      {showComponent && <LazyComponent />}
    </Suspense>
  )
}
