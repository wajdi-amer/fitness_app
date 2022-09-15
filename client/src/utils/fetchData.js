export const fetchData = async (api, url, extraOptions) => {
    const data = await api.get(url, extraOptions);

    return data;
}