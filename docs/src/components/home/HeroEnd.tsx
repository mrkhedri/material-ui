import * as React from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import Section from 'docs/src/layouts/Section';
import { alpha } from '@mui/material/styles';

function Placeholder() {
  return <Box sx={{ height: { xs: 587, sm: 303, md: 289 } }} />;
}
const StartToday = dynamic(() => import('./StartToday'), { loading: Placeholder });

export default function HeroEnd() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '500px',
  });
  return (
    <Box
      ref={ref}
      sx={(theme) => ({
        background: `linear-gradient(180deg, #FFF 50%, 
          ${(theme.vars || theme).palette.primary[50]} 100%)
        `,
        ...theme.applyDarkStyles({
          background: `linear-gradient(180deg, ${
            (theme.vars || theme).palette.primaryDark[800]
          } 50%, 
          ${alpha(theme.palette.primary[900], 0.2)} 100%)
          `,
        }),
      })}
    >
      <Section bg="transparent" cozy>
        {inView ? <StartToday /> : <Placeholder />}
      </Section>
    </Box>
  );
}
