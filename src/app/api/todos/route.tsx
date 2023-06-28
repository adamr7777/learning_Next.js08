
import {NextResponse} from 'next/server';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

async function GET() {
    const res = await fetch(API_URL );
    const todos: Todo[] = await res.json();
    return NextResponse.json(todos);
};

export {GET};