import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        UpdateForge was meticulously crafted to provide a seamless installation experience and quick setup, ensuring that users can get their computers up and running effortlessly.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        Embrace the power of transparency and collaboration with UpdateForge's open-source nature. Dive into the source code, contribute, and be part of a community-driven initiative.
      </>
    ),
  },
  {
    title: 'Decentralized',
    description: (
      <>
        UpdateForge operates on a decentralized model, distributing control and resources across a network. This ensures enhanced security, reliability, and resilience in managing your computer updates.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
