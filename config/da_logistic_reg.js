
import { faAppStore, faGithub, faGooglePlay, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faChartSimple, } from "@fortawesome/free-solid-svg-icons";
// import ReactMarkdown from "react-markdown";
import Image from "next/image";

export const da_logistic_reg_content = {
    content: `
    <div className="mb-5">
	<h3 className="mb-3">
	Objective</h3>
	<p>
	Our client wants to identify key predictors of whether a user will convert (purchase a product) so they can optimize their marketing campaign strategies and website conversion funnel.				</p>
	<p>
	In particular, they want to understand:</p>
					<p>
	<ul>
						<li>
	optimal target audience</li>
						<li>
	best time of year to ramp up campaigns for maximum ROI</li>
					</ul>
	</p>
					<p>
	In addition to this analysis, they also want an operational dashboard to monitor performance as they start fine-tuning their strategies based on these findings.</p>
				</div>
				<h3 className="mb-3">
	Deliverables</h3>
				<div className="list-group mb-5">
					<a href="#data" className="list-group-item list-group-item-action">
						<FontAwesomeIcon icon={faAngleRight} size="1x" />
	  Data Exporation </a>
					<a href="#tableau" className="list-group-item list-group-item-action">
						<FontAwesomeIcon icon={faAngleRight} size="1x" />
	  Tableau</a>
				</div>
				<h3 className="mb-3" id="data">
	Step 1: Data Exploration an Analysis</h3>
				<p>
	In this section of the project, I conducted exploratory data analysis, data cleaning, and evaluated 4 machine learning models before deciding that Logistic Regression was the optimal model to predict key features of conversions. Although the fit was not particularly strong, the accuracy and specificity was such that we could identify patterns in what features may be indicative of conversion.			</p>
	<p>
					These key features were: Returning Users, Special Days, Duration spent on product pages, and specific months of the year surrounding holidays. In other words, if a user has visited the client’s site multiple times and is visiting during a holiday period, they are more likely to convert.	
	</p>
	<p>
					This conclusion is not ground breaking: it stands to reason that a user who is familiar with the product will visit on a holiday during a special promotion to purchase the product. The more important information this model help us understand is what’s not important. Noteably, operating system, browser and region are not key to the likelihood a user will purchase a product.			</p>
	<p>
					This insight gives us direction into building an operational and insightful Tableau dashboard for the client as they begin optimizing their campaigns and strategies for the next year.			</p>
                    
                    <div className="text-center mt-4">
                    <a className="btn btn-primary my-1 mx-3 mb-5" href='https://github.com/krista-lowry/data-analysis/blob/main/r-code-markdown.ipynb'>
                                Open R Code in Git
                            </a>
                </div>
				<h3 className="mb-3" id="tableau">
	Step 2: Tableau</h3>
				<p>
	Given the client’s objective to determine the optimal target audience and time of year, I built a Tableau dashboard to show key performance indicator performance month-over-month, during the week and over holiday periods.			</p>
	<p>
					The dashboard features indicators of whether a particular segmentation is performing above or below the aggregate average conversion rate, and allows for in-depth analysis of new vs returning visitor performance through filter parameter selection.			</p>
	<p>
	</div>
					Although we know that operating system, region and browser are not particularly important to constructing an optimal target audience, we can use these datapoints to construct a view of where the user is coming from and what technology they are using. The user segments tab shows sessions and conversion rates by each dimension and indicates where conversion rates are falling below average, so that the client can investigate and resolve any potential user painpoints.			</p>
	<p>
					Next steps:				<ul>
	<li>
						Identify and present specific strategies the client can take in the next holiday season to maintain and improve conversion rates in their key returning uesrs market, and how they can increase conversion volume from new users.				</li>
	</ul>
	</p>
    <div className="text-center mt-4">
    <a className="btn btn-primary my-1 mx-3 mb-5" href='https://public.tableau.com/app/profile/krista.lowry/viz/OnlineShopperIntent-TableauDash/Performance'>
                Open Dashboard in Tableau Public
            </a>
</div>
			</div >
	`,
}