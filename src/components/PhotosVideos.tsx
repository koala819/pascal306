'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Image from 'next/image'

import { EventsDataPicture } from '@/types/models'

export default function PhotosVideos({
  eventsData,
}: {
  eventsData: {
    id: number
    year: number
    title: string
    img: string
    nbrPicture: number
    link: string
  }[]
}) {
  const currentYear = new Date().getFullYear()

  const organizeEventsByYear = (): { [year: number]: EventsDataPicture[] } => {
    const eventsByYear: { [year: number]: EventsDataPicture[] } = {}
    eventsData.forEach((event: EventsDataPicture) => {
      const year = event.year
      if (event.year !== null && event.title !== null) {
        if (eventsByYear[year]) {
          eventsByYear[year].push(event)
        } else {
          eventsByYear[year] = [event]
        }
      }
    })
    return eventsByYear
  }

  const renderAccordionItems = (): JSX.Element[] => {
    const eventsByYear = organizeEventsByYear()
    const accordionItems: JSX.Element[] = []

    // Ajoutez l'item de l'annee courante
    accordionItems.push(
      <AccordionItem
        key={0}
        title={currentYear.toString()}
        className="flex flex-col items-center"
      >
        <div className="w-3/4 mx-auto">
          {eventsByYear[currentYear] ? (
            eventsData.map((event: EventsDataPicture, index: number) => (
              <div key={index}>
                <h2 className="">{event.title}</h2>
                <div
                  onClick={() => {
                    // picturesCount(event.year.toString(), event.title.toString())
                    console.log('click')
                  }}
                >
                  <Image
                    src={event.img}
                    alt={event.title}
                    height={256}
                    width={256}
                  />
                </div>
                <p>{event.nbrPicture} photos</p>
              </div>
            ))
          ) : (
            <div>
              <h2 className="">Rejoignez l'aventure 306 !</h2>
              <h3>Photos a venir !</h3>
            </div>
          )}
        </div>
      </AccordionItem>,
    )

    // Ajoutez l'item des annees precedentes
    for (let i = 1; i <= 2; i++) {
      const year = parseInt((currentYear - i).toString())
      accordionItems.push(
        <AccordionItem
          key={i}
          title={(currentYear - i).toString()}
          className="flex flex-col items-center"
        >
          <div>
            {eventsByYear[year] ? (
              eventsData.map((event: EventsDataPicture, index: number) => (
                <div key={index}>
                  <h2 className="">{event.title}</h2>
                  <div
                    onClick={() => {
                      // picturesCount(
                      //   event.year.toString(),
                      //   event.title.toString(),
                      // )
                      console.log('click')
                    }}
                  >
                    <Image
                      src={event.img}
                      alt={event.title}
                      height={256}
                      width={256}
                    />
                  </div>
                  <p>{event.nbrPicture} photos</p>
                </div>
              ))
            ) : (
              <h3>Aucune photos pour le moment !</h3>
            )}
          </div>
        </AccordionItem>,
      )
    }

    return accordionItems
  }

  return (
    <div>
      {/* bandeau supp */}
      <div className="flex flex-col justify-center w-full bg-[url('/images/bandeauEvent.png')] relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-center text-text-dark mt-10 z-10">
          Plongez dans l'Action : Galerie Photos et Vidéos
        </h1>
        <p className="text-center text-text-dark my-10 w-1/2 z-10">
          Bienvenue dans notre galerie dédiée aux moments forts de notre
          communauté automobile. Ici, les images prennent vie et les vidéos
          captent l'énergie palpitante de chaque événement du Club 306.
          Découvrez l'essence même de nos rassemblements, explorez les détails
          qui rendent chaque rencontre unique, et ressentez la passion qui anime
          notre communauté.
        </p>
      </div>
      {/* galerie */}
      <div className="columns-3 py-3 flex">
        <Accordion
          defaultExpandedKeys={[[0].toString()]}
          className="text-center"
        >
          {eventsData.length > 0 ? (
            renderAccordionItems()
          ) : (
            <AccordionItem
              key="no-data"
              title="Aucune photos pour le moment !"
              className="flex flex-col items-center"
            >
              <h3>Aucune photos pour le moment !</h3>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  )
}
