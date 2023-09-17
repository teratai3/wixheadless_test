export default defineEventHandler(async (event) => {
    const wixClient = await WixClient();

    const Items = await wixClient.dataItems.queryDataItems({
        dataCollectionId: 'News',
    }).find();    

    return (Items);
});