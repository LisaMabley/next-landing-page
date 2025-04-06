'use client';

import { useEffect, useMemo, useState } from 'react';

const gitHubData: ContributionDay[] = [
  {
      contributionCount: 1,
      date: '2024-03-11',
  },
  {
      contributionCount: 1,
      date: '2024-03-12',
  },
  {
      contributionCount: 1,
      date: '2024-03-13',
  },
  {
      contributionCount: 5,
      date: '2024-03-14',
  },
  {
      contributionCount: 2,
      date: '2024-03-15',
  },
  {
      contributionCount: 3,
      date: '2024-03-19',
  },
  {
      contributionCount: 8,
      date: '2024-03-25',
  },
  {
      contributionCount: 7,
      date: '2024-03-27',
  },
  {
      contributionCount: 6,
      date: '2024-03-28',
  },
  {
      contributionCount: 1,
      date: '2024-04-03',
  },
  {
      contributionCount: 6,
      date: '2024-04-09',
  },
  {
      contributionCount: 4,
      date: '2024-04-10',
  },
  {
      contributionCount: 2,
      date: '2024-04-11',
  },
  {
      contributionCount: 2,
      date: '2024-04-15',
  },
  {
      contributionCount: 9,
      date: '2024-04-16',
  },
  {
      contributionCount: 2,
      date: '2024-04-19',
  },
  {
      contributionCount: 8,
      date: '2024-04-23',
  },
  {
      contributionCount: 3,
      date: '2024-04-24',
  },
  {
      contributionCount: 11,
      date: '2024-04-25',
  },
  {
      contributionCount: 5,
      date: '2024-04-26',
  },
  {
      contributionCount: 4,
      date: '2024-04-27',
  },
  {
      contributionCount: 2,
      date: '2024-04-28',
  },
  {
      contributionCount: 3,
      date: '2024-04-29',
  },
  {
      contributionCount: 13,
      date: '2024-04-30',
  },
  {
      contributionCount: 2,
      date: '2024-05-01',
  },
  {
      contributionCount: 4,
      date: '2024-05-02',
  },
  {
      contributionCount: 7,
      date: '2024-05-07',
  },
  {
      contributionCount: 12,
      date: '2024-05-08',
  },
  {
      contributionCount: 2,
      date: '2024-05-09',
  },
  {
      contributionCount: 14,
      date: '2024-05-14',
  },
  {
      contributionCount: 4,
      date: '2024-05-15',
  },
  {
      contributionCount: 10,
      date: '2024-05-20',
  },
  {
      contributionCount: 3,
      date: '2024-05-21',
  },
  {
      contributionCount: 7,
      date: '2024-05-22',
  },
  {
      contributionCount: 2,
      date: '2024-05-23',
  },
  {
      contributionCount: 1,
      date: '2024-05-24',
  },
  {
      contributionCount: 16,
      date: '2024-05-28',
  },
  {
      contributionCount: 10,
      date: '2024-05-29',
  },
  {
      contributionCount: 6,
      date: '2024-05-30',
  },
  {
      contributionCount: 2,
      date: '2024-05-31',
  },
  {
      contributionCount: 20,
      date: '2024-06-03',
  },
  {
      contributionCount: 1,
      date: '2024-06-04',
  },
  {
      contributionCount: 2,
      date: '2024-06-05',
  },
  {
      contributionCount: 2,
      date: '2024-06-06',
  },
  {
      contributionCount: 14,
      date: '2024-06-10',
  },
  {
      contributionCount: 8,
      date: '2024-06-11',
  },
  {
      contributionCount: 2,
      date: '2024-06-12',
  },
  {
      contributionCount: 0,
      date: '2024-06-18',
  },
  {
      contributionCount: 1,
      date: '2024-06-20',
  },
  {
      contributionCount: 2,
      date: '2024-06-25',
  },
  {
      contributionCount: 1,
      date: '2024-07-03',
  },
  {
      contributionCount: 4,
      date: '2024-07-05',
  },
  {
      contributionCount: 1,
      date: '2024-07-17',
  },
  {
      contributionCount: 2,
      date: '2024-07-18',
  },
  {
      contributionCount: 1,
      date: '2024-07-19',
  },
  {
      contributionCount: 2,
      date: '2024-07-22',
  },
  {
      contributionCount: 6,
      date: '2024-07-23',
  },
  {
      contributionCount: 3,
      date: '2024-07-24',
  },
  {
      contributionCount: 6,
      date: '2024-07-25',
  },
  {
      contributionCount: 5,
      date: '2024-07-26',
  },
  {
      contributionCount: 18,
      date: '2024-07-29',
  },
  {
      contributionCount: 7,
      date: '2024-07-30',
  },
  {
      contributionCount: 10,
      date: '2024-07-31',
  },
  {
      contributionCount: 14,
      date: '2024-08-07',
  },
  {
      contributionCount: 1,
      date: '2024-08-09',
  },
  {
      contributionCount: 8,
      date: '2024-08-12',
  },
  {
      contributionCount: 2,
      date: '2024-08-13',
  },
  {
      contributionCount: 13,
      date: '2024-08-14',
  },
  {
      contributionCount: 5,
      date: '2024-08-15',
  },
  {
      contributionCount: 21,
      date: '2024-08-26',
  },
  {
      contributionCount: 1,
      date: '2024-08-28',
  },
  {
      contributionCount: 5,
      date: '2024-08-29',
  },
  {
      contributionCount: 15,
      date: '2024-09-03',
  },
  {
      contributionCount: 2,
      date: '2024-09-04',
  },
  {
      contributionCount: 6,
      date: '2024-09-05',
  },
  {
      contributionCount: 9,
      date: '2024-09-09',
  },
  {
      contributionCount: 1,
      date: '2024-09-10',
  },
  {
      contributionCount: 13,
      date: '2024-09-11',
  },
  {
      contributionCount: 9,
      date: '2024-09-12',
  },
  {
      contributionCount: 1,
      date: '2024-09-13',
  },
  {
      contributionCount: 13,
      date: '2024-09-16',
  },
  {
      contributionCount: 3,
      date: '2024-09-17',
  },
  {
      contributionCount: 12,
      date: '2024-09-18',
  },
  {
      contributionCount: 14,
      date: '2024-09-19',
  },
  {
      contributionCount: 1,
      date: '2024-09-20',
  },
  {
      contributionCount: 9,
      date: '2024-09-23',
  },
  {
      contributionCount: 5,
      date: '2024-09-24',
  },
  {
      contributionCount: 1,
      date: '2024-09-25',
  },
  {
      contributionCount: 1,
      date: '2024-09-26',
  },
  {
      contributionCount: 4,
      date: '2024-09-27',
  },
  {
      contributionCount: 1,
      date: '2024-09-28',
  },
  {
      contributionCount: 1,
      date: '2024-10-01',
  },
  {
      contributionCount: 12,
      date: '2024-10-02',
  },
  {
      contributionCount: 2,
      date: '2024-10-03',
  },
  {
      contributionCount: 1,
      date: '2024-10-10',
  },
  {
      contributionCount: 3,
      date: '2024-10-14',
  },
  {
      contributionCount: 12,
      date: '2024-10-16',
  },
  {
      contributionCount: 2,
      date: '2024-10-17',
  },
  {
      contributionCount: 2,
      date: '2024-10-28',
  },
  {
      contributionCount: 11,
      date: '2024-10-29',
  },
  {
      contributionCount: 2,
      date: '2024-10-31',
  },
  {
      contributionCount: 1,
      date: '2024-11-02',
  },
  {
      contributionCount: 11,
      date: '2024-11-06',
  },
  {
      contributionCount: 3,
      date: '2024-11-07',
  },
  {
      contributionCount: 2,
      date: '2024-11-09',
  },
  {
      contributionCount: 12,
      date: '2024-11-13',
  },
  {
      contributionCount: 1,
      date: '2024-11-14',
  },
  {
      contributionCount: 15,
      date: '2024-11-18',
  },
  {
      contributionCount: 10,
      date: '2024-12-02',
  },
  {
      contributionCount: 2,
      date: '2024-12-03',
  },
  {
      contributionCount: 1,
      date: '2024-12-04',
  },
  {
      contributionCount: 16,
      date: '2024-12-09',
  },
  {
      contributionCount: 6,
      date: '2024-12-11',
  },
  {
      contributionCount: 6,
      date: '2024-12-12',
  },
  {
      contributionCount: 14,
      date: '2024-12-16',
  },
  {
      contributionCount: 8,
      date: '2024-12-17',
  },
  {
      contributionCount: 6,
      date: '2024-12-19',
  },
  {
      contributionCount: 7,
      date: '2024-12-23',
  },
  {
      contributionCount: 2,
      date: '2024-12-30',
  },
  {
      contributionCount: 5,
      date: '2024-12-31',
  },
  {
      contributionCount: 1,
      date: '2025-01-03',
  },
  {
      contributionCount: 3,
      date: '2025-01-04',
  },
  {
      contributionCount: 17,
      date: '2025-01-06',
  },
  {
      contributionCount: 1,
      date: '2025-01-07',
  },
  {
      contributionCount: 3,
      date: '2025-01-08',
  },
  {
      contributionCount: 2,
      date: '2025-01-09',
  },
  {
      contributionCount: 12,
      date: '2025-01-12',
  },
  {
      contributionCount: 19,
      date: '2025-01-13',
  },
  {
      contributionCount: 9,
      date: '2025-01-14',
  },
  {
      contributionCount: 21,
      date: '2025-01-15',
  },
  {
      contributionCount: 19,
      date: '2025-01-16',
  },
  {
      contributionCount: 1,
      date: '2025-01-29',
  },
  {
      contributionCount: 1,
      date: '2025-02-12',
  },
  {
      contributionCount: 1,
      date: '2025-03-05',
  },
  {
      contributionCount: 3,
      date: '2025-03-09',
  },
  {
      contributionCount: 6,
      date: '2025-03-11',
  },
];

