// "use server"
// import collection from "@utils/texts";

export const fetchManuscripts = async () => {
    // let manuscripts;
    // try {
    //     manuscripts = await collection.find().sort({ createdAt: -1 }).toArray();
    // } catch (error) {
    //     console.log(error);
    // }

    // return manuscripts;

    // const response = await fetch(`${process.env.SITE_URL}/api`, {
    const response = await fetch(`http://127.0.0.1:3000/api`, {
        next: {
            revalidate: 0,
        },
    });
    const manuscriptsData = await response.json();
    return manuscriptsData;
};
