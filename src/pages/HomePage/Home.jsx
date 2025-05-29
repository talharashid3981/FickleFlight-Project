import React from 'react'
import './Home.css'
import SearchFlightsFind from '../../components/common/SearchFlightsForm/SearchFlightsFind'
import RecentSearch from '../../components/common/recentSearch/recentSearch'
import Flightimg from '../../assets/image/flightimg.jpg'
import Hotelimg from '../../assets/icons/bad.png'
import Ticketimg from '../../assets/icons/ticket.png'
import Resturimg from '../../assets/icons/restaurant.png'
import Busimg from '../../assets/icons/front-of-bus.png'
import Taxiimg from '../../assets/icons/frontal-taxi-cab.png'
import Videoimg from '../../assets/icons/video-player.png'
import Tripsugation from '../../components/common/Tripsugation/Tripsugation'
import Destinations from '../../components/common/Destinations/Destinations'
import Recommended from '../../components/common/Recommendedholidays/Recommended'
import Popularstay from '../../components/common/PopularStay/Popularstay'
import mountimg from '../../assets/image/Matterhorn Suites Image.png'
import watterimg from '../../assets/image/Discovery Shores Image.png'
import arciticimg from '../../assets/image/Arctic Hut Image.png'
import lousineimg from '../../assets/image/Lake Louise Image.png'
import Tripimg from '../../assets/image/ParisImage.png'
import greece from '../../assets/image/GreeceImage.png'
import norway from '../../assets/image/NorwayImage.png'
import tuscany from '../../assets/image/TuscanyImage.png'
import Bali from '../../assets/image/unsplash_5MV818tzxeo.png'
import sway from '../../assets/image/SwitzerlandImage.png'
import boracay from '../../assets/image/BoracayImage.png'
import palawan from '../../assets/image/PalawanImage.png'


const Home = () => {


  return (
    <div className='homeMAinDiv'>
      <section className='Hero'>
        <h1>Let's explore & travel the world</h1>
        <p>Find the best destinations and the most popular stays!</p>
        <SearchFlightsFind />
      </section>
      <section className='Recommended'>
        <h1>RECENT SEARCH</h1>
        <div className='recent'>
          <RecentSearch Flightimg={Flightimg} Flightfrom="SIN" Flightto="LAX" Flightdate="7 sep 2021" />
          <RecentSearch Flightimg={Flightimg} Flightfrom="MY" Flightto="DUB" Flightdate="9 sep 2021" />
        </div>
      </section>
      <section className='prepareForTrip'>
        <p>PREPARE FOR YOUR TRIP</p>
        <Tripsugation sugationimg={Hotelimg} boxbgcolor="rgb(249, 102, 141)" tittle="Hotel" />
        <Tripsugation sugationimg={Ticketimg} boxbgcolor="#ff9b53" tittle="Attractions" />
        <Tripsugation sugationimg={Resturimg} boxbgcolor="#36DA76" tittle="Eats" />
        <Tripsugation sugationimg={Busimg} boxbgcolor="#FDBF00" tittle="Commute" />
        <Tripsugation sugationimg={Taxiimg} boxbgcolor="#4DABFF" tittle="Taxi" />
        <Tripsugation sugationimg={Videoimg} boxbgcolor="#79CA00" tittle="Movies" />
      </section>
      <section className='tripPlans'>
        <h3>PLAN YOUR NEXT TRIP</h3>
        <div className='flex'>
          <h1>Most Popular Destinations</h1>
          <a href="#"> View all destinations</a>
        </div>
        <div className='tripPlan'>
          <Destinations tripname = "Paris" Price = "$699" Tripimg={Tripimg} />
          <Destinations tripname = "Greece" Price = "$1079" Tripimg={greece} />
          <Destinations tripname = "Norway" Price = "$895" Tripimg={norway} />
          <Destinations tripname = "Tuscany" Price = "$1245" Tripimg={tuscany} />
          
        </div>

      </section>
      <section className='tripPlans'>
        <div className='flex'>
          <h1>Recommended Holidays</h1>
          <a href="#"> View all Holidays</a>
        </div>
        <div className='tripPlan'>
          <Recommended holidayimg={Bali} />
          <Recommended holidayimg={sway} />
          <Recommended holidayimg={boracay} />
          <Recommended holidayimg={palawan} />
          
        </div>
      </section>
      <section className='tripPlans'>
        <div className='flex'>
          <h1>Popular Stays</h1>
          <a href="#"> View all Holidays</a>
        </div>
        <div className='tripPlan'>
          <Popularstay tittle="Matterhorn Suites" subtittle="Entire bungalow" price="$574/night" reviews="60 reviews" bannerimg={mountimg}/>
          <Popularstay tittle="Discovery Shores" subtittle="2-story bechfront suite" price="$360/night" reviews="116 reviews" bannerimg={watterimg}/>
          <Popularstay tittle="Arctiv Hut" subtittle="Single deluxe hut" price="$420/night" reviews="78 reviews" bannerimg={arciticimg}/>
          <Popularstay tittle="Lake Louise Inn" subtittle="Entire bungalow" price="$574/night" reviews="60 reviews" bannerimg={lousineimg}/>
        </div>
      </section>
      
    </div>
  )
}

export default Home
