
import {NextResponse} from 'next/server';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const API_KEY: string = process.env.API_KEY as string;

async function GET() {
    const res = await fetch(API_URL );
    const todos: Todo[] = await res.json();
    return NextResponse.json(todos);
};

async function POST(request: Request) {
    const {userId, title} = await request.json(); 
    if(!userId || !title) return NextResponse.json({message: 'required data missing'});
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY,
        },
        body: JSON.stringify({
            userId, title, completed: false
        }),
    });
    const todo = await res.json(); 
    return NextResponse.json(todo);
};


async function PUT(request: Request) {
    const {userId, id, title, completed} = await request.json();
    if(!userId || !id || !title || typeof(completed) !== 'boolean') 
        return NextResponse.json({message: 'missing requiered data'});
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY,
        },
        body: JSON.stringify({
            userId, title, completed
        }),
    });
    const todo = await res.json();
    return NextResponse.json({todo});
};



async function DELETE(request: Request) {
    const {id} = await request.json();
    if(!id) return NextResponse.json({message: 'there is no id'});
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY,
        },
    });
    return NextResponse.json({message: `todo ${id} has been deleted`});
};



export {GET, POST, PUT, DELETE};