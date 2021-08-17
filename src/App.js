import './App.css';
import profil from "./img/sketchHunSkyWalker.png";
import hobby1 from "./img/yogendrasinghunsplash.jpg";
import hobby2 from "./img/denisejansunsplash.jpg";
import hobby3 from "./img/joannakosinskaunsplash.jpg";

function App() {
  return (
    <body>
      
      <div id = "jumbotron" class="container">
       <div class="row">
         <div class="col-md-4 text-center order-md-2">
           <img src={profil} class="jumbotronImg shadow-lg bg-white"/>
          </div>   

        <div class="col-md-6 offset-lg-1 jumbotronTitle">
        <p class="mb-0">Hello,</p>
        <h2>Good people!</h2>
        <p class="mb-2 font-weight-lighter"> My name is Sarah Handari, 
        you can call me Sarhan. I'm from Bekasi, Indonesia. </p>
        </div></div> 
      </div>

      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 699" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 C 0,700 0,233 0,233 C 69.54871794871795,216.474358974359 139.0974358974359,199.94871794871798 225,223 C 310.9025641025641,246.05128205128202 413.1589743589743,308.6794871794871 497,293 C 580.8410256410257,277.3205128205129 646.2666666666667,183.33333333333337 726,154 C 805.7333333333333,124.66666666666663 899.7743589743591,159.98717948717945 979,187 C 1058.225641025641,214.01282051282055 1122.6358974358975,232.71794871794873 1197,239 C 1271.3641025641025,245.28205128205127 1355.6820512820514,239.14102564102564 1440,233 C 1440,233 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#33334d88" class="transition-all duration-300 ease-in-out delay-150"></path><path d="M 0,700 C 0,700 0,466 0,466 C 98.34358974358975,431.64102564102564 196.6871794871795,397.28205128205127 276,382 C 355.3128205128205,366.71794871794873 415.5948717948718,370.51282051282055 474,415 C 532.4051282051282,459.48717948717945 588.9333333333334,544.6666666666666 678,534 C 767.0666666666666,523.3333333333334 888.6717948717951,416.8205128205129 975,384 C 1061.328205128205,351.1794871794871 1112.3794871794871,392.05128205128204 1184,418 C 1255.6205128205129,443.94871794871796 1347.8102564102564,454.974358974359 1440,466 C 1440,466 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#33334dff" class="transition-all duration-300 ease-in-out delay-150"></path></svg>

      <div class="myhobbies">
       <div id="hobby" class="container">
         <div class="row mb-4">
           <div class="col-md">
             <h3 class="text-center">My Hobbies</h3>
           </div>
         </div>

        <div class="row">
          <div class="col-md">
            <div class="card border-0 bg-transparent mb-3">
              <div class="row">
                <div class="col-md-4">
                  <img src={hobby1} class="card-img" alt="Headphone" title="Photo by Yogendra Singh on Unsplash"/>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-0 pl-3 mt-2 mb-3">
                  <h5 class="card-title">Music</h5>
                  <p class="card-text">Pop, Rock, Hip-hop, Genreless</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md">
            <div class="card border-0 bg-transparent mb-3 float-right">
              <div class="row">
                <div class="col-md-4 order-md-2">
                  <img src={hobby2} alt="hobby" class="card-img" alt="Scenesmovie" title="Photo by Denise Jansun on Unsplash"/>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-0 pr-md-3 pl-3 mt-2 mb-3 text-right">
                    <h5 class="card-title">Movies</h5>
                    <p class="card-text">Action, Sci-Fi, Fantasy, Crime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  

        <div class="row">
          <div class="col-md">
            <div class="card border-0 bg-transparent mb-3">
              <div class="row">
                <div class="col-md-4">
                  <img src={hobby3} alt="hobby" class="card-img" alt="Brush" title="Photo by Joanna Kosinka on Unsplash"/>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-0 pl-3 mt-2 mb-3">
                    <h5 class="card-title">Hand-lettering</h5>
                    <p class="card-text">Script, Decorative, Cursive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
         </div> 
         </div>
    
         <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 599" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,200 0,200 C 49.95465475781518,227.13019580900036 99.90930951563035,254.2603916180007 168,260 C 236.09069048436965,265.7396083819993 322.31741669529373,250.08862933699757 398,219 C 473.68258330470627,187.91137066300243 538.8210237031948,141.3850910340089 608,128 C 677.1789762968052,114.61490896599109 750.3984884919273,134.3710065269667 813,136 C 875.6015115080727,137.6289934730333 927.5850223290965,121.13088285812438 992,141 C 1056.4149776709035,160.86911714187562 1133.2614221916867,217.10546204053588 1210,233 C 1286.7385778083133,248.89453795946412 1363.3692889041567,224.44726897973206 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#33334d88" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 300)"></path><path d="M 0,600 C 0,600 0,400 0,400 C 72.96392992098936,418.9089659910683 145.92785984197872,437.81793198213666 206,424 C 266.0721401580213,410.18206801786334 313.2524905530745,363.63723806252153 392,335 C 470.7475094469255,306.36276193747847 581.0621779457232,295.63311576777744 651,329 C 720.9378220542768,362.36688423222256 750.498797664033,439.8302988663689 808,467 C 865.501202335967,494.1697011336311 950.9426313981451,471.0456887667468 1018,467 C 1085.057368601855,462.9543112332532 1133.730676743387,477.9869460666438 1201,470 C 1268.269323256613,462.0130539333562 1354.1346616283065,431.0065269666781 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#33334dff" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 300)"></path></svg>
    
      <div id="playlist" class="container mb-5">
          <div class="row">
            <div class="col text-center mb-4">
              <h3>My Playlists</h3> 
            </div>
          </div>
        

        <div class="row">
          <div class="col-xl-4 col-md-6 mb-4">
            <iframe src="https://open.spotify.com/embed/playlist/5iT98GkkPUp0xH1xuu1Oi4?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <div class="card shadow border-0">
                <div class="card-body">
                  <h5 class="card-title">Take it easy</h5>
                  <p class="card-text">Join my Collaborative Playlist, feel free to add some good tunes!</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 mb-4">
            <iframe src="https://open.spotify.com/embed/playlist/7M9LVf5ZkNH8tzNzYD57pZ?theme=0" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <div class="card shadow border-0">
                <div class="card-body">
                  <h5 class="card-title">Take it easy</h5>
                  <p class="card-text">The Genreless playlist that's a whole mood.</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      <footer>
        <p>Be Happy &#128522;</p>
      </footer>
    </body>
  );
}

export default App;
