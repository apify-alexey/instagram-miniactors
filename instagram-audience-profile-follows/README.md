## Features
Our free Instagram Follower & Following Profile Scraper allows you to scrape follower&following from one or more Instagram profile URLs.

**Bulk (up to 10x thousands) results, you should be able to get around 7.000 - 10.000 items per hour**

## Why scrape Instagram follower or following?
Scraping follows on Instagram profiles can give you quick insights on how an audience is reacting to marketing campaigns, enable you to spot misinformation or abuse, track audience engagement, or help you monitor how competing content is being received.

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
The input of this scraper should be JSON containing the list of profiles that should be scraped. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| startUrls | Array | (required) Instagram URL(s) to scrape from |
| sessionid | Boolean | Cookie to connect to Instagram account |

### Instagram output example
The actor stores its results in a dataset. Each item is a separate item in the dataset.

You can manage the results in any language (Python, PHP, Node.js/NPM). See the [Apify API docs](https://docs.apify.com/api/v2) to learn more about getting results from the Instagram Scraper.

```jsonc
{
  "type": "following",
  "instagramUrl": "https://www.instagram.com/apifytech/",
  "profileUrl": "https://www.instagram.com/jancurn",
  "profilePic": "https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-19/11848957_430644727127321_871406909_a.jpg?_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_cat=105&_nc_ohc=PVErviPbep8AX-_tWiQ&edm=ALB854YBAAAA&ccb=7-5&oh=00_AT8v3Kumv-iOFoevt0vGhG9r8Y5R9m8afayjmr0KpNjjKQ&oe=62A5EAD1&_nc_sid=04cb80",
  "pk": 1087746859,
  "username": "jancurn",
  "full_name": "Jan Čurn",
  "is_private": false,
  "is_verified": false,
  "follow_friction_type": 0,
  "growth_friction_info": {
    "has_active_interventions": false,
    "interventions": {}
  },
  "account_badges": [],
  "has_anonymous_profile_picture": false,
  "has_highlight_reels": false,
  "latest_reel_media": 0,
  "is_favorite": false
},
{
  "type": "followers",
  "instagramUrl": "https://www.instagram.com/apifytech/",
  "profileUrl": "https://www.instagram.com/alexeyudovydchenko",
  "profilePic": "https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-19/21879069_1932425943664048_6301929264866394112_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=104&_nc_ohc=uhxi5nJ0FlUAX8avRcf&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AT9zDV070xLcpt-4Wxbc_a9Xws_Ol2KkL-iBgLhteljaHQ&oe=62BA10FF&_nc_sid=e5d0a6",
  "pk": 6083345372,
  "username": "alexeyudovydchenko",
  "full_name": "Alexey Udovydchenko",
  "is_private": false,
  "profile_pic_id": "1609845100345983280_6083345372",
  "is_verified": false,
  "follow_friction_type": 0,
  "growth_friction_info": {
    "has_active_interventions": false,
    "interventions": {}
  },
  "has_anonymous_profile_picture": false,
  "reel_auto_archive": "unset",
  "allowed_commenter_type": "any",
  "has_highlight_reels": false,
  "interop_messaging_user_fbid": 115831779801868,
  "account_badges": [],
  "fbid_v2": "17841406041170418",
  "liked_clips_count": 1,
  "all_media_count": 1,
  "latest_reel_media": 0
}
```

## Personal data
You should be aware that your results could contain personal data. Personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).