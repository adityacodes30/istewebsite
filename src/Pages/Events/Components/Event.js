import React from 'react'
import EventSingular from './EventSingular'
import TopComponent from './TopComponent';

function Event() {
   
    const images = [ "media/logoColloquium.png", "media/logoHackonix.png", "media/logoQuestOfTheCurious.png"];


  return (
    <div>
      <EventSingular image = {images} />
      <TopComponent />
    </div>
  )
}

export default Event
