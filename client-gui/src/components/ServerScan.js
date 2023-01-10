

export default async function ServerScan(url) {
    let load = await fetch('http://localhost:8080/api/injections');
    load = await load.text();
    load = JSON.parse(load);
    return load
}