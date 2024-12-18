export function start () {
    import('./app');
}

export async function http () {
    console.log(await import('axios'))
}