import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      text: "Maneet captured our wedding day perfectly! Every moment was beautifully documented, and the photos exceeded our expectations. Highly recommended!",
      name: "Priya & Rohan",
      event: "Wedding",
      rating: 5,
    },
    {
      id: 2,
      text: "Our pre-wedding shoot at Jim Corbett was magical. Maneet's creative vision and professionalism made us feel comfortable throughout the session.",
      name: "Anjali & Vikram",
      event: "Pre-Wedding Shoot",
      rating: 5,
    },
    {
      id: 3,
      text: "The corporate event photography was exceptional. Maneet delivered high-quality images that perfectly captured the essence of our company gathering.",
      name: "Rajesh Kumar",
      event: "Corporate Event",
      rating: 5,
    },
    {
      id: 4,
      text: "Amazing work on our destination wedding! The photos tell our love story beautifully. Worth every penny and more!",
      name: "Simran & Arjun",
      event: "Destination Wedding",
      rating: 5,
    },
    {
      id: 5,
      text: "Maneet's drone photography added a unique perspective to our outdoor wedding. The aerial shots are absolutely stunning!",
      name: "Neha & Kartik",
      event: "Wedding Photography",
      rating: 5,
    },
    {
      id: 6,
      text: "Professional, punctual, and passionate about his work. Our family photoshoot was a wonderful experience with beautiful results.",
      name: "The Sharma Family",
      event: "Family Photography",
      rating: 5,
    },
    {
      id: 7,
      text: "The maternity photoshoot was handled with such care and creativity. We treasure these memories forever!",
      name: "Deepika & Arun",
      event: "Maternity Shoot",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the couples and families who trusted us with their precious moments
          </p>
        </motion.div>

        {/* Horizontal Scrollable Reviews */}
        <div className="overflow-x-auto pb-4">
          <motion.div 
            className="flex space-x-6 w-max"
            initial={{ x: 0 }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-80 flex-shrink-0"
              >
                <Card className="h-full elegant-shadow hover:shadow-lg transition-luxury border-0">
                  <CardContent className="p-6">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{review.text}"
                    </p>

                    {/* Client Info */}
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">
                        {review.name}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {review.event}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Swipe to see more reviews →
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;