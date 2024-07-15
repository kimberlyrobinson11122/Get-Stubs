import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


const About = () => {
    return (
        <div className="card bg-white card-rounded w-50">
          <div className="card-header bg-dark text-center">
            <h1>About Get Stubs</h1>
          </div>
          <div className="card-body m-5"> {/* Adjust padding for content */}
            <h2>This is the About Page.</h2>
            <p>
              This is a placeholder for the "About" page content.
            </p>
          </div>
      </div>
    );
  };
  
  export default About;