## Features
Our free Instagram Likes and Comments Post Scraper allows you to scrape comments and likes from one or more Instagram post URLs, even if [likes are HIDDEN by author](https://help.instagram.com/113355287252104/).
Please note that replies and comments handled in a same way, no nesting for replies to comments, all results saved as plain table data to keep it CSV friendly.

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

### Using proxies
Datacenter proxies recommended.

## Input parameters
The input of this scraper should be JSON containing the list of posts that should be scraped. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| startUrls | Array | (required) Instagram URL(s) to scrape from |
| sessionid | Boolean | Cookie to connect to Instagram account |

### Instagram output example
The actor stores its results in a dataset. Each item is a separate item in the dataset.

You can manage the results in any language (Python, PHP, Node.js/NPM). See the [Apify API docs](https://docs.apify.com/api/v2) to learn more about getting results from the Instagram Scraper.

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