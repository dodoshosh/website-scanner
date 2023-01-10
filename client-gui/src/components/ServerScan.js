

export default async function ServerScan(url) {
    let load = await fetch(`http://localhost:8080/api/injections?url=${url}`);
    load = await load.text();
    load = JSON.parse(load);
    return load
}