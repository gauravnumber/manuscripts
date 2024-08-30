// import collection from "@utils/texts";

export const fetchManuscripts = async () => {
    // const { data, error, isLoading } = useSWR(`http://127.0.0.1:3000/api`, fetcher)
    // return manuscripts
    const response = await fetch(`http://127.0.0.1:3000/api`, {
        next: {
            revalidate: 0,
        },
    });
    const manuscriptsData = await response.json();
    // const manuscriptsData = await collection
    //     .find()
    //     .sort({ createdAt: -1 })
    //     .toArray();
    return manuscriptsData;
};
