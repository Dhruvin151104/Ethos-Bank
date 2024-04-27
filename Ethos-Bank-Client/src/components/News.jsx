import React from "react";
import { useState, useEffect } from "react";
import noIMG from "../assets/newsUnavailable.jpg";
import Spinner from "./Spinner";
import axios from "axios";

function News() {
  const [news, setnews] = useState({
    articles: [],
    cardNumber: 1,
    isLoading: true,
    status: null,
  });
  const card = (props) => {
    const handleError = (e) => {
      e.target.src = noIMG;
    };
    return (
      <div
        key={props.key}
        className="h-full min-w-[33.333%] flex justify-center items-center"
      >
        <div className="h-[98%] w-[75%] mx-auto rounded-3xl overflow-hidden bg-sky-50 shadow-inner outline outline-[3px] outline-sky-500">
          <div className="h-[45%] w-full">
            <img
              src={props.urlImg}
              alt="Image"
              onError={handleError}
              className=" object-fill h-full w-full"
            />
          </div>
          <div className="h-[45%] w-full py-2 px-5 overflow-hidden flex flex-col items-center gap-2">
            <p className=" text-base font-medium">{props.title}</p>
            <p className="text-sm font-light line-clamp-4">
              {props.description}
            </p>
          </div>
          <div className="h-[15%] w-full px-5 text-md font-medium py-2">
            <a
              href={props.url}
              target="_blank"
              className=" hover:text-sky-600 duration-200 ease-linear"
            >
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await fetch(import.meta.env.VITE_NEWS_API)
      //   console.log(response)
      //   if (response.ok) {
      //     const data = await response.json()
          // setnews({
          //   ...news,
          //   articles: data.articles,
          //   isLoading: false,
          //   status: data.status,
          // })
      //   } else {
      //     setnews({ ...news, isLoading: false,status: "error" })
      //   }
      // } catch (error) {
      //   console.log(error)
      //   setnews({ ...news, isLoading: false,status: "error" })
      // }
      {
        import.meta.env.VITE_NEWS_API;
      }
      const articles = [
        {
          source: {
            id: null,
            name: "Moneycontrol",
          },
          author: "S.N.Thyagarajan",
          title:
            "Go First case: DGCA directed to process deregistration of leased planes, airline may lose all leased... - Moneycontrol",
          description:
            "Go First stares at the risk of losing all 54 of its leased aircraft unless the company's resolution professional secures a stay within five working days.",
          url: "https://www.moneycontrol.com/news/business/go-first-delhi-hc-lessors-plea-dgca-deregister-aircraft-12708830.html",
          urlToImage:
            "https://images.moneycontrol.com/static-mcnews/2023/05/Go-First-crisis-gfx.jpg",
          publishedAt: "2024-04-26T12:03:59Z",
          content:
            "In a major setback for Go First, the Delhi High Court has directed civil aviation regulator Director General of Civil Aviation (DGCA) to process the deregistration applications of aircraft leased by … [+2665 chars]",
        },
        {
          source: {
            id: null,
            name: "Motoroctane.com",
          },
          author: "Swaraj Acharekar",
          title:
            "Mahindra Thar 5-Door To Get This XUV700 Feature - MotorOctane",
          description:
            "The next big launch for Mahindra is going to be the Thar 5-door and in a recent spy it is spotted with a premium feature",
          url: "https://motoroctane.com/news/271816-mahindra-thar-5-door-to-get-this-xuv700-feature",
          urlToImage:
            "https://motoroctane.com/wp-content/uploads/2024/04/2024-mahindra-thar-adas-sunroof-spied-3-899x900.jpg",
          publishedAt: "2024-04-26T09:49:00Z",
          content:
            "The Thar 5-door has been one of the most talked about SUVs in recent times. We last saw such hype on another Mahindra product which was the XUV700. Mahindra seems to be copying this same formula on t… [+2064 chars]",
        },
        {
          source: {
            id: null,
            name: "NDTV News",
          },
          author: null,
          title:
            "Rs 1,000 Turned To Rs 20 Lakh In A Day? Trader's Big Claim On Kotak Bank - NDTV",
          description:
            "The \"21 din me paisa double\" dialogue from 'Phir Hera Pheri' has become a quintessential meme template. But a trader's move in the share market two days ago has likely topped it by a multifold.",
          url: "https://www.ndtv.com/business-news/rs-1-000-turned-to-rs-20-lakh-in-a-day-traders-big-claim-on-kotak-bank-5527944",
          urlToImage:
            "https://c.ndtvimg.com/2024-04/p2u7g2lo_kotak-bank-_625x300_26_April_24.jpg",
          publishedAt: "2024-04-26T09:06:45Z",
          content:
            "Kotak Mahindra Bank's share crash multiplied the trader's money through the put option. (File)\r\nThe \"21 din me paisa double\" dialogue from 'Phir Hera Pheri' has become a quintessential meme template.… [+1789 chars]",
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "HT News Desk",
          title:
            "Nawaz Modi accuses Gautam Singhania: Uses Raymond as ‘his personal fiefdom', 'Bhindi bazaar' tactics - Hindustan Times",
          description:
            'Nawaz Modi said, “They are (using) invalid grounds for my removal. Has the major shareholder promotor lost his confidence in me for doing my job?"',
          url: "https://www.hindustantimes.com/business/nawaz-modis-accuses-gautam-singhania-uses-raymond-as-his-personal-fiefdom-bhindi-bazaar-tactics-101714115379687.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/04/26/1600x900/gautam_1699866114873_1714119188003.png",
          publishedAt: "2024-04-26T09:05:52Z",
          content:
            "Raymond Group Chairman and Managing Director Gautam Singhania's estranged wife Nawaz Modi claimed that there is an ongoing bid to remove her from the company's board months after divorce settlement t… [+2017 chars]",
        },
        {
          source: {
            id: null,
            name: "Ndtvprofit.com",
          },
          author: "Ananya Grover",
          title:
            "Multibagger: Indri Whiskey Makers Stock Locked In Upper Circuit For 10 Sessions In A Row - NDTV Profit",
          description:
            "The company's net profit rose multifold in Q4 FY24, even as it announced a Rs 1,000-crore fundraise.",
          url: "https://www.ndtvprofit.com/buzzing-stocks/stock-market-indri-whiskey-makers-stock-locked-in-upper-circuit-for-10-sessions-in-a-row",
          urlToImage:
            "https://media.assettype.com/bloombergquint%2F2024-04%2Ff870c5d4-9684-4d40-bcbf-7067849aed57%2FIndri.jpg?rect=0%2C49%2C535%2C281&w=1200&auto=format%2Ccompress&ogImage=true",
          publishedAt: "2024-04-26T08:49:47Z",
          content:
            "Piccadily Agro Industries Ltd., the maker of award-winning Indri Whisky, has added 100% to its share price since the start of April. For the tenth consecutive session, the stock remained locked at th… [+1006 chars]",
        },
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "Shivendra Kumar",
          title:
            "Bajaj Finserv Q4 Results: PAT jumps 20% YoY to Rs 2,119 crore - The Economic Times",
          description:
            "Bajaj Finserv Q4 Results: Consolidated total income for the March quarter stood at Rs 32,042 crore as against Rs 23,625 crore a year-ago, an upside of 36% YoY.",
          url: "https://economictimes.indiatimes.com/markets/stocks/earnings/bajaj-finserv-q4-results-pat-jumps-20-yoy-to-rs-2119-crore/articleshow/109620521.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-109620462,width-1200,height-630,imgsize-69926,overlay-etmarkets/photo.jpg",
          publishedAt: "2024-04-26T08:40:46Z",
          content:
            "Bajaj Finserv on Friday reported a 20% year-on-year (YoY) jump in its March quarter consolidated net profit at Rs 2,119 crore as against Rs 1,769 crore reported in the year-ago period.Consolidated to… [+1456 chars]",
        },
        {
          source: {
            id: null,
            name: "CNBCTV18",
          },
          author: "Meghna Sen",
          title:
            "Bank of Maharashtra Q4 Results: PAT jumps 45% to ₹1,218 crore; dividend declared - CNBCTV18",
          description:
            "Bank of Maharashtra's March quarter net interest income (NII) improved 18.2% to ₹2,584 crore from ₹2,187 crore in the year ago period.",
          url: "https://www.cnbctv18.com/market/bank-of-maharashtra-q4-results-share-price-profit-jumps-dividend-declared-record-date-19402795.htm",
          urlToImage:
            "https://images.cnbctv18.com/uploads/2023/01/stock-market-trading.jpg?im=FitAndFill,width=500,height=300",
          publishedAt: "2024-04-26T08:20:17Z",
          content:
            "Bank of Maharashtra's net profit jumped 45% year-on-year (YoY) to 1,217.7 crore for the fourth quarter ending March 2024. Net profit was 840 crore in the year ago period.The March quarter net interes… [+1018 chars]",
        },
        {
          source: {
            id: null,
            name: "Inshorts.com",
          },
          author: "Ankush Verma",
          title:
            "Can pay future salaries only if we find a strategic partner: Koo to employees | Koo remains operational: Bidawatka | Inshorts - Inshorts",
          description:
            "Amid cash constraints, Koo Co-founder Mayank Bidawatka in a post on LinkedIn said that the firm has informed e",
          url: "https://inshorts.com/en/news/can-pay-future-salaries-only-if-we-find-a-strategic-partner-koo-to-employees-1714058333945",
          urlToImage:
            "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2024/04_apr/25_thu/img_1714057435354_449.jpg?",
          publishedAt: "2024-04-26T08:17:30Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "FXStreet",
          },
          author: "Haresh Menghani",
          title:
            "Japanese Yen remains heavily offered near multi-decade low after BoJ Governor Ueda's comments - FXStreet",
          description:
            "The Japanese Yen (JPY) languishes near a multi-decade low against its American counterpart during the Asian session on Friday as traders keenly await the outcome of the highly-anticipated Bank of Japan (BoJ) policy meeting.",
          url: "https://www.fxstreet.com/news/japanese-yen-hangs-near-multi-decade-low-against-usd-ahead-of-boj-policy-decision-202404260147",
          urlToImage:
            "https://editorial.fxstreet.com/images/Markets/Currencies/Majors/USDJPY/usdjpy_Large.jpg",
          publishedAt: "2024-04-26T07:04:31Z",
          content:
            "<ul><li>The Japanese Yen weakens across the board after BoJ announced its policy decision. </li><li>The lack of action by Japanese authorities and softer Tokyo CPI also exert pressure.</li><li>Trader… [+6038 chars]",
        },
        {
          source: {
            id: null,
            name: "Motoroctane.com",
          },
          author: "Swaraj Acharekar",
          title: "New Volkswagen 7-Seater SUV Unveiled - MotorOctane",
          description:
            "Volkswagen has unveiled its new 7-seater SUV in China and this is also expected to come to Indian shores in the near future",
          url: "https://motoroctane.com/news/271804-new-volkswagen-7-seater-suv-unveiled-2",
          urlToImage:
            "https://motoroctane.com/wp-content/uploads/2024/04/new-7-seater-suv.jpg",
          publishedAt: "2024-04-26T06:51:56Z",
          content:
            "We have been talking about Volkswagen’s new 7-seater SUV for some time now. The car has been spied on a few times, and its design was also leaked earlier this year. Now, Volkswagen has finally unveil… [+2303 chars]",
        },
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "iStock",
          title:
            "Lok sabha elections: How stock markets behaved during last 4 Lok Sabha elections - Election rally - The Economic Times",
          description:
            "Lok Sabha elections always create a buzz around the D-Street. Over the long term, stock markets have generally exhibited positive returns despite short-term volatility related to elections. Volatility can work in both directions-upward and downward. While dow…",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/how-stock-markets-behaved-during-last-4-lok-sabha-elections/election-rally/slideshow/109615647.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-109615647,width-1070,height-580,overlay-etmarkets/photo.jpg",
          publishedAt: "2024-04-26T06:26:13Z",
          content:
            "Lok Sabha elections always create a buzz around the D-Street. Over the long term, stock markets have generally exhibited positive returns despite short-term volatility related to elections. Volatilit… [+435 chars]",
        },
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "Nishtha Awasthi",
          title:
            "LTTS shares plunge 10% on muted Q4 performance - The Economic Times",
          description:
            "The companys EBIT margin stood at 17.1% for the quarter ended March and the board has recommended a final dividend of Rs 33 per share.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/ltts-shares-plunge-10-on-muted-q4-performance/articleshow/109614763.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-109614741,width-1200,height-630,imgsize-7142,overlay-etmarkets/photo.jpg",
          publishedAt: "2024-04-26T05:55:10Z",
          content:
            "Shares of L&amp;T Technology Services fell 9.5% to the days low of Rs 4,689.50 on BSE in Friday's trade after the company yesterday reported an 8% year-on-year (YoY) growth in net profit at Rs 1,304 … [+2590 chars]",
        },
        {
          source: {
            id: null,
            name: "Entrackr",
          },
          author: "Harsh Upadhyay",
          title:
            "Lyskraft, founded by Mohit Gupta and Mukesh Bansal, bags $26 Mn in seed round - Entrackr",
          description:
            "Lyskraft, founded by Zomato’s co-founder Mohit Gupta and Myntra and Cultfit’s co-founder Mukesh Bansal, has scooped up $26 million.",
          url: "https://entrackr.com/2024/04/lyskraft-founded-by-mohit-gupta-and-mukesh-bansal-bags-26-mn-in-seed-round/",
          urlToImage:
            "https://entrackr.com/storage/2024/04/Mohit-gupta-Mukesh-bansal.jpg",
          publishedAt: "2024-04-26T05:49:21Z",
          content: null,
        },
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "Nishtha Awasthi",
          title:
            "Vedanta shares rally 5.5% after Q4 results. Should you buy, sell or hold? - The Economic Times",
          description:
            "Shares of Vedanta surged 5.5% to Rs 403 on the BSE even as the company's revenue and profit declined during the March quarter.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/vedanta-shares-rally-5-5-after-q4-results-should-you-buy-sell-or-hold/articleshow/109613783.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-109613766,width-1200,height-630,imgsize-38150,overlay-etmarkets/photo.jpg",
          publishedAt: "2024-04-26T05:25:34Z",
          content:
            "Shares of Vedanta rallied 5.5% to Rs 403 on BSE after the company following the March quarter results. The metal major reported a net profit of Rs 1,369 crore for the latest quarter, down over 27% (Y… [+2107 chars]",
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "HT News Desk",
          title:
            "Ashneer Grover mocks Kotak Mahindra Bank: ‘LOL! Banks se tech nahi ho rahi’ - Hindustan Times",
          description:
            "Ashneer Grover's tweet against Kotak Mahindra Bank comes after RBI said that the bank's IT system has been facing issues in the past two years.",
          url: "https://www.hindustantimes.com/business/ashneer-grover-mocks-kotak-mahindra-bank-lol-banks-se-tech-nahi-ho-rahi-101714107724184.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/04/26/1600x900/6628fb2952be5-ashneer-grover-24292877-16x9_1714108125557_1714108130086.jpg",
          publishedAt: "2024-04-26T05:17:41Z",
          content:
            "Ashneer Grover made a snide remark at Kotak Mahindra Bank after the lender's share prices dropped 10%. The Reserve Bank of India's (RBI) ordered the bank to stop adding new customers through its onli… [+1529 chars]",
        },
        {
          source: {
            id: null,
            name: "Financial Express",
          },
          author: "The Financial Express",
          title:
            "Tech Mahindra shoots up over 12% on 15% EBITA growth guidance by FY27; Find out what brokerages say? - The Financial Express",
          description: null,
          url: "https://www.financialexpress.com/market/tech-mahindra-shoots-up-over-12-on-15-ebita-growth-guidance-by-fy27-find-out-what-brokerages-say-3469065/",
          urlToImage: null,
          publishedAt: "2024-04-26T05:02:24Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "Livemint",
          },
          author: "Livemint",
          title:
            "Tata Electronics investing in high-tech machines to manufacture iPhone casing, plans 40 production lines in Tamil Nadu | Mint - Mint",
          description:
            "Tata Electronics, an arm of Tata conglomerate, has recently taken a bold step in India's tech sector by initiating a partnership aimed at localizing the production of iPhone casings. This move signifies a shift from reliance on China.",
          url: "https://www.livemint.com/companies/news/tata-electronics-invests-in-high-end-machines-to-manufacture-iphone-casing-plans-40-production-lines-at-hosur-facility-11714104275565.html",
          urlToImage:
            "https://www.livemint.com/lm-img/img/2024/04/26/1600x900/tata_iphone_1714105910280_1714105927798.png",
          publishedAt: "2024-04-26T04:34:44Z",
          content:
            "Tata Electronics, a significant player in assembling enclosures for Apple iPhones in India, has partnered with companies in Pune and Bengaluru to enhance the development of high-precision machines us… [+2539 chars]",
        },
        {
          source: {
            id: "reuters",
            name: "Reuters",
          },
          author: "Reuters",
          title:
            "Investors brace for 5% Treasury yields as US inflation worries mount - Reuters",
          description: null,
          url: "https://www.reuters.com/markets/us/investors-brace-5-treasury-yields-us-inflation-worries-mount-2024-04-26/",
          urlToImage: null,
          publishedAt: "2024-04-26T04:30:45Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "Ameya Joshi",
          title:
            "IndiGo’s new Airbus order: What it means for India’s largest airline - Hindustan Times",
          description:
            "IndiGo - the country’s largest carrier, has “agreed” to place a firm order for 30 A350-900 aircraft with Airbus.",
          url: "https://www.hindustantimes.com/business/indigos-new-airbus-order-what-it-means-for-india-s-largest-airline-101714104452200.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/04/26/1600x900/An-IndiGo-spokesperson-said-that-their-aircraft-wa_1711565091882_1714105373193.jpg",
          publishedAt: "2024-04-26T04:26:07Z",
          content:
            "The first hint of IndiGos widebody plans had come up in 2017. The airline expressed its interest to acquire the international business of Air India along with Air India Express. A lot of water has fl… [+5506 chars]",
        },
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "Shivendra Kumar",
          title:
            "F&O Ban List: Vodafone Idea enters trade ban on Friday. SAIL, 2 more stocks move out - The Economic Times",
          description:
            "The F&O contracts of any stock enter the ban period when the open interest (OI) on it crosses 95% of the market-wide positions limits or MWPL. The ban is reversed only if the open interest falls below 80%.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/fo-ban-list-vodafone-idea-enters-trade-ban-on-friday-sail-2-more-stocks-move-out/articleshow/109611459.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-109611442,width-1200,height-630,imgsize-91161,overlay-etmarkets/photo.jpg",
          publishedAt: "2024-04-26T04:14:55Z",
          content:
            "Vodafone Idea is under the F&amp;O trade ban on Friday while Aditya Birla Fashion &amp; Retail (ABFRL), state-run Steel Authority of India (SAIL) and Hindustan Copper have moved out of the ban. The F… [+1763 chars]",
        },
      ];
      setnews({
        ...news,
        articles: articles,
        isLoading: false,
        status: "ok",
      })

    };

    fetchData();
  }, []);

  const nextNews = () => {
    const parent = document.getElementById("cardContainer");
    parent.style.transform = `translateX(-${33.333 * news.cardNumber}%)`;
    setnews({ ...news, cardNumber: news.cardNumber + 1 });
  };

  const prevNews = () => {
    const parent = document.getElementById("cardContainer");
    parent.style.transform = `translateX(-${33.333 * (news.cardNumber - 2)}%)`;
    setnews({ ...news, cardNumber: news.cardNumber - 1 });
  };

  return (
    <div className="w-full h-[70%] relative overflow-hidden flex justify-center items-center">
      {news.isLoading && <Spinner />}
      {!news.isLoading && news.status === "error" && (
        <p className="text-3xl font-semibold text-gray-400">
          No News is Available For Now!
        </p>
      )}
      {!news.isLoading && news.status === "ok" && (
        <div className="w-full h-full bg-transparent flex justify-between text-5xl font-light text-black absolute">
          <div className="h-full w-[2%] flex items-center justify-center relative z-10">
            <button
              className={`${
                news.cardNumber === 1
                  ? "text-slate-500 cursor-not-allowed"
                  : "hover:text-blue-600 "
              }`}
              onClick={prevNews}
              disabled={news.cardNumber === 1}
            >
              &lt;
            </button>
          </div>
          <div className="h-full w-[2%] flex items-center justify-center relative z-10">
            <button
              className={`${
                news.cardNumber >= news.articles.length - 2
                  ? "text-slate-500 cursor-not-allowed"
                  : "hover:text-blue-600 "
              }`}
              onClick={nextNews}
              disabled={news.cardNumber >= news.articles.length - 2}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
      {!news.isLoading && news.status === "ok" && (
        <div
          id="cardContainer"
          className="w-full h-full flex items-center justify-between relative duration-[400ms] ease-linear"
        >
          {news.articles.map((e, index) =>
            card({
              key: index,
              title: e.title ? e.title : "",
              description: e.description ? e.description : "",
              urlImg: e.urlToImage ? e.urlToImage : noIMG,
              url: e.url ? e.url : "",
            })
          )}
        </div>
      )}
    </div>
  );
}

export default News;
