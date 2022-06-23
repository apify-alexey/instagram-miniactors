import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('jaroslavhejlek/instagram-scraper', input);
});