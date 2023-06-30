import {NextResponse} from 'next/server';


function middleware(request: Request) {
    const origin = request.headers.get('origin');

    // console.log('Middleware:');
    // console.log(origin);
    // console.log(request.method);
    // console.log(request.url);
    return NextResponse.next()
};

const config = {
    matcher: 'api/:path*'
}


export {middleware, config};