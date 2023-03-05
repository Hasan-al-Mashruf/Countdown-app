import { useState, useEffect } from 'react'
import './App.css'
import ImageComponent from './ImageComponent/ImageComponent'



function App() {

  const [bgImage, setbgImage] = useState('')
  const [countdownName, setCountdownName] = useState('Countdown App')

  const [month, setMonth] = useState('March')
  const [day, setDay] = useState('03')
  const [year, setYear] = useState('2023')
  const [countdown, setCountdown] = useState({ day: '00', hour: '00', minute: '00', second: '00' });


  const [selectedDate, setSelectedDate] = useState('')

  const allmonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const gettingDate = (event) => {
    const fullDate = event.target.value
    setSelectedDate(fullDate)
    setDay((fullDate).split("-")[2])
    setYear((fullDate).split("-")[0])

    let gettingMonth = (fullDate).split("-")[1]

    if (gettingMonth > 9) {
      setMonth(allmonths[gettingMonth - 1])
    } else {
      let updateMonth = gettingMonth.split("")[1]
      setMonth(allmonths[updateMonth - 1])
    }
  }

  const gettingName = (event) => {
    setCountdownName(event.target.value)
  }

  useEffect(() => {
    const eventDate = new Date(`${month} ${day}, ${year} 00:00:00`).getTime()
    const today = new Date().getTime()
    const remainingtime = eventDate - today

    const interval = setInterval(() => {

      if (remainingtime < 0) {
        clearInterval(interval)
        setCountdown({ day: '00', hour: '00', minute: '00', second: '00' })
        return
      }

      let days = Math.floor(remainingtime / (1000 * 60 * 60 * 24))
      let hours = Math.floor(remainingtime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      let minutes = Math.floor(remainingtime % (1000 * 60 * 60) / (1000 * 60))
      let seconds = Math.floor(remainingtime % (1000 * 60) / 1000)

      if (days < 10) {
        days = `0${days}`
      }
      if (hours < 10) {
        hours = `0${hours}`
      }
      if (minutes < 10) {
        minutes = `0${minutes}`
      }
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      setCountdown({ day: days, hour: hours, minute: minutes, second: seconds })
    }, 1000)

    return () => clearInterval(interval);
  }, [countdown])

  return (
    <div>
      <h2 className='text-center text-3xl my-5'>{countdownName}</h2>
      <div style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='py-5 mt-5'>
        <div className='App text-center md:w-3/6 mx-auto w-5/6' >
          <div className='p-6 border-2 md:w-5/6 mx-auto mt-8 mb-7 rounded-sm'>
            <input type="date" onChange={gettingDate} value={selectedDate} className='p-3 rounded-md bg-yellow-600 mr-3' />
            <input type="text" onChange={gettingName} placeholder='Countdown name' className='p-3 rounded-md bg-yellow-600 ' />
          </div>
          <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
            <span className='text-2xl bg-yellow-600 p-3 rounded-sm'>{countdown?.day}<span className='block text-xl'>Days</span></span>

            <span className='text-2xl bg-yellow-600 p-3 rounded-sm'>{countdown?.hour}<span className='block text-xl'>Hour</span></span>

            <span className='text-2xl bg-yellow-600 p-3 rounded-sm'>{countdown?.minute}<span className='block text-xl'>Minutes</span></span>

            <span className='text-2xl bg-yellow-600 p-3 rounded-sm'>{countdown?.second}<span className='block text-xl'>Seconds</span></span>
          </div>
        </div>

        <ImageComponent setbgImage={setbgImage} />
      </div>
    </div>
  )
}

export default App

