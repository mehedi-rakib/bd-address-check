import Information from '@/component/landing/Information';
import Hero from '../component/landing/Hero';
import Sidebar from '../component/landing/Sidebar';
import Youtube from '../component/landing/Youtube';
import BiddingFlowComponent from '@/component/landing/Bidding';

export default function Home() {
  return (
      <>
          <Hero />
          <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                      <Information />
                      <BiddingFlowComponent />
                      <Youtube />
                  </div>
                  <div className="lg:col-span-1">
                      <Sidebar />
                  </div>
              </div>
              
          </div>
      </>
  );
}
