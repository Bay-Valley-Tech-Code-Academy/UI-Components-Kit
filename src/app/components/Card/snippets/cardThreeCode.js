const cardThreeCode =
`
export default function CardThree() {
  const testimonials = [
    {
      name: 'Joe Adams',
      feedback: 'This is great!',
      pic: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
    },
    {
      name: 'John Smith',
      feedback: 'I love this!',
      pic: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Feedback</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <img
                src={testimonial.pic}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
`

export default cardThreeCode;