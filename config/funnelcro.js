
import { faAppStore, faGithub, faGooglePlay, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faChartSimple, } from '@fortawesome/free-solid-svg-icons';
// import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export const funnelcro_content = {
  content: ` 
  <h2>Objective</h2>
  <p>This project materialized after my team made an observation over multiple previous CRO experiments, that a few distinct user patterns were emerging. We were noticing the following user types and associated behavior patterns:</p>
  <ul>
      <li>Bouncers (users who don’t convert)</li>
      <li>Clickers (users who convert)</li>
  </ul>
  <p>Although these user segments are obvious (anyone who doesn’t convert is a bouncer), they were important for us to distinguish because we needed to intentionally optimize for the non-converter behavior pattern. It was clear in our past winning experiments that we had optimized for the Clickers user segment well, but were missing the mark on Bouncers. To approach this problem, we needed a clearer view of the Bouncers and their behavior patterns: Did they spend time on the page and leave, or did they leave right away? If they did spend time on the page, what were they doing?</p>

  <h2>Deliverables</h2>
  <ul>
      <li><a href="#research">Research</a></li>
      <li><a href="#user-survey">User Survey</a></li>
      <li><a href="#findings">Findings</a></li>
      <li><a href="#test">A/B Test</a></li>
      <li><a href="#recommendation">Recommendation</a></li>
  </ul>

  <h2 id="research">Research</h2>
  <p>To approach this issue, I gathered data from Google Analytics and a user survey.</p>

  <h3>Google Analytics data</h3>
  <p>Using GA4 data, I grouped users into segments depending on events in their session. I utilized Google Tag Manager event tracking and GA4 custom dimensions I had set up previously:</p>
  <ul>
      <li>Scroll tracking, using Google Tag Manager’s default scroll trigger</li>
      <li>Ad visibility, using Element Visibility triggers</li>
      <li>Ad click, using click listener triggers</li>
  </ul>

  <h3>User Survey</h3>
  <p>I also put together a proposal for a user survey. This was the first survey we had run on this domain, so I needed to get explicit stakeholder approval. My proposal included the project background, goal, proposed survey design, and supporting data.</p>
  <p>After gaining approval, I collaborated with a UX researcher to design a SurveyMonkey survey asking users if they were able to find the information they were looking for. To mitigate any negative impact on the Clickers user segment, we ran two surveys with triggers aimed at the Bouncers:</p>
  <ol>
      <li>Time-delayed Survey, displayed after 20 seconds</li>
      <li>Exit-intent Survey, triggered when the user moves to exit the browser</li>
  </ol>

  <h2 id="findings">Research Findings</h2>
  <p>The survey results showed that users' primary pain point is missing information. They were frustrated that the article did not contain key information that they expected, naturally leading to a bounce instead of a conversion.</p>
  
  <p>After combining the survey data with GA4 data, a distinct pattern emerged: Bouncers are scrolling quickly, spending less than 20 seconds on the page, and are not converting. These are roughly 30% of users.</p>

  <img src="scroll.png" alt="Scroll Behavior">

  <p>The next question is: How can we capture the bouncers' attention before they leave?</p>

  <h2 id="test">A/B Test Related Post widget</h2>
  <p>I designed an idea for a Related Posts popup. This would serve a dual purpose of capturing the user’s attention at a key point in the funnel and offering them the information they are presumably missing.</p>

  <strong>Hypothesis:</strong> If we can capture the user’s attention at key point in the funnel and offer relevant information via a related posts popup, then users will continue in our funnel and convert.

  <img src="widget.png" alt="Related Posts Popup">

  <h3>Proof-of-Concept Test Details</h3>

  <strong>Scope:</strong>
  <ul>
      <li>To reduce the scope, we will run a very limited experiment with only one article. The article will have a high volume of traffic with diverse traffic sources.</li>
      <li>No dev work needed upfront:
          <ul>
              <li>Related posts will be hand-picked for relevancy</li>
              <li>Popup will be created and deployed through a third-party tool and managed through their platform</li>
          </ul>
      </li>
  </ul>

  <strong>Design:</strong>
  <ul>
      <li>Experiment Length: 7 days</li>
      <li>MDE: 8%</li>
      <li>Power: 95%</li>
      <li>Confidence: 95%</li>
      <li>Sample size: x,xxx sessions</li>
      <li>Number of variants: 2 (Control and Popup)</li>
  </ul>

  <strong>Success Criteria:</strong> Revenue KPI deltas must be greater than 8% to detect a significant effect.

  <h2 id="results">Experiment Results</h2>
  <p>Ultimately, the data showed that we can’t detect any effect over the control towards the negative or positive: Revenue KPI deltas were below the defined MDE of 8%.</p>

  <p>Popup data: The popup had a very low CTR (&lt;5%), but intent was high in the users who did click on a related post. In fact, after the user clicked on a related post, they exhibited behaviors similar to Clickers:</p>
  <ul>
      <li>Conversions on Related Posts were higher than average</li>
      <li>Scroll depth on Related Posts was lower than average</li>
      <li>Users who converted on a Related Post did so within 20 seconds</li>
  </ul>

  <h2 id="looking-forward">Looking forward</h2>
  <p>We planned to expand this test on a larger scale. If we increase popup impressions by rolling this out on more pages and sustain the high conversion rate on click-through posts, then we could generate significant total revenue lift.</p>`,
}