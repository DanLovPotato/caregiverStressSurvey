import React from "react";
import { useNavigate } from 'react-router-dom';
import storypage_image from './img/storypage_image.png';
import story_Pie1 from './img/story_Pie1.png';
import story_Pie2 from './img/story_Pie2.png';
import story_bar1 from './img/story_bar1.png';
import story_icon1 from './img/story_icon1.png';
import story_icon2 from './img/story_icon2.png';
import story_icon3 from './img/story_icon3.png';
import story_bird from './img/story_bird.png';
import story_1 from './img/story_1.png';
import story_2 from './img/story_2.png';
import story_3 from './img/story_3.png';
import arrowLeft from './img/arrow.left.png';

function StoryPage() {
   const navigate = useNavigate();

   const goBack = () => {
    navigate(-1);
   }

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://www.careyaya.org/')
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };
  


  return (
    <div className="container" style={{ backgroundColor: '#ECF6FF',  paddingRight: '0', paddingLeft: '0', paddingTop: '0', overflowY: 'scroll'}}>
      <div className="header" style={{ margin: '0' }}>
        <div style={{ height: '110px', backgroundColor: '#ECF6FF', position: 'relative'}}>
          <button onClick={goBack} style={{ backgroundImage: `url(${arrowLeft})`, cursor: 'pointer', width: '60px', height: '60px', position: 'absolute', left: '42px', top: '26px', border: 'none', padding: '0', backgroundColor: '#ECF6FF' }}>
          </button>
        </div>
        <img src={storypage_image} alt="story page header image" />
      </div>

      <div className="story-content" style={{ display: 'flex', flexDirection: 'column',  marginTop: '20px', position: 'relative' }}>
        <h2 style={{ fontSize:'64px', textAlign:'left', paddingLeft:'91px', paddingBottom: '149px'}}>
          Caregivers are often marginalized in<br/> the society.
        </h2>
        <img src={story_1} style={{ width: '350px', position: 'absolute', top: '200px', zIndex: 0 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 1 }}>
          <h3 style={{ fontSize:'48px', textAlign:'left', paddingLeft:'91px', paddingRight:'71px', marginTop:'0' }}>
            The Financial Struggle
          </h3>
          <p style={{ flex: '1', textAlign: 'right', fontSize:'32px', textAlign:'left', marginTop:'0', lineHeight: '1.5', paddingLeft: '40px' }}>
            Almost half of all caregivers make less <br/> than $50,000 a year, and about 1 in 10 <br/> live on less than $15,000. They spend<br/> their days helping others but often<br/> don't have enough for their own needs.
          </p>
        </div>
      </div>
      <div className="story-content" style={{paddingTop: '64px', paddingBottom: '204px'}}>
        <img src={story_Pie1} style={{ width:'1257px', }}/>
      </div>

      <div className="story-content" style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px', marginLeft: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
          <img src={story_2} style={{ width: '400px', position: 'absolute', right: '0', top: '-200px', zIndex: 0 }} />
          <p style={{ flex: '1', textAlign: 'left', fontSize:'32px', textAlign:'left', marginTop:'0', marginLeft:'91px', lineHeight: '1.5' }}>
          Another big challenge caregivers face<br/> is burnout, with nearly 42% reporting<br/> high levels of stress and exhaustion.<br/> This shows that besides financial<br/> struggles, the emotional and physical<br/> demands of caregiving take a toll too.
          </p>
          <h3 style={{ fontSize:'48px', textAlign:'left', paddingLeft:'71px', marginTop:'0', marginRight:'201px', zIndex: 1 }}>
          Caregiver Burnout
          </h3>
        </div>
      </div>
      <div className="story-content" style={{paddingTop: '64px', paddingBottom: '200px'}}>
        <img src={story_Pie2} style={{ width:'1257px' }}/>
      </div>

      <div className="story-content" style={{ display: 'flex', flexDirection: 'column', padding: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
          <img src={story_3} style={{ width: '400px', position: 'absolute', top: '-250px', zIndex: 0 }} />
          <h3 style={{ fontSize:'48px', textAlign:'left', paddingLeft:'100px', paddingRight:'71px', marginTop:'0', zIndex: 1, lineheight: '1.5' }}>
          Caring While Bearing<br/> Their Own Burdens
          </h3>
          <p style={{ flex: '1', textAlign: 'right', fontSize:'32px', textAlign:'left', marginTop:'0', lineHeight: '1.5', paddingLeft: '40px' }}>
          Caregivers often face a unique and<br/> difficult situation: many are older<br/> adults or people with health issues<br/> themselves, yet they are tasked with<br/> caring for others. Around 60% need<br/> help due to surgery, mobility issues, or<br/> simply aging.
          </p>
        </div>
      </div>
      <div className="story-content" style={{paddingTop: '64px', paddingBottom: '190px'}}>
        <img src={story_bar1} style={{ width:'1257px' }}/>
      </div>

    <div className="story-content" style={{ backgroundColor:'#6AADEB', height:'528px'}}>
      <h3 style={{ fontSize: '64px', paddingTop: '120px', textAlign: 'left', marginLeft: '99px', lineheight: '1.5'}}>
      But many of them don't realize they've<br/> placed their own self-care at a really<br/> low priority.
      </h3>
    </div>

    <div className="story-content" style={{ marginTop: '162px', marginLeft: '73px', marginRight: '73px', marginBottom: '162px',display: 'flex', flexDirection: 'row'}}>
      <div className="column" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src={story_icon1} style={{ width: '196px', marginBottom: '22px'}}/>
        <h3 style={{ fontSize: '64px', margin: '0'}}>41 million+</h3>
        <p style={{ fontSize: '32px'}}>Americans have provided<br/> unpaid care in the<br/> last 12 months</p>
      </div>
      <div className="column" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src={story_icon2} style={{ width: '196px', marginBottom: '22px'}}/>
        <h3 style={{ fontSize: '64px', margin: '0'}}>40% - 70% </h3>
        <p style={{ fontSize: '32px'}}>Family caregivers report<br/> clinical symptoms of<br/> depression</p>
      </div>
      <div className="column" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src={story_icon3} style={{ width: '196px', marginBottom: '22px'}}/>
        <h3 style={{ fontSize: '64px', margin: '0'}}>23%</h3>
        <p style={{ fontSize: '32px'}}>Report caregiving has<br/> negatively impacted their<br/> physical health</p>
      </div>
    </div>

    <div className="story-content" style={{ backgroundColor:'#6AADEB', height:'600  px'}}>
      <h3 style={{ fontSize: '64px', paddingTop: '120px', textAlign: 'left', marginLeft: '99px', lineheight: '1.5'}}>
      That's why we emphasize the mental<br/> health of caregivers and urge<br/> everyone to recognize the importance<br/> of self-care.
      </h3>
    </div>


    <div className="story-content" style={{ marginTop: '85px', marginLeft: '73px', marginRight: '73px', marginBottom: '42px',display: 'flex', flexDirection: 'row'}}>
      <div className="column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '97px', marginLeft: '98px'}}>
        <img src={story_bird} style={{ width: '351px', marginBottom: '22px'}}/>
      </div>
      <div className="column" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '820px'}}>
        <h3 style={{ fontSize: '64px', margin: '0'}}>Share Our Story</h3>
        <p style={{ fontSize: '32px', lineHeight: '1.5'}}>If our story has resonated with you<br/> and you believe in the value this test can bring, we warmly invite you to share it with your circle. Your support in sharing our message helps us reach more people who can benefit from our work.</p>
        <div className="buttons" style={{ display: 'flex', flexDirection: 'row', width: '604px', height: '71px', margin: '0', backgroundColor: '#C4E1F2', borderRadius: '8px'}}>
          <p style={{ width: '285px', display: 'flex', flexDirection: 'column', color: '#4B4B4B', fontWeight: 'bold', paddingLeft: '26px', paddingRight: '66px', fontSize: '22px'}}>https://www.careyaya.org/</p>
          <button onClick={handleCopyLink} style={{ cursor: 'pointer',display: 'flex', flexDirection: 'column', width: '227px', fontSize: '24px', fontWeight:'bold', color:'#263238', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#659EC0', border: 'none'}}>COPY LINK</button>
        </div>
      </div>
    </div>
    </div>

  );
}


export default StoryPage;

