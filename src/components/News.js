import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles= [
        {
          "source": { "id": null, "name": "New York Post" },
          "author": "Will Feuer",
          "title": "Watch live: President Joe Biden addresses weak August jobs report - New York Post ",
          "description": "President Joe Biden is addressing the public about the weaker-than-expected August jobs report, as surging COVID-19 cases driven by the Delta variant.",
          "url": "https://nypost.com/2021/09/03/watch-live-president-joe-biden-addresses-weak-august-jobs-report/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/09/AP21245616505528.jpg?quality=90&strip=all&w=1024",
          "publishedAt": "2021-09-03T14:01:00Z",
          "content": "President Joe Biden is addressing the public about the weaker-than-expected August jobs report, as surging COVID-19 cases driven by the Delta variant and accompanying legislation providing unemployme… [+1292 chars]"
        },
        {
          "source": { "id": null, "name": "Fortnite Insider" },
          "author": null,
          "title": "Fortnite Operation Sky Fire Season 7 Live Event - Date, Time & More - Fortnite Insider",
          "description": "Here’s what we know about the Fortnite chapter 2 season 7 event, Operation Sky Fire, including the date and time of the event. We saw a mothership enter the Fortnite world and hover around the map throughout season 7. We’ve had a few named locations being abd…",
          "url": "https://fortniteinsider.com/fortnite-operation-sky-fire-season-7-live-event-date-time-more/",
          "urlToImage": "https://cdn.fortniteinsider.com/wp-content/uploads/2021/09/03133233/Fortnite-Sky-Fire-Event.jpg",
          "publishedAt": "2021-09-03T12:41:41Z",
          "content": "Here’s what we know about the Fortnite chapter 2 season 7 event, Operation Sky Fire, including the date and time of the event.\r\nWe saw a mothership enter the Fortnite world and hover around the map t… [+1946 chars]"
        },
        {
          "source": { "id": "the-verge", "name": "The Verge" },
          "author": "Jay Peters",
          "title": "Apple delays controversial child protection features after privacy outcry - The Verge",
          "description": "Apple is delaying its child protection features, including a controversial feature that would scan users’ photos for child sexual abuse material after criticism that the changes could diminish user privacy.",
          "url": "https://www.theverge.com/2021/9/3/22655644/apple-delays-controversial-child-protection-features-csam-privacy",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/ic0cxlxIefz5FuIWsotP8KINBLI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19182546/acstro_190902_apple_event_0004.0.jpg",
          "publishedAt": "2021-09-03T13:40:44Z",
          "content": "The changes were supposed to roll out later this year\r\nApple delays controversial child protection features\r\nIllustration by Alex Castro / The Verge\r\nApple is delaying its child protection features a… [+2444 chars]"
        },
        {
          "source": { "id": null, "name": "NPR" },
          "author": null,
          "title": "McCarrick — Once A Powerful Cardinal — Pleads Not Guilty To Sexual Assault Charges - NPR",
          "description": "Theodore McCarrick is the only U.S. Catholic cardinal, current or former, ever to be criminally charged with child sex crimes. He was defrocked in 2019.",
          "url": "https://www.npr.org/2021/09/03/1033963664/catholic-church-abuse-charges-theodore-mccarrick",
          "urlToImage": "https://media.npr.org/assets/img/2021/09/03/ap21246475992821_wide-c539221c304a3d607bfb76acbfdee294c192cf6f.jpg?s=1400",
          "publishedAt": "2021-09-03T12:51:34Z",
          "content": "Theodore McCarrick, who was defrocked by the Roman Catholic Church over sexual abuse allegations, faces charges that he sexually assaulted a 16-year-old boy during a wedding reception in Massachusett… [+5796 chars]"
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Derrick Bryson Taylor",
          "title": "Here's What Train Service Looks Like in NY After Ida's Damaging Floods - The New York Times",
          "description": "The majority of the city’s subway lines had delays Friday morning, while the area’s airports appeared to be running smoothly.",
          "url": "https://www.nytimes.com/2021/09/03/nyregion/nyc-trains-amtrak-hurricane-ida.html",
          "urlToImage": "https://static01.nyt.com/images/2021/09/03/world/03nyc-storm-friday-transit/03nyc-storm-friday-transit-facebookJumbo.jpg",
          "publishedAt": "2021-09-03T11:46:46Z",
          "content": "Amtrak said it would resume service along the Northeast Corridor, between Washington and Boston, on Friday, but it said trains between Albany and New York City would remain canceled.\r\nNew Jersey Tran… [+669 chars]"
        },
        {
          "source": { "id": "the-hill", "name": "The Hill" },
          "author": "Rachel Scully",
          "title": "Japanese Prime Minister Yoshihide Suga to step down | TheHill - The Hill",
          "description": "Japanese Prime Minister Yoshihide Suga on Friday announced that he would be stepping down fr...",
          "url": "https://thehill.com/policy/international/asia-pacific/570705-japanese-prime-minister-yoshihide-suga-to-step-down",
          "urlToImage": "https://thehill.com/sites/default/files/article_images/sugayoshihide_getty_090321_0.jpg",
          "publishedAt": "2021-09-03T11:40:55Z",
          "content": "Japanese Prime Minister Yoshihide Suga on Friday announced that he would be stepping down from his position as his approval ratings continued to fall due to his handling of the coronavirus pandemic.\r… [+1615 chars]"
        },
        {
          "source": { "id": null, "name": "InStyle" },
          "author": "Tessa Petak",
          "title": "Kristen Stewart Wore the World's Shortest Romper to the Spencer Premiere - Yahoo! Voices",
          "description": "Like, super super short.",
          "url": "https://www.instyle.com/celebrity/kristen-stewart/kristen-stewart-short-chanel-romper-spencer-premiere",
          "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&rect=23%2C36%2C1947%2C998&poi=%5B1000%2C416%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2021%2F09%2F03%2FKristen-Stewart-Social-2000.jpg",
          "publishedAt": "2021-09-03T13:04:02Z",
          "content": "Leave it to Kristen Stewart to wear a romper on the red carpet that is at once polished and NSFW.\r\nOn Friday, the actress showed up to the premiere of her film Spencer at the Venice Film Festival pre… [+1145 chars]"
        },
        {
          "source": { "id": null, "name": "Dexerto" },
          "author": null,
          "title": "Vtuber does TV interview in character on Fox 5 News about Twitch protest - Dexerto",
          "description": "Fox 5 News invited popular Vtuber BuffPup onto their show to talk about A Day Off Twitch while in character as their animated avatar.",
          "url": "https://www.dexerto.com/entertainment/vtuber-does-tv-interview-in-character-on-fox-5-news-about-twitch-protest-1645054/",
          "urlToImage": "https://www.dexerto.com/wp-content/uploads/2021/09/03/Twitch-Vtuber-BuffPup-Fox-5-News-Interview.jpg",
          "publishedAt": "2021-09-03T10:23:22Z",
          "content": "Popular Vtuber BuffPup appeared in character during a TV interview with Fox 5 News to talk about the recent Twitch protests and why it’s so important to tackle hate raids on the platform.\r\nOn Septemb… [+2129 chars]"
        },
        {
          "source": { "id": null, "name": "fox8.com" },
          "author": "Talia Naquin",
          "title": "Every county in Ohio has highest level of coronavirus transmission: CDC - WJW FOX 8 News Cleveland",
          "description": "CLEVELAND, Ohio (WJW) – All Ohio counties are now rated in the red with high community transmission of COVID-19. Ashtabula County was the last of 88 counties in the state to reach a high status. The CDC’s color code system uses COVID-19 case rates and percent…",
          "url": "https://fox8.com/news/coronavirus/every-county-in-ohio-has-highest-level-of-coronavirus-transmission-cdc/",
          "urlToImage": "https://fox8.com/wp-content/uploads/sites/12/2021/09/red.png?w=1280",
          "publishedAt": "2021-09-03T09:32:13Z",
          "content": "CLEVELAND, Ohio (WJW) All Ohio counties are now rated in the red with high community transmission of COVID-19.\r\nAshtabula County was the last of 88 counties in the state to reach a high status.\r\nThe … [+770 chars]"
        }
    ]

    constructor(){  
        super();  
        console.log("I am constrctr")
        this.state={
            articles:this.articles,
            loading : false
        }
    }  

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" >NewsDaily - Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((element)=>{
            return   <div className="col-lg-4 col-sm-6 " key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
            </div>
          </div>
      </>
    );
  }
}

export default News;