import {NavBar} from './NavBar';

export function Home(props) {

    return (
        <div className = "page">
            <NavBar/>
            <br/>
            <br/>
            <div className="infoBox">
                <center><h1>What is the Entertainment Bank???</h1></center>
                <br/>
                <div className="info">
                    <h4>
                        The Entertainment Bank is a website for you and your friends to visit and find a movie or show to watch. 
                        <br/><br/>Here you can find all of the best streaming entertainment out there. With down to earth ratings and spoiler free plot synopsis.
                        Whether you want to watch a Romantic Comedy or an edge of your seat Thriller you'll always find something that's just right for you.
                        
                    </h4>
                </div>
                <br/>
            
                <div className="info">
                    <h4>
                        The best thing about the entertainment bank is that it's for the community. If you discover something you love go ahead and add it to the bank! 
                        There's nothing better than putting someone else on to a fire show. (wW will not hesitate to delete if you reccomend a trash entry to the entertainment bank). 
                        <br></br>
                        You can search by Genre, Title, and Medium. So have at it!
                    </h4>
                </div>
            </div>
        </div>
    );
  }