import qs from "qs";


const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
  };
  const config = {
    runtime:'edge',
 }




export async function getSummaries(queryString ,currentPage) {

  const PAGE_SIZE = 4;
  const query = qs.stringify({
    populate: ['Image'],
    sort: ['id:desc'],
    filters: {
      $or: [
        { Title: { $containsi: queryString } },
      ],
    },
    pagination: {
      pageSize: PAGE_SIZE,
      page: currentPage,
    },
  });
  const res = await fetch(`${process.env.API_BASE_URL}/api/movies?${query}`,headers,config)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
  }


