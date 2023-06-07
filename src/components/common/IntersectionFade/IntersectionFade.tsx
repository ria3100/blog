'use client';

import {Fade} from '@/components/chakra-ui/react';
import {useRef} from 'react';
import {useIntersection} from 'use-intersection';

export function IntersectionFade({children}: {children: React.ReactNode}) {
  const target = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(target, {
    threshold: 1,
    once: true,
  });

  return (
    <div ref={target}>
      <Fade in={intersecting} transition={{enter: {duration: 1}}}>
        {children}
      </Fade>
    </div>
  );
}