export const ParticleBackground = (): React.ReactElement => {
  const [particlesInit, setParticlesInit] = useState(false);
  const [commitData, setCommitData] = useState(null);
  const [loadingCommitData, setLoadingCommitData] = useState(true);

  const gitHubApiUrl = 'https://api.github.com/graphql';

//   useEffect(() => {
//     fetch(gitHubApiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setCommitData(data);
//         setLoadingCommitData(false);
//       });
//   }, []);

  // Should be run only once per application lifetime
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setParticlesInit(true);
//     });
//   }, []);

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN);
        }, [process.env]);

//   const particlesLoaded = async (container?: Container): Promise<void> => {
//     if (container) {
//       // Associate data items with particles
//       const particles = container.particles.filter(() => true);
//       particles.forEach((particle: Particle, index: number) => {
//         (particle as any).data = gitHubData[index % gitHubData.length];
//       });
//     }
//   };

//   const options: ISourceOptions = useMemo(
//     () => ({
//       background: {
//         image: 'url("/images/space.jpg")',
//         color: {
//           value: '#ffffff',
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         detect_on: 'window',
//         events: {
//           onClick: {
//             enable: true,
//             mode: 'custom',
//           },
//           onHover: {
//             enable: true,
//             mode: 'bubble',
//           },
//         },
//         modes: {
//           push: {
//             quantity: 4,
//           },
//           bubble: {
//             distance: 100,
//             size: 40,
//             duration: 0.4,
//           },
//           custom: (engine: Engine, event: MouseEvent) => {
//             console.log('custom function');
//             const container = (engine as any).container;
//             if (!container) return;

