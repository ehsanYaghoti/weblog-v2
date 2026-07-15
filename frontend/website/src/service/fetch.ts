type FetcherOptions<TBody> = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url: string;
    body?: TBody;
};

export default async function fetcher<TBody, TResponse>({ method, url, body }: FetcherOptions<TBody>): Promise<TResponse> {


    const res = await fetch(url, {
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json();

    if (!res.ok) throw data;

    return data;


}
