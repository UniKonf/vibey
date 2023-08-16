
import { FC } from 'react';

const Features: FC = () => {
  return (
    <>
    <div className="py-6 sm:py-8 lg:py-12 bg-black">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-white text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our competitive advantage</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Discover a new level of convenience with our event listing website. Our advanced search and filters allow you to effortlessly find events that match your interests, ensuring you never miss out on the experiences you love. </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
              <p className="text-gray-500"><span className="text-black">Social Media Integration:</span> Allowing users to share and promote events easily through social media integration increases event visibility and attracts more attendees.</p>
            </div>
          </div>
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">Security</h3>
              <p className="text-gray-500"><span className="text-black">User Reviews and Ratings:</span> Including reviews and ratings from previous attendees helps users make informed decisions about which events to attend, fostering trust in the website's recommendations.</p>
            </div>
          </div>
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">Cloud</h3>
              <p className="text-gray-500"><span className="text-black">Localized Events:</span> Highlighting local events based on a user's location improves relevance and encourages engagement within their community.</p>
            </div>
          </div>
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">Speed</h3>
              <p className="text-gray-500"><span className="text-black">Personalized Recommendations:</span> Implementing an algorithm that suggests events based on user preferences and past activity enhances user engagement and satisfaction.</p>
            </div>
          </div>
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">Support</h3>
              <p className="text-gray-500"><span className="text-black">Advanced Search and Filters:</span> Providing users with detailed search options and filters enables them to quickly find events tailored to their preferences, improving user experience.</p>
            </div>
          </div>
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
              <p className="text-gray-500"><span className="text-black">Event Organizer Tools:</span> Offering comprehensive tools for event organizers, such as ticketing, promotion, and analytics, can attract event planners and boost the website's reputation.</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  );
};

export default Features;
