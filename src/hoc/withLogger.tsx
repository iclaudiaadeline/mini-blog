import { useEffect } from 'react';
import type { ComponentType } from 'react';

function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  name: string
) {
  function ComponentWithLogger(props: P) {
    useEffect(() => {
      console.log(`${name} mounted`);
      return () => {
        console.log(`${name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  return ComponentWithLogger;
}

export default withLogger;