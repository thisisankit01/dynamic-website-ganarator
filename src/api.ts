import axios from "axios";

export async function fetchData(maxRetries: number = 3): Promise<any> {
  const axiosInstance = axios.create({
    timeout: 5000,
  });

  let retries = 0;
  while (retries < maxRetries) {
    try {
       respon
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const res = await axiosInstance.get(
        `https://www.boredapi.com/api/activity`
      );
      const mockData = {
        activity: "Mock Activity",
        type: "mock",
        participants: 1,
        price: 0.5,
        link: "",
        key: "mock-key",
        accessibility: 0.2,
      };
      return res.data;
    } catch (err) {
      console.error(`Error while fetching data: ${err.message}`);
      retries++;
    }
  }
  console.error("Failed to fetch data after multiple retries.");
  return null;
}

console.log(fetchData());
