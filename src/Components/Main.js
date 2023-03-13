import res from "../"
function Main() {
    return (
        <div className="mid">

            <div className="mainPart">
                <h1 className="fl">Your Awesome Business Theme</h1>
                <div className="para">
                    <p className="f2">Theme colors contain six accent colors, and three other general styles - Dark, Light, and Background. Under Preview, you can see how the colors look before you settle on your color combination.</p>
                </div>
                <div className="btnDiv">
                    <button className="b1">READ MORE</button>
                </div>
            </div>

            <div className="features">
                <h1 className="featuresHeading">Our Features</h1>
                <div className="icons">
                    <div className="i1">
                    <img className="logo" src="https://th.bing.com/th/id/R.eaaa6ac937c27f38e9c1ecd70ffda928?rik=XnzOKzoK0VI61A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_365376.png&ehk=AolkEvTX6YT6S0s2OjdSay41eLj3xZar98r%2bOkBfSsI%3d&risl=&pid=ImgRaw&r=0"/>    
                    <h2 className="fea">Fully Responsive</h2>
                    <p>lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry</p>
                    <a href="">Read More</a>                    
                    </div>
                    <div className="i1">
                    <img className="logo" src="https://logodix.com/logo/649370.png"/>    
                    <h2 className="fea">Trusted Author</h2>
                    <p>lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry</p>
                    <a href="">Read More</a>
                    </div>
                    <div className="i1">
                    <img className="logo" src="https://th.bing.com/th/id/R.033fdb2bc18a4dcc61b673b7d7bfc12e?rik=4%2bHFkPddjRqmGQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f09%2fRecycle.png&ehk=%2fZFQB8Bt1lOFKqB9ay4I4DFz4cBYCHaBzqo4feXUgD8%3d&risl=&pid=ImgRaw&r=0"/>    
                    <h2 className="fea">Reusable Elements</h2>
                    <p>lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry</p>
                    <a href="">Read More</a>
                    </div>
                </div>
            </div>
            <div className="fontIcons">
                <img src=" https://www.wallpaperuse.com/wallp/73-736441_m.jpg" className="wideBackground"/>
               <div className="iconCard"><i class="fa-solid fa-trophy fi"></i>
                    <h1 className="white">22</h1>
                    <p className ="white miniPara">Awards Winning</p>
               </div>
               <div className="iconCard"><i class="fa-solid fa-suitcase fi"></i>
                    <h1 className="white">22</h1>
                    <p className ="white miniPara">Finished Projects</p>
               </div>
               <div className="iconCard"><i class="fa-solid fa-car fi"></i>
                    <h1 className="white">22</h1>
                    <p className ="white miniPara">Products Sold</p>
               </div>
               <div className="iconCard"><i class="fa-brands fa-twitter"></i>
                    <h1 className="white">22</h1>
                    <p className ="white miniPara">Twitter Fans</p>
               </div>
            </div>
        </div>

    );
}
export default Main;