import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
    const featuredEvents = props.events;

    return <div>
        <ul>
            <EventList items={featuredEvents}/>
        </ul>
    </div>
}

export async function getStaticProps() {
    const featureEvents = await getFeaturedEvents();

    return {
        props: {
            events: featureEvents,
        },
        revalidate: 1800,
    }
}

export default HomePage;