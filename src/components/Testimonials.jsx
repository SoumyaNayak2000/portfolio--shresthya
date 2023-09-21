import React from 'react'

const Testimonials = () => {
  return (
    <div id='testimonials'>
        

        <h2>Testimonials</h2>
        <section>
            <TestimonialCard  name={"Mark Zuckerberg "}
          feedback={"You Seems To Be Next Ceo Of Meta."} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"}/>
            <TestimonialCard  name={"Satya Nadella"}
          feedback={"Your Skills Are Unbeatable Join Microsoft."} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/330px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg"}/>
            <TestimonialCard  name={"Sundar Pichai"}
          feedback={"Google Wants To Hire You Drop Your Contact Info."} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/330px-Sundar_Pichai_%282023%29_cropped.jpg"}/>
        </section>
    </div>
  )
}
const TestimonialCard = ({ name, feedback,img }) => (
    <article>
      <img
        src={img}
        alt={name}
      />
      <h4>{name}</h4>
      <p>{feedback}</p>
    </article>
  );

export default Testimonials