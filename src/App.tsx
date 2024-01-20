import { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { Sidebar, Topbar, CustomCalendar, EventBox, Content } from './components';
import { RootLayout } from './layouts';
import pbInstance from './lib/pocketbaseConfig';
import { MapBoxToken } from './constants/environment';
import 'mapbox-gl/dist/mapbox-gl.css';

const eventList = await pbInstance.collection('festival_events').getList();
const { items } = eventList;

const App = () => {
  const [eventBoxes, setEventBoxes] = useState<JSX.Element[]>([]);
  const [viewState, setViewState] = useState({
    latitude: 27.7042,
    longitude: 85.3065,
    zoom: 11,
  });

  const renderEventBox = () => {
    return items?.map((item, index) => {
      return (
        <EventBox
          key={index}
          className="mx-auto w-11/12 mt-[2.5rem]"
          onClick={() => {
            setViewState({
              ...viewState,
              latitude: item?.event_latitude,
              longitude: item?.event_longitude,
              zoom: 17,
            });
          }}
          eventName={item?.event_title}
          eventLocation={item?.event_location}
          eventDescription={item?.event_description}
          eventStartDate={item?.event_start_date}
          eventEndDate={item?.event_end_date}
        />
      );
    });
  };

  const handleDateClick = (value: any) => {
    const selectedDate = new Date(value);
    selectedDate.setHours(0, 0, 0, 0);

    const selectedDateEvents = items?.filter((item) => {
      const eventStartDate = new Date(item?.event_start_date);
      eventStartDate.setHours(0, 0, 0, 0);
      const eventEndDate = new Date(item?.event_end_date);
      eventEndDate.setHours(0, 0, 0, 0);

      return selectedDate >= eventStartDate && selectedDate <= eventEndDate;
    });

    if (selectedDateEvents.length > 0) {
      setEventBoxes(renderEventBox());
    } else {
      setEventBoxes([]);
    }
  }

  return (
    <RootLayout>
      <Topbar />
      <Sidebar>
        <CustomCalendar className="mx-auto w-11/12 h-5/6 mt-[4.5rem]" onClick={handleDateClick} />
        {eventBoxes}
      </Sidebar>
      <Content className="border-l bg-zinc-900/50 border-l-white/10 py-[3.5rem] px-3">
        <ReactMapGl
          mapboxAccessToken={MapBoxToken}
          {...viewState}
          initialViewState={viewState}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker latitude={viewState?.latitude} longitude={viewState?.longitude} />
        </ReactMapGl>
      </Content>
    </RootLayout>
  );
};

export default App;
