import {NextResponse} from 'next/server';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';


type Props = {
    params: {
        id: string
    };
};

async function GET(request: Request, {params: {id}}: Props) {
    // const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    if(!id) return NextResponse.json({message: 'missing id'});
    const res = await fetch(`${API_URL}/${id}`);
    const todo = await res.json();
    return NextResponse.json(todo);
};

export {GET};


