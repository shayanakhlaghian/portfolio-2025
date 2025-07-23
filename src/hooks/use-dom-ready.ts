import { useEffect, useState } from 'react';

const useDomReady = () => {
  const [isDomReady, setIsDomReady] = useState<boolean>(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  return isDomReady;
};

export default useDomReady;
