## Features
Our free Instagram Likes and Comments Post Scraper allows you to scrape comments and likes from one or more Instagram post URLs, even if [likes are HIDDEN by author](https://help.instagram.com/113355287252104/).

**Bulk (up to 10x thousands) results, you should be able to get around 7.000 - 10.000 items per hour**

## Why scrape Instagram comments or likes?
Scraping comments on Instagram posts can give you quick insights on how an audience is reacting to marketing campaigns, enable you to spot misinformation or abuse, track audience engagement, or help you monitor how competing content is being received.

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

## Get your cookie
Actor needs to connect to Instagram user account. To do this, it needs your session cookie named `sessionid`.
Don't worry! Actor doesn't know your password, nor your email address.

- Open a new tab and go to the Instagram website. Right-click anywhere on the page and open "Inspect".
- Locate the "Application" tab. Then select "Cookies" > "http://www.instagram.com". Locate the cookie `sessionid`
- Copy this and paste it back into the input in your Apify actor.

## Want to scrape Instagram hashtags, profiles, or posts?
Use our super fast and easy dedicated scrapers if you want to scrape specific Instagram data. Fewer settings to change and faster results. Just enter one or more Instagram usernames or URLs and click to scrape.

- [Instagram Hashtag Scraper](https://apify.com/zuzka/instagram-hashtag-scraper)
- [Instagram Profile Scraper](https://apify.com/zuzka/instagram-profile-scraper)
- [Instagram Post Scraper](https://apify.com/zuzka/instagram-post-scraper)

## Is it legal to scrape Instagram?
Our Instagram scrapers are ethical and do not extract any private user data, such as email addresses, gender, or location. They only extract what the user has chosen to share publicly. We therefore believe that our scrapers, when used for ethical purposes by Apify users, are safe. However, you should be aware that your results could contain personal data. Personal data is protected by the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

## Need something more advanced?
Try our more advanced [Instagram Scraper](https://apify.com/jaroslavhejlek/instagram-scraper) if you need more options and are comfortable with changing settings.

Let us know if you need a [custom Instagram scraping solution](https://apify.com/custom-solutions).

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

## Cost of usage
There are two main factors to take into account if you want to run one of our Instagram scrapers on the Apify platform:
- [Compute units](https://apify.com/pricing/actors) - used for running the scraper
- [Residential proxy traffic](https://apify.com/pricing/proxy) - needed to access Instagram without login

### Using proxies
Instagram now aggressively blocks scrapers and redirects them to a login page. The only reliable solution to this problem is to use residential proxies. Datacenter proxies only work in rare cases.

### Residential proxies
Instagram scraper is free to use, although you will need to use [residential proxies](https://apify.com/proxy?pricing=residential-ip#pricing) on [Apify Proxy](https://apify.com/proxy) if you run it on the Apify platform. This is because Instagram changed the rules in 2021 and now you always need to use a residential proxy for scraping. Luckily, every new Apify account includes a small free trial of residential proxies, so you should be able to test any of our Instagram scrapers.

### Custom proxies
You can also use proxies from other providers in the custom proxies fields (`proxyUrls` in the JSON settings).

### Cost of usage breakdown
Scraping 1,000 Instagram comments will cost you just $3.25 platform credits from your [Apify subscription plan](https://apify.com/pricing).

Scraping **1,000 results** requires about:
- **0.5 compute unit**
- **0.24 GB of proxy traffic**

### Example pricing
Based on Apify's pricing at the time of writing, scraping **1,000 results** would cost 0.5 CU * $0.25 + 0.24 GB * 12.5 GB, which is a total of **$1.55**. The Apify Personal plan ($49) would allow you to scrape about 9,000 Instagram results monthly.

### Apify residential proxies
The Apify platform [provides residential proxies](https://apify.com/proxy?pricing=residential-ip#pricing) if you have a paid subscription. These proxies are only available to be run within actors on the Apify platform, not externally. If you are interested in using residential proxies for this scraper, contact `support@apify.com` via email or in-app chat to get the proxies enabled.

## Input parameters
The input of this scraper should be JSON containing the list of posts that should be scraped. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| startUrls | Array | (required) Instagram URL(s) to scrape from |
| sessionid | Boolean | Cookie to connect to Instagram account |

### Instagram output example
The actor stores its results in a dataset. Each item is a separate item in the dataset.

You can manage the results in any language (Python, PHP, Node.js/NPM). See the [Apify API docs](https://docs.apify.com/api/v2) to learn more about getting results from the Instagram Scraper.

The structure of each item in Instagram posts when scrolling looks like this:

```jsonc
{
  "type": "likes",
  "instagramUrl": "https://www.instagram.com/p/Cea0CCbPdc7/",
  "profileUrl": "https://www.instagram.com/hermes.ti.amo",
  "profilePic": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/122366978_380422526415759_5700090543334163513_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=teXWO_qcU9wAX9v3Ss3&edm=AAo1ks0BAAAA&ccb=7-5&oh=00_AT9mC0MkYIUus8pbOR0MV9QJv6lHRzBJIcNzYnLydWyDMA&oe=62B8CD27&_nc_sid=01e9e1",
  "id": "43247504450",
  "username": "hermes.ti.amo",
  "full_name": "La_vita_e_bella",
  "is_verified": "false",
  "followed_by_viewer": "false",
  "requested_by_viewer": "false"
},
{
  "type": "comments",
  "instagramUrl": "https://www.instagram.com/p/Cex7LLrsZjK/",
  "profileUrl": "https://www.instagram.com/alicia.vargs77",
  "profilePic": "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/274364926_730920821205588_7583235842240429740_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=k_Ul2wC12a0AX-U3-sQ&edm=AI-cjbYBAAAA&ccb=7-5&oh=00_AT9ZDexZmNUj8sGB-9lEXfl72W823MmZZaKDazfeTUH4yA&oe=62B1BF19&_nc_sid=ba0005",
  "created_at": "6/14/2022, 9:23:00 AM",
  "id": "17941587577983262",
  "text": "Promote it on @travel.monde_ 💛",
  "username": "alicia.vargs77"
}
```

## Personal data
You should be aware that your results could contain personal data. Personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).