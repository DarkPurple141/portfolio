export const ImageTiles = ({
  staticAssetsUrl = 'https://static.alhinds.com',
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="h-48">
        <img
          className="object-cover w-full h-full object-right"
          alt="Alex interviews Darren Lapthorne in his time as a journalist."
          src={`${staticAssetsUrl}/img/cycling.jpg`}
        />
      </div>
      <div className="h-48">
        <img
          className="object-cover w-full h-full"
          alt="Alex at the Tour de France."
          src={`${staticAssetsUrl}/img/profile_landscape.jpg`}
        />
      </div>
      <div className="h-48">
        <img
          className="object-cover w-full h-full object-left"
          alt="Alex at a playground. A regular spot of any dad with young kids."
          src={`${staticAssetsUrl}/img/profile_alt.jpg`}
        />
      </div>
      <div className="h-48">
        <img
          className="object-cover w-full h-full object-left"
          alt="Alex teaches the concept of abstract data types to a class of students."
          src={`${staticAssetsUrl}/img/teaching.jpg`}
        />
      </div>
      <div className="h-48">
        <img
          className="object-cover w-full h-full"
          alt="Alex hosting a podcast at SBS."
          src={`${staticAssetsUrl}/img/podcast.jpg`}
        />
      </div>
      <div className="h-48">
        <img
          className="object-cover w-full h-full"
          alt="Alex working with others at Atlassian."
          src="http://localhost:3030/img/working.jpg"
        />
      </div>
    </div>
  )
}
