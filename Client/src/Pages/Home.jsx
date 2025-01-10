
import BlogSection from '../Components/BlogSection';
import BooksMarquree from '../Components/BooksMarquree';
import RecentQueries from '../Components/RecentQueries';
import Slider from '../Components/Slider';
import TrendingNow from '../Components/TrendingNow';

const Home = () => {
    return (
        <div>
           <Slider/>
          
          <div>
            <RecentQueries/>
            <TrendingNow/>
            <BlogSection/>
            <BooksMarquree/>
          </div>

        </div>
    );
};

export default Home;