//             // Find the clicked particle
//             const clickedParticle = container.particles.array.find((p: Particle) => {
//               const dx = p.position.x - event.offsetX;
//               const dy = p.position.y - event.offsetY;
//               const distance = Math.sqrt(dx * dx + dy * dy);
//               return distance < p.size.value;
//             });
//           }
//         },
//       },
//       particles: {
//         color: {
//           value: '#ffffff',
//         },
//         links: {
//           color: '#ffffff',
//           distance: 90,
//           enable: true,
//           opacity: 0.25,
//           width: 1,
//         },
//         move: {
//           direction: MoveDirection.none,
//           enable: true,
//           outModes: {
//             default: OutMode.out,
//           },
//           random: false,
//           speed: 1,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: gitHubData.length | 190,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: 'polygon',
//           stroke: {
//             width: 0,
//           },
//           polygon: {
//             nb_sides: 6
//           },
//         },
//         size: {
//           value: { min: 1, max: 6 },
//         },
//       },
//       detectRetina: true,
//     }),
//     [],
//   );

//   if (particlesInit) {
//     return (
//       <div className='relative w-full h-full'>
//         <Particles
//           id='tsparticles'
//           particlesLoaded={particlesLoaded}
//           options={options}
//         />
//       </div>
//     );
//   }

  return <>Total commits: {gitHubData.reduce((acc, curr) => acc + curr.contributionCount, 0)} </>;
};
