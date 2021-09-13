import Head from 'next/head';
import React from 'react';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const featuredEvents = props.events;

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featureEvents = await getFeaturedEvents();

  return {
    props: {
      events: featureEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
