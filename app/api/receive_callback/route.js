export async function POST(request) {
    const { body } = request;
    console.log("🚀 ~ POST ~ body:", body)
    if (body.status === 'PAID') {
        console.log(`Invoice successfully paid with status ${body.status} and id ${body.id}`)
    }
}