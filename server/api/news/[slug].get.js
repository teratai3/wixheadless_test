export default defineEventHandler(async (event) => {
    const wixClient = await WixClient();

    const Item = await wixClient.dataItems
                        .queryDataItems({
                            dataCollectionId: 'News',
                        }).eq('slug', event.context.params.slug).find();

    return (Item);
});