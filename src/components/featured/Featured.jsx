import './Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/98/reno.jpg?w=700&h=500&s=1" className='featuredImg' alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.travelandleisure.com/thmb/ZWRnRO5l3sygiJvD8LH7B2drKqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/downtown-austin-texas-ATXTHINGS0122-972bddebf6c94ba6a192bfe408a3c779.jpg" className='featuredImg' alt="" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>203 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.travelandleisure.com/thmb/bggU8kobL7GC0jIaY7g7XV_KEI4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/skyline-river-austin-texas-ATXTHINGS0122-4f095568988a408b8eadf93c530f1344.jpg" className='featuredImg' alt="" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
