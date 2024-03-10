export enum Data {
    Home = 'Home',
    Chat = 'Chat',
    MyAI = 'My AI',
    Profile = 'Profile',
    Star = 'Star',
    Favorite = 'Favorite',
    Create = 'Create',

    Latest = 'Latest',
    Prompt = 'Prompt',
    Character = 'Character',
    Creative = 'Creative',
    Programming = 'Programming',
    Science = 'Science',
}

export enum Links {
    Home = '/',
    Chat = '/chat',
    MyAI = '/myai',
    Profile = '/profile',
    Star = '/star',
    Favorite = '/favorite',
    Create = '/create',
}

export enum CardProps {
    Genre = "genre",
    Image = "image",
    Icon = "icon",
    Likes = "likes",
    Views = "views",
}

export enum ImageUrl{
    Kitten = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1685073551/samples/animals/kitten-playing.gif",
    Puppy = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1685073561/cld-sample.jpg",
    Mountain = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1685073562/cld-sample-2.jpg",
    Sport = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1685073562/cld-sample-3.jpg",
    Food = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1685073563/cld-sample-4.jpg",
    Monkey = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1709906299/s6kwpb1lg8ywk5gumc5m.gif",
    Spiderman = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1709906861/lowmbrgjmwexjicury6e.gif",
    Eagle = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1687969261/download_vydja3.jpg",
    Code = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1709907388/samples/hkhb35ox6y8vwnpwhtbw.gif",
    Person = "https://res.cloudinary.com/dofq9gh9l/image/upload/v1685880027/avatars/x0wuvky7za0s2q9wxljw.jpg"
}

export type LLMProps = "ChatGPT" | "Llama" | "Replit" | "EleutharAI" | "Cohere" | "Goose